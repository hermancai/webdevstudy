## title

Search in Rotated Sorted Array (Medium)

## question

<a href="https://leetcode.com/problems/search-in-rotated-sorted-array/description" target="_blank">Search in Rotated Sorted Array</a> (Medium)

There is an integer array `nums` sorted in ascending order (with distinct values).

Prior to being passed to your function, `nums` is possibly rotated at an unknown pivot index `k` (`1 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (0-indexed). For example, `[0,1,2,4,5,6,7]` might be rotated at pivot index `3` and become `[4,5,6,7,0,1,2]`.

Given the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.

Write an algorithm with `O(log n)` runtime complexity.

## answer

```py
# Time complexity: O(log n)
# Space complexity: O(1)
def search(nums: List[int], target: int) -> int:
    start, end = 0, len(nums) - 1

    while start <= end:
        mid = (start + end) // 2
        if nums[mid] == target:
            return mid

        # Logic: at most only one side is rotated
        # If left side is not rotated
        if nums[start] <= nums[mid]:  # Must use <= in case start == mid
            if nums[start] <= target <= nums[mid]:
                end = mid - 1
            else:
                start = mid + 1
        # Else right side is not rotated
        else:
            if nums[mid] <= target <= nums[end]:
                start = mid + 1
            else:
                end = mid - 1

    return -1
```
