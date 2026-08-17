## title

Spiral Matrix (Medium)

## question

<a href="https://leetcode.com/problems/spiral-matrix/description" target="_blank">Spiral Matrix</a> (Medium)

Given an `m x n` `matrix`, return all elements of the `matrix` in spiral order.

## answer

```py
def spiralOrder(matrix: List[List[int]]) -> List[int]:
    answer = []
    rows, cols = len(matrix), len(matrix[0])
    row = col = 0
    dRow, dCol = 0, 1 # Directions

    for _ in range(rows * cols):
        answer.append(matrix[row][col])
        matrix[row][col] = None

        nextRow = row + dRow
        nextCol = col + dCol
        if not 0 <= nextRow < rows or not 0 <= nextCol < cols or matrix[nextRow][nextCol] == None:
            dRow, dCol = dCol, -dRow # Change directions

        row += dRow
        col += dCol

    return answer
```

Time: O(n \* m)

Space: O(n \* m) including output

<br />

Alternative solution:

```py
def spiralOrder(matrix: List[List[int]]) -> List[int]:
    answer = []
    rows, cols = len(matrix), len(matrix[0])
    layers = -(-min(rows, cols) // 2)  # Number of spirals in matrix

    for layer in range(layers):
        rowStart = colStart = layer
        rowEnd = rows - layer - 1
        colEnd = cols - layer - 1

        for i in range(colStart, colEnd + 1): # Right
            answer.append(matrix[rowStart][i])

        for i in range(rowStart + 1, rowEnd): # Down
            answer.append(matrix[i][colEnd])

        if rowStart == rowEnd:
            continue
        for i in range(colEnd, colStart - 1, -1): # Left
            answer.append(matrix[rowEnd][i])

        if colStart == colEnd:
            continue
        for i in range(rowEnd - 1, rowStart, -1): # Up
            answer.append(matrix[i][colStart])

    return answer
```

Time: O(n \* m)

Space: O(n \* m) including output
