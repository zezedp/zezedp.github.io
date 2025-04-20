---
title: "RSA Oracle" 
published: 2025-04-19
description: ""
tags: [picoCTF]
category: Write-Ups 
draft: false
---
# RSA Oracle 

In cryptography, an **oracle** is a system or service that performs cryptographic operations - like encryption or decryption - on behalf of a user. Many CTF challenges won't give you the source code, but will allow you to exploit them to gain information about encrypted data or reverse operations that should be kept secret.


<blockquote>
Challenge:

 An attacker was able to intercept communications between a bank and a fintech company. They managed to get the message (ciphertext) and the password that was used to encrypt the message. After some intensive reconassainance they found out that the bank has an oracle that was used to encrypt the password and can be found here nc titan.picoctf.net 65124. 
</blockquote>

So, what we have here is essentially an RSA challenge with a small twist involving AES-256-CBC. We know that the file *secret.enc* was encrypted using AES-256-CBC, and the encryption key for that process is stored in *password.enc*. We also know that the Oracle encrypted the password, so what that tells me is that I can turn this oracle into an attack vector.

Connecting to the chall I noticed that the encryption scheme is RSA, and since we don't know any information about the public-key, my first thought was to inject something into the ciphertext, then decrypt it - this is called **chosen ciphertext attack** 

## Chosen Ciphertext Attack:

Given a ciphertext $c\equiv m^e \mod n$, the attacker needs to choose a small plaintext, such as $2$, that is easier to factor out and manipulate the ciphertext when interacting with the oracle.

We then send the value $2$ to the oracle for encryption, which gives us $2^e \mod n$. Since we already have the ciphertext $c=m^e \mod n$, we can compute the product $c\cdot 2^e \mod n$. This operation corresponds to encrypting $2\cdot m$, due to the homomorphic property of RSA over multiplication:

$$
(m^e \cdot 2^e)^d = (m\cdot 2)^{ed} \equiv (m \cdot 2) \mod n
$$

Now, if we send this product to the decryption oracle, it will return $2\cdot m$. Since this is just a scalar multiple of the original plaintext, recovering $m$ becomes trivial - we simply divide by $2$, and we don't even need to worry about taking it modulo $n$ because we chose a really small number to multiply with our ciphertext.

## Solve:

The challenge expects you to connect the oracle and send either 'E' or 'D' to encrypt or decrypt, respectively. Since we know that the ciphertext we want to decrypt is inside of the *password.enc* file, we just need to open it and store the variable like this:

```
with open('password.enc', 'r') as f:
    line = f.readline().encode()
    password = int(line)
```

Next, we send 0x2 as plaintext to the oracle for encryption sice we don't have access to the public key. After receiving the ciphertext, we send the product of the output ciphertext and the encrypted password back to the oracle for decryption.

Thus, we have the equation $($password$\cdot 2)^{ed} \mod n =$password$\cdot 2$. Now, to recover the password, we simply divide the result by 2 and decode it using the ASCII table

After that, decrypting the original message is pretty straightforward. We can use the following command to decrypt the *secret.enc* file using OpenSSL:

```
openssl enc -aes-256-cbc -d -in secret.enc -out flag.txt -pass pass:<recovered_password>
```

where recovered_password="da099". Looking inside the flag.txt output file, we recover the flag which is:

```
picoCTF{su((3ss_(r@ck1ng_r3@_da099d93}
```
## Code Implementation

```
from pwn import *
with open('password.enc', "r") as f:
    line = f.readline().encode()
    ciphertext = int(line)

connection= remote('titan.picoctf.net',65124 )

r = connection.recvuntil(b'.')

print(r.decode())

payload = b'E'+b'\n'

connection.send(payload)

r = connection.recvuntil(b':')

print(r.decode())

payload = b'\x02' + b'\n'
connection.send(payload)
r = connection.recvuntil(b'n)')
r = connection.recvline()

send = int(r) * ciphertext

r = connection.recvuntil(b'.')
print(r.decode())
payload = b'D'+b'\n'

connection.send(payload)

r = connection.recvuntil(b':')
print(r.decode())
connection.send(str(send).encode()+b'\n')

r = connection.recvline().decode().strip()
t = int(r.split(": ")[1], 16)

r = connection.recvline()
print(r.decode())
password = bytes.fromhex(hex(t//2)[2:]).decode('ascii')

print(password)
```


