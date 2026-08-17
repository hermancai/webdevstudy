## title

Find First and Last Position of Element in Sorted Array (Medium)

## question

<a href="https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description" target="_blank">Find First and Last Position of Element in Sorted Array</a> (Medium)

Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.

If `target` is not found in the array, return `[-1, -1]`.

Write an algorithm with `O(log n)` runtime complexity.

## answer

```py
def searchRange(nums: List[int], target: int) -> List[int]:
    answer = [-1, -1]

    # Find first index
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            answer[0] = mid

        if nums[mid] >= target:
            right = mid - 1
        else:
            left = mid + 1

    # Find last index
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            answer[1] = mid

        if nums[mid] <= target:
            left = mid + 1
        else:
            right = mid - 1

    return answer
```

Time: O(log n)

Space: O(1)
