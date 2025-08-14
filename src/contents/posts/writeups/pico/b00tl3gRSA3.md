---
title: "b00tl3gRSA3" 
published: 2025-04-19
description: "Using ECM factorization algorithm to break RSA."
tags: [picoCTF]
category: Write-Ups 
draft: false
---
# b00tl3gRSA3

This is a simple challenge about RSA. The challenge gives you a hint about what is wrong about this implementation of RSA
<blockquote>
Why use p and q when I can use more?
</blockquote>


### Let's Recap:

RSA is a public-key cryptosystem based on the difficulty of the Factoring Problem, which is computationally hard. The RSA algorithm uses two large, randomly chosen prime numbers, $p$ and $q$, and multiplies them together to generate a composite number $n=p\times q$, which will be used in both the public and private key.

Alice will compute Euler's totient function $\phi(n)=(p_1-1)\cdot p_1^{k_1-1} \cdot \dots \cdot (p_r -1)\cdot p_r^{k_r-1} $, where $n=\prod_{i=1}^r p_i^{k_i}$. Since in this scenario $n=p\times q$ with $p,q$ primes, we have $\phi(n)=(p-1)\cdot(q-1)$. 


<blockquote>
Euler's Theorem

Let $n$ be a positive integer. If $gcd(b,n)=1$, then $b^{\phi(n)}\equiv 1 \mod n$.
</blockquote>

$Proof. $ If $n$ is a prime, then it follows from Fermat's Little Theorem. Otherwise, assume $n$ is a composite number and take

The public exponent $e=65537$ has become a de facto standard in RSA, mostly because it's relatively small prime number and a Fermat Number $(2^{16}+1)$, which ensures that it is coprime with $\phi(n)$ for most of choices os $n$, and the private-key $d$ is the multiplicative inverse of $e$ on the quotient ring $\mathbb{Z}/\phi(n)\mathbb{Z}$.

Bob receives from Alice the pair $(n,e)$ and encrypts the message $c\equiv m^e \mod n$, after that Alice decrypts it using Euler's Thereom simply by computing $c^d = m^{ed} = m^{\phi(n) + 1} = m^{\phi(n)} \cdot m \equiv m\mod n$.

### Solve:

Once we connect to nc jupiter.challenges.picoctf.org 51575, the tuple $(c,n,e)$ is displayed on the screen. My first idea was to try factoring $n$, since once we know its prime factors, we can compute $\phi(n)$, and then determine the private key $d$ such that $ed\equiv 1 \mod \phi(n)$.

To do this, I used Sage's implementation of the Lenstra Elliptic Curve Factorization algorithm, which runs in sub-exponational time. Then, I iteratively computed the product $(p_{i}-1)$ for each of the prime factors to obtain $\phi(n)$. 

From there, recovering the original message is pretty straightforward — and just like that, we get the flag.
```
picoCTF{too_many_fact0rs_0731311}
```
### Code implementation:
```
import socket
import re
from Crypto.Util.number import long_to_bytes
host = 'jupiter.challenges.picoctf.org'
port = 51575
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect((host, port))

data = sock.recv(1024).decode()
numbers = re.findall(r':\s*(\d+)', data)
c, n, e = int(numbers[0]), int(numbers[1]), int(numbers[2]) 

sock.close()

factors = ecm.factor(n)
phi = 1
for factor in factors:
    phi *= (factor-1)

d = pow(e, -1, phi)

long_to_bytes(pow(c,d,n))
```

