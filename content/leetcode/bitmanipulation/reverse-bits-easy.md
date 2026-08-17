## title

Reverse Bits (Easy)

## question

<a href="https://leetcode.com/problems/reverse-bits/description" target="_blank">Reverse Bits</a> (Easy)

Reverse bits of a given 32 bits unsigned integer.

The input must be a binary string of length `32`.

<br/>

Example:

Input: `n = 00000010100101000001111010011100`

Output: `964176192 (00111001011110000010100101000000)`

## answer

```py
def reverseBits(n: int) -> int:
    answer = 0

    # Build 32 bit answer
    for _ in range(32):
        # Shift left once (add space for next bit)
        answer <<= 1

        # Last bit in answer is now 0 after shifting left
        # If last bit in n == 1, set last bit in answer to 1
        if n & 1:
            answer += 1

        # Shift n right once (remove last bit)
        n >>= 1
    return answer
```

Time: O(1)

Space: O(1)
