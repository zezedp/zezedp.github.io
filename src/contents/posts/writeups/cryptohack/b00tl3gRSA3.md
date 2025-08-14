---
title: "Smooth Criminal"
published: 2025-04-25
description: "Using Pollig-Rho's algorithm to solve smaller ECDLP"
bannerImage: '/covers/prof.png'
tags: [CryptoHack]
category: Write-Ups 
draft: false
---
# Smooth Criminal

## Let's Recap:



```
crypto{n07_4ll_curv3s_4r3_s4f3_curv3s}
```
### Code implementation:
```
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
import hashlib
def get_key_AES(ans):
    sha1 = hashlib.sha1()
    sha1.update(str(ans).encode('ascii'))
    return sha1.digest()[:16]

p = 310717010502520989590157367261876774703
a = 2
b = 3

F = Zmod(p)

# Gathering the EC points
b_x = F(272640099140026426377756188075937988094)
b_y = F(51062462309521034358726608268084433317)

g_x = F(179210853392303317793440285562762725654)
g_y = F(105268671499942631758568591033409611165)

P_x=F(280810182131414898730378982766101210916)
P_y=F(291506490768054478159835604632710368904)

E = EllipticCurve(F, [a,b])

# Creating EC Points
G = E.point((g_x,g_y))
P = E.point((P_x, P_y))
B = E.point((b_x, b_y))

phi = E.order()
factors = ecm.factor(phi)
count = {}
for f in factors:
        count[f] = count.get(f,0) + 1
PIs = [f^e for f, e in count.items()]

r = []
for pi in PIs:
    t = int(B.order() / pi)
    r += [discrete_log(t*P, t*G, operation="+")]

n = crt(r, PIs)

shared = n*B
key = get_key_AES(shared[0])

iv =bytes.fromhex('07e2628b590095a5e332d397b8a59aa7')
ciphertext = bytes.fromhex('8220b7c47b36777a737f5ef9caa2814cf20c1c1ef496ec21a9b4833da24a008d0870d3ac3a6ad80065c138a2ed6136af')
cipher = AES.new(key, AES.MODE_CBC, iv)
pt = unpad(cipher.decrypt(ciphertext),16)

print(pt.decode())


```

