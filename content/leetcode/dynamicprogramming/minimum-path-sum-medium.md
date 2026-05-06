## title

Minimum Path Sum (Medium)

## question

<a href="https://leetcode.com/problems/minimum-path-sum/description" target="_blank">Minimum Path Sum</a> (Medium)

Given a `m x n` `grid` filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

You can only move either down or right at any point in time.

## answer

```py
# Time complexity: O(m * n) where m, n = lengths of grid
# Space complexity: O(1)
def minPathSum(grid: List[List[int]]) -> int:
    # First row in grid can only move right
    for col in range(1, len(grid[0])):
        grid[0][col] += grid[0][col - 1]

    for row in range(1, len(grid)):
        # First col in grid can only move down
        grid[row][0] += grid[row - 1][0]

        # The current square has a minimum sum path by adding the lower value
        #   between the square above or to the left
        for col in range(1, len(grid[0])):
            grid[row][col] += min(grid[row - 1][col], grid[row][col - 1])

    return grid[-1][-1]
```
