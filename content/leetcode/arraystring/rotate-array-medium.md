## title

Rotate Array (Medium)

## question

<a href="https://leetcode.com/problems/rotate-array/description" target="_blank">Rotate Array</a> (Medium)

Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1)
def rotate(nums: List[int], k: int) -> None:
    k = k % len(nums)
    reverseList(nums, 0, len(nums) - 1)
    reverseList(nums, 0, k - 1)
    reverseList(nums, k, len(nums) - 1)

def reverseList(li: List[int], start: int, end: int) -> None:
    while start < end:
        li[start], li[end] = li[end], li[start]
        start += 1
        end -= 1
```
