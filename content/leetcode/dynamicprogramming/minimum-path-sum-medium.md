## title

Minimum Path Sum (Medium)

## question

<a href="https://leetcode.com/problems/minimum-path-sum/description" target="_blank">Minimum Path Sum</a> (Medium)

Given a `m x n` `grid` filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

You can only move either down or right at any point in time.

## answer

```py
def minPathSum(grid: List[List[int]]) -> int:
    # First row and column only have one possible path
    for col in range(1, len(grid[0])):
        grid[0][col] += grid[0][col - 1]
    for row in range(1, len(grid)):
        grid[row][0] += grid[row - 1][0]

    for row in range(1, len(grid)):
        for col in range(1, len(grid[0])):
            # Current square can only be reached from left or top
            grid[row][col] += min(grid[row - 1][col], grid[row][col - 1])

    return grid[-1][-1]
```

Time: O(m \* n)

Space: O(1)
