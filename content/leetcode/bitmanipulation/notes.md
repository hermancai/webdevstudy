## title

Notes

## question

Notes

## answer

```py
# Shifting binary bits
val = 3   # 011 (3)
val >> 1  # 001 (1) Integer divide by 2^n
val << 2  # 1100 (12) Multiply val by 2^n

# Get last bit using mask
v1, v2 = 10, 99
v1 & 10  # 0
v2 % 99  # 1

# Exclusive OR
3 ^ 5  # 011 ^ 101 = 110 (6)
3 ^ 3  # 011 ^ 011 = 000 (0) XOR with self is 0
3 ^ 0  # 011 ^ 000 = 011 (3) XOR with 0 is self
3 ^ 5 ^ 3  # 011 ^ 101 ^ 011 = 101 (5) Order does not matter
```
