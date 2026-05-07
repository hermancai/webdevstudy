## title

Set Matrix Zeroes (Medium)

## question

<a href="https://leetcode.com/problems/set-matrix-zeroes/description" target="_blank">Set Matrix Zeroes</a> (Medium)

Given an `m x n` integer matrix `matrix`, if an element is `0`, set its entire row and column to `0`'s.

Modify the matrix in place.

## answer

```py
# Time complexity: O(n * m)
# Space complexity: O(1)
def setZeroes(matrix: List[List[int]]) -> None:
    # Check first row and column for pre-existing 0
    firstRowZero = False
    for i in range(len(matrix[0])):
        if matrix[0][i] == 0:
            firstRowZero = True
            break
    firstColumnZero = False
    for i in range(len(matrix)):
        if matrix[i][0] == 0:
            firstColumnZero = True
            break

    # Use first row and column for flagging
    for row in range(1, len(matrix)):
        for col in range(1, len(matrix[0])):
            if matrix[row][col] == 0:
                matrix[0][col] = 0
                matrix[row][0] = 0

    # Convert columns
    for i in range(1, len(matrix[0])):
        if matrix[0][i] == 0:
            for j in range(1, len(matrix)):
                matrix[j][i] = 0

    # Convert rows
    for i in range(1, len(matrix)):
        if matrix[i][0] == 0:
            for j in range(1, len(matrix[0])):
                matrix[i][j] = 0

    # Convert first row and column if needed
    if firstRowZero:
        for i in range(len(matrix[0])):
            matrix[0][i] = 0
    if firstColumnZero:
        for i in range(len(matrix)):
            matrix[i][0] = 0
```
