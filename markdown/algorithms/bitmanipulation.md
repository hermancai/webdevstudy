**question**

<a href="https://leetcode.com/problems/add-binary/description" target="_blank">Add Binary</a> (Easy)

Given two binary strings `a` and `b`, return their sum as a binary string.

`a` and `b` consist only of `'0'` or `'1'` characters.

**answer**

```py
# Time complexity: O(max(m, n)) where m = length of a, n = length of b
# Space complexity: O(max(m, n))
def addBinary(a: str, b: str) -> str:
    i, j, carry = len(a) - 1, len(b) - 1, 0
    answer = []

    # Loop backwards through both strings
    while i >= 0 or j >= 0:
        # Sum of carry, a[i], and b[j]
        digit = carry
        digit += int(a[i]) if i >= 0 else 0
        digit += int(b[j]) if j >= 0 else 0

        # If sum == 1 or 3, append 1
        answer.append(str(digit % 2))
        # If sum == 2 or 3, carry = 1
        carry = digit // 2
        i -= 1
        j -= 1

    if carry:
        answer.append("1")
    return "".join(reversed(answer))
```

**question**

<a href="https://leetcode.com/problems/reverse-bits/description" target="_blank">Reverse Bits</a> (Easy)

Reverse bits of a given 32 bits unsigned integer.

The input must be a binary string of length `32`.

<br/>

Example:

Input: `n = 00000010100101000001111010011100`

Output: `964176192 (00111001011110000010100101000000)`

**answer**

```py
# Time complexity: O(1)
# Space complexity: O(1)
def reverseBits(n: int) -> int:
    answer = 0

    # Loop through every binary digit in n
    for _ in range(32):
        # Shift answer in binary to the left once
        answer <<= 1

        # Last bit in answer is now 0 after shifting left
        # If last bit in n == 1, set last bit in answer to 1
        if n & 1:
            answer += 1

        # Shift n to the right once (i.e. remove last bit)
        n >>= 1
    return answer
```

**question**

<a href="https://leetcode.com/problems/number-of-1-bits/description" target="_blank">Number of 1 Bits</a> (Easy)

Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight).

**answer**

```py
# Time complexity: O(log(n))
#   If n has a max number of bits, such as 32, time complexity is O(1).
# Space complexity: O(1)
def hammingWeight(n: int) -> int:
    count = 0

    # Shift n in binary to right side while checking last bit
    while n > 0:
        if n & 1:
            count += 1
        n >>= 1
    return count
```

**question**

<a href="https://leetcode.com/problems/single-number/description" target="_blank">Single Number</a> (Easy)

Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one.

Implement a solution with a linear runtime complexity and use only constant extra space.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def singleNumber(nums: List[int]) -> int:
    answer = 0
    for n in nums:
        # Bitwise exclusive OR
        # Given int a, (a ^ 0) = a
        # (a ^ a) = 0
        # Order does not matter: (a ^ b ^ a) = b
        answer ^= n
    return answer
```
