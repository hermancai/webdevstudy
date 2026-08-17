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
def searchMatrix(matrix: List[List[int]], target: int) -> bool:
    # Two binary searches to find row in matrix and target in row
    start, end = 0, len(matrix) - 1

    while start <= end:
        mid = (start + end) // 2
        if matrix[mid][0] <= target <= matrix[mid][-1]:
            break
        if target < matrix[mid][0]:
            end = mid - 1
        else:
            start = mid + 1

    if start > end:
        return False

    start, end, row = 0, len(matrix[0]) - 1, matrix[mid]

    while start <= end:
        mid = (start + end) // 2
        if row[mid] == target:
            return True
        if row[mid] > target:
            end = mid - 1
        else:
            start = mid + 1

    return False
```

Time: O(log (m \* n))

Space: O(1)
