## title

Maximal Square (Medium)

## question

<a href="https://leetcode.com/problems/maximal-square/description" target="_blank">Maximal Square</a> (Medium)

Given an `m x n` binary `matrix` filled with `0`'s and `1`'s, find the largest square containing only `1`'s and return its area.

## answer

```py
# Time complexity: O(m * n) where m, n = dimensions of matrix
# Space complexity: O(m * n)
def maximalSquare(matrix: List[List[str]]) -> int:
    # Bottom-up DP, starting with base case of 1x1 square
    # memo has an extra row and column to handle boundaries
    # The value in memo[i][j] represents the length of the largest valid square
    #   where memo[i][j] is the bottom right corner of the square
    #   Ex: If memo[i][j] == 2, then the largest square consists of
    #     memo[i][j], memo[i - 1][j], memo[i][j - 1], memo[i - 1][j - 1]
    memo = [[0 for _ in range(len(matrix[0]) + 1)] for _ in range(len(matrix) + 1)]
    answer = 0

    for row in range(len(matrix)):
        for col in range(len(matrix[0])):
            if matrix[row][col] == "1":
                # Remember that memo index is offset by 1
                mRow = row + 1
                mCol = col + 1
                # Check top, left, and top-left
                # A 0 means the current 1x1 square cannot be expanded to 2x2
                # If the min value is 2, then the square can be expanded to 3x3, and so on
                memo[mRow][mCol] = 1 + min(
                    memo[row][col],
                    memo[row][mCol],
                    memo[mRow][col]
                )
                answer = max(answer, memo[mRow][mCol])

    return answer * answer  # area of square
```
