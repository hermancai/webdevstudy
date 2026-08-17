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
def search(nums: List[int], target: int) -> int:
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = (left + right) // 2

        if nums[mid] == target:
            return mid

        # One side must be sorted

        # Left side is sorted
        if nums[left] <= nums[mid]:
            # Left side contains target
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        # Right side is sorted
        else:
            # Right side contains target
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1

    return -1
```

Time: O(log n)

Space: O(1)
