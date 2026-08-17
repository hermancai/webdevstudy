## title

Search Insert Position (Easy)

## question

<a href="https://leetcode.com/problems/search-insert-position/description" target="_blank">Search Insert Position</a> (Easy)

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

Write an algorithm with `O(log n)` runtime complexity.

## answer

```py
def searchInsert(nums: List[int], target: int) -> int:
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] > target:
            right = mid - 1
        else:
            left = mid + 1

    return left
```

Time: O(log n)

Space: O(1)
