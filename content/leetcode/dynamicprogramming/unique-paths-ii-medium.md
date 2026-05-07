## title

Unique Paths II (Medium)

## question

<a href="https://leetcode.com/problems/unique-paths-ii/description" target="_blank">Unique Paths II</a> (Medium)

You are given an `m x n` integer array `grid`. There is a robot initially located at the top-left corner (i.e., `grid[0][0]`). The robot tries to move to the bottom-right corner (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.

An obstacle and space are marked as `1` or `0` respectively in `grid`. A path that the robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

## answer

```py
# Time complexity: O(m * n) where m, n = lengths of grid
# Space complexity: O(m * n)
def uniquePathsWithObstacles(obstacleGrid: List[List[int]]) -> int:
    memo = [[0 for _ in range(len(obstacleGrid[0]))] for _ in range(len(obstacleGrid))]
    memo[0][0] = 0 if obstacleGrid[0][0] == 1 else 1

    for row in range(len(obstacleGrid)):
        for col in range(len(obstacleGrid[0])):
            if obstacleGrid[row][col] == 1:
                continue
            # The current square's number of unique paths is equal to
            #   the sum of the square above and to the left
            if row - 1 >= 0:
                memo[row][col] += memo[row - 1][col]
            if col - 1 >= 0:
                memo[row][col] += memo[row][col - 1]
    return memo[-1][-1]
```

Alternative solution:

```py
# Time complexity: O(m * n) where m, n = lengths of grid
# Space complexity: O(n)
def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
    # In this 2D DP problem, memo[row][col] depends on memo[row - 1][col]
    #   and memo[row][col - 1]. (Refer to previous solution)
    # These constraints allow the memo grid to be collapsed into a 1D array.
    memo = [0 for _ in range(len(obstacleGrid[0]))]
    memo[0] = 0 if obstacleGrid[0][0] == 1 else 1

    # The loop processes each row first. Consider a 2D memo grid.
    # Once memo[row][col] is processed, memo[row][col] is the state of memo[row + 1][col]
    #   after adding only memo[row][col] (i.e. only adding from the square above).
    #   This is possible because memo is initialized with 0s.
    # In other words, a 1D memo array is possible because each square is an
    #   accumulation of values from previous rows.
    # Then adding the square to the left is simply memo[col - 1].
    for row in range(len(obstacleGrid)):
        for col in range(len(obstacleGrid[0])):
            # Reset current square because it cannot be used in a path
            if obstacleGrid[row][col] == 1:
                memo[col] = 0
            # Skip col 0 because the first column can have at most 1 unique path
            elif col > 0:
                memo[col] += memo[col - 1]
    return memo[-1]
```

Alternative solution:

```py
# Time complexity: O(m * n) where m, n = lengths of grid
# Space complexity: O(1)
def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
    # Modify grid in-place instead of using memoization
    obstacleGrid[0][0] = 0 if obstacleGrid[0][0] == 1 else 1

    # Handle first row. Value can be at most 1
    for col in range(1, len(obstacleGrid[0])):
        obstacleGrid[0][col] = 0 if obstacleGrid[0][col] == 1 else obstacleGrid[0][col - 1]

    # Handle first column. Value can be at most 1
    for row in range(1, len(obstacleGrid)):
        obstacleGrid[row][0] = 0 if obstacleGrid[row][0] == 1 else obstacleGrid[row - 1][0]

    # Handle inner grid. Add top and left squares if not obstacles
    for row in range(1, len(obstacleGrid)):
        for col in range(1, len(obstacleGrid[0])):
            if obstacleGrid[row][col] == 1:
                obstacleGrid[row][col] = 0
            else:
                obstacleGrid[row][col] = obstacleGrid[row - 1][col] + obstacleGrid[row][col - 1]

    return obstacleGrid[-1][-1]
```
