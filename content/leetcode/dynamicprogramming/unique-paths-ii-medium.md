## title

Unique Paths II (Medium)

## question

<a href="https://leetcode.com/problems/unique-paths-ii/description" target="_blank">Unique Paths II</a> (Medium)

You are given an `m x n` integer array `grid`. There is a robot initially located at the top-left corner (i.e., `grid[0][0]`). The robot tries to move to the bottom-right corner (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.

An obstacle and space are marked as `1` or `0` respectively in `grid`. A path that the robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

## answer

```py
def uniquePathsWithObstacles(obstacleGrid: List[List[int]]) -> int:
    # Can also use 1D array starting with first row, or modify in-place
    memo = [[0] * len(obstacleGrid[0]) for _ in obstacleGrid]
    memo[0][0] = 1 if obstacleGrid[0][0] == 0 else 0

    for row in range(len(obstacleGrid)):
        for col in range(len(obstacleGrid[0])):
            if obstacleGrid[row][col] == 1:
                continue

            # Check left and top squares. Obstacles are marked as 0 in memo
            memo[row][col] += memo[row][col - 1] if col - 1 >= 0 else 0
            memo[row][col] += memo[row - 1][col] if row - 1 >= 0 else 0

    return memo[-1][-1]
```

Time: O(m \* n)

Space: O(m \* n)
