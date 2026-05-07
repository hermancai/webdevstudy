## title

Find First and Last Position of Element in Sorted Array (Medium)

## question

<a href="https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description" target="_blank">Find First and Last Position of Element in Sorted Array</a> (Medium)

Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.

If `target` is not found in the array, return `[-1, -1]`.

Write an algorithm with `O(log n)` runtime complexity.

## answer

```py
# Time complexity: O(log n)
# Space complexity: O(1)
def searchRange(nums: List[int], target: int) -> List[int]:
    answer = [-1, -1]

    # Two binary searches to find first and last index
    # Instead of stopping search when target found, keeping going

    start, end = 0, len(nums) - 1
    while start <= end:
        mid = (start + end) // 2
        if nums[mid] == target:
            answer[0] = mid

        if nums[mid] >= target:
            end = mid - 1
        else:
            start = mid + 1

    start, end = 0, len(nums) - 1
    while start <= end:
        mid = (start + end) // 2
        if nums[mid] == target:
            answer[1] = mid

        if nums[mid] <= target:
            start = mid + 1
        else:
            end = mid - 1

    return answer
```
