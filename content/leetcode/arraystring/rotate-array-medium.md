## title

Rotate Array (Medium)

## question

<a href="https://leetcode.com/problems/rotate-array/description" target="_blank">Rotate Array</a> (Medium)

Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.

## answer

```py
def rotate(nums: List[int], k: int) -> None:
    """
    Do not return anything, modify nums in-place instead.
    """
    def reverseList(li, l, r):
        while l < r:
            li[l], li[r] = li[r], li[l]
            l += 1
            r -= 1

    k = k % len(nums)
    reverseList(nums, 0, len(nums) - 1)
    reverseList(nums, 0, k - 1)
    reverseList(nums, k, len(nums) - 1)
```

Time: O(n)

Space: O(1)
