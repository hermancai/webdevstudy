## title

Search a 2D Matrix (Medium)

## question

<a href="https://leetcode.com/problems/search-a-2d-matrix/description" target="_blank">Search a 2D Matrix</a> (Medium)

You are given an `m x n` integer matrix `matrix` with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer `target`, return `true` if `target` is in matrix or `false` otherwise.

Write a solution in `O(log(m * n))` time complexity.

## answer

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
