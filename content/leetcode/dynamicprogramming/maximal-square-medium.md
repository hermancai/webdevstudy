## title

Maximal Square (Medium)

## question

<a href="https://leetcode.com/problems/maximal-square/description" target="_blank">Maximal Square</a> (Medium)

Given an `m x n` binary `matrix` filled with `0`'s and `1`'s, find the largest square containing only `1`'s and return its area.

## answer

```py
def maximalSquare(matrix: List[List[str]]) -> int:
    # Bottom-up DP, starting with base case of 1x1 square
    # memo[i][j] contains length of largest valid square,
    #   where memo[i][j] is bottom right corner of square
    # memo contains extra row and column padding to handle boundaries
    # memo can be collapsed into 1D array and temp variable
    memo = [[0 for _ in range(len(matrix[0]) + 1)] for _ in range(len(matrix) + 1)]
    answer = 0

    for row in range(1, len(memo)):
        for col in range(1, len(memo[0])):
            if matrix[row - 1][col - 1] == "1":
                # Check top, left, and top-left squares
                memo[row][col] = 1 + min(
                    memo[row - 1][col],
                    memo[row][col - 1],
                    memo[row - 1][col - 1]
                )
                answer = max(answer, memo[row][col])

    return answer * answer  # area of square
```

Time: O(m \* n)

Space: O(m \* n)
