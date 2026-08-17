## title

Set Matrix Zeroes (Medium)

## question

<a href="https://leetcode.com/problems/set-matrix-zeroes/description" target="_blank">Set Matrix Zeroes</a> (Medium)

Given an `m x n` integer matrix `matrix`, if an element is `0`, set its entire row and column to `0`'s.

Modify the matrix in place.

## answer

```py
def setZeroes(matrix: List[List[int]]) -> None:
    # Use first row and column to track flags for entire matrix

    # Check first row and column for pre-existing 0
    zeroFirstRow = False
    for val in matrix[0]:
        if val == 0:
            zeroFirstRow = True
            break
    zeroFirstCol = False
    for i in range(len(matrix)):
        if matrix[i][0] == 0:
            zeroFirstCol = True
            break

    # Check entire matrix and set flags
    for row in range(1, len(matrix)):
        for col in range(1, len(matrix[0])):
            if matrix[row][col] == 0:
                matrix[0][col] = 0
                matrix[row][0] = 0

    # Use flags to set all rows and columns to 0 as needed
    for row in range(1, len(matrix)):
        if matrix[row][0] == 0:
            for col in range(1, len(matrix[0])):
                matrix[row][col] = 0
    for col in range(1, len(matrix[0])):
        if matrix[0][col] == 0:
            for row in range(1, len(matrix)):
                matrix[row][col] = 0

    # Set first row and column to 0 if needed
    if zeroFirstRow:
        for col in range(len(matrix[0])):
            matrix[0][col] = 0
    if zeroFirstCol:
        for row in range(len(matrix)):
            matrix[row][0] = 0
```

Time: O(n \* m)

Space: O(1)
