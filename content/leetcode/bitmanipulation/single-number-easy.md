## title

Single Number (Easy)

## question

<a href="https://leetcode.com/problems/single-number/description" target="_blank">Single Number</a> (Easy)

Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one.

Implement a solution with a linear runtime complexity and use only constant extra space.

## answer

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
