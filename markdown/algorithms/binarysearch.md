**question**

<a href="https://leetcode.com/problems/search-insert-position/description" target="_blank">Search Insert Position</a> (Easy)

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

Write an algorithm with `O(log n)` runtime complexity.

**answer**

```py
# Time complexity: O(log n)
# Space complexity: O(1)
def searchInsert(nums: List[int], target: int) -> int:
    start, end = 0, len(nums) - 1

    while start <= end:
        mid = (start + end) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] > target:
            end = mid - 1
        else:
            start = mid + 1

    # Start will be equivalent to mid or mid + 1 for insert position
    return start
```

**question**

<a href="https://leetcode.com/problems/search-a-2d-matrix/description" target="_blank">Search a 2D Matrix</a> (Medium)

You are given an `m x n` integer matrix `matrix` with the following two properties:

-   Each row is sorted in non-decreasing order.
-   The first integer of each row is greater than the last integer of the previous row.

Given an integer `target`, return `true` if `target` is in matrix or `false` otherwise.

Write a solution in `O(log(m * n))` time complexity.

**answer**

```py
# Time complexity: O(log(m * n))
# Space complexity: O(1)
def searchMatrix(matrix: List[List[int]], target: int) -> bool:
    # Binary search to find row containing target
    start, end = 0, len(matrix) - 1
    inRow = -1
    while start <= end:
        mid = (start + end) // 2
        if matrix[mid][0] > target:
            end = mid - 1
        elif matrix[mid][-1] < target:
            start = mid + 1
        else:
            inRow = mid
            break
    if inRow == -1:
        return False

    # Binary search to find target in row
    start, end = 0, len(matrix[0])
    while start <= end:
        mid = (start + end) // 2
        if matrix[inRow][mid] == target:
            return True
        elif matrix[inRow][mid] > target:
            end = mid - 1
        else:
            start = mid + 1
    return False
```

**question**

<a href="https://leetcode.com/problems/find-peak-element/description" target="_blank">Find Peak Element</a> (Medium)

A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array `nums`, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

Assume `nums[-1] = nums[n] = -∞`. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

Assume `nums[i] != nums[i + 1]` for all valid `i`.

Write an algorithm that runs in `O(log n)` time.

**answer**

```py
# Time complexity: O(log n)
# Space complexity: O(1)
def findPeakElement(self, nums: List[int]) -> int:
    # Check ends of list now to prevent boundary checks later
    if len(nums) == 1 or nums[0] > nums[1]:
        return 0
    if nums[-1] > nums[-2]:
        return len(nums) - 1

    start, end = 1, len(nums) - 2
    while start <= end:
        mid = (start + end) // 2
        if nums[mid] > nums[mid - 1] and nums[mid] > nums[mid + 1]:
            return mid
        # A peak is guaranteed to exist on the side that is higher,
        #   either as a normal peak with two neighbors, or the end of the list.
        elif nums[mid] < nums[mid - 1]:
            end = mid - 1
        else:
            start = mid + 1
```
