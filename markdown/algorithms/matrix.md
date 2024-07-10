**question**

<a href="https://leetcode.com/problems/valid-sudoku/description" target="_blank">Valid Sudoku</a> (Medium)

Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

-   Each row must contain the digits `1-9` without repetition.
-   Each column must contain the digits `1-9` without repetition.
-   Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without repetition.

Note:

-   A Sudoku board (partially filled) could be valid but is not necessarily solvable.
-   Only the filled cells need to be validated according to the mentioned rules.

**answer**

```py
# Time complexity: O(1)
# Space complexity: O(1)
def isValidSudoku(board: List[List[str]]) -> bool:
    rows = [set() for _ in range(10)]
    columns = [set() for _ in range(10)]
    grid = [[set() for _ in range(4)] for _ in range(4)]

    for r in range(9):
        for c in range(9):
            val = board[r][c]
            if val != ".":
                if val in rows[r]:
                    return False
                rows[r].add(val)

                if val in columns[c]:
                    return False
                columns[c].add(val)

                gridR, gridC = r // 3, c // 3
                if val in grid[gridR][gridC]:
                    return False
                grid[gridR][gridC].add(val)
    return True
```

Alternative solution:

```py
# Time complexity: O(1)
# Space complexity: O(1)
def isValidSudoku(board: List[List[str]]) -> bool:
    visited = set()

    for r in range(9):
        for c in range(9):
            val = board[r][c]
            if val != ".":
                # Example: val of 5 in board[2][4]
                #   -> "r25", "c45", "g015"
                row = "r" + str(r) + val
                col = "c" + str(c) + val
                grid = "g" + str(r // 3) + str(c // 3) + val
                if row in visited or col in visited or grid in visited:
                    return False
                visited.add(row)
                visited.add(col)
                visited.add(grid)
    return True
```

**question**

<a href="https://leetcode.com/problems/spiral-matrix/description" target="_blank">Spiral Matrix</a> (Medium)

Given an `m x n` `matrix`, return all elements of the `matrix` in spiral order.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(n)
def spiralOrder(matrix: List[List[int]]) -> List[int]:
    answer = []
    rowStart, rowEnd = 0, len(matrix) - 1
    colStart, colEnd = 0, len(matrix[0]) - 1

    while rowStart <= rowEnd and colStart <= colEnd:
        # Top row
        for j in range(colStart, colEnd + 1):
            answer.append(matrix[rowStart][j])
        rowStart += 1

        # Right column
        for j in range(rowStart, rowEnd + 1):
            answer.append(matrix[j][colEnd])
        colEnd -= 1

        # Bottom row, might be same as top row
        if rowStart <= rowEnd:
            for j in range(colEnd, colStart - 1, -1):
                answer.append(matrix[rowEnd][j])
        rowEnd -= 1

        # Left column, might be same as right column
        if colStart <= colEnd:
            for j in range(rowEnd, rowStart - 1, -1):
                answer.append(matrix[j][colStart])
        colStart += 1

    return answer
```

**question**

<a href="https://leetcode.com/problems/rotate-image/description" target="_blank">Rotate Image</a> (Medium)

You are given an `n x n` 2D `matrix` representing an image, rotate the image by 90 degrees (clockwise).

Rotate the image in-place.

**answer**

```py
# Time complexity: O(n * n)
# Space complexity: O(1)
def rotate(matrix: List[List[int]]) -> None:
    """
    Do not return anything, modify matrix in-place instead.
    """
    matrix.reverse()

    # Transpose matrix
    for i in range(len(matrix)):
        for j in range(i + 1, len(matrix)):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

# Transpose means to swap rows and columns:
# 1 2 3      1 4 7
# 4 5 6  ->  2 5 8
# 7 8 9      3 6 9
```

To rotate counterclockwise, reverse each nested list, then transpose.

**question**

<a href="https://leetcode.com/problems/set-matrix-zeroes/description" target="_blank">Set Matrix Zeroes</a> (Medium)

Given an `m x n` integer matrix `matrix`, if an element is `0`, set its entire row and column to `0`'s.

Modify the matrix in place.

**answer**

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

**question**

<a href="https://leetcode.com/problems/game-of-life/description" target="_blank">Game of Life</a> (Medium)

"The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an `m x n` grid of cells, where each cell has an initial state: live (represented by a `1`) or dead (represented by a `0`). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules:

-   Any live cell with fewer than two live neighbors dies as if caused by under-population.
-   Any live cell with two or three live neighbors lives on to the next generation.
-   Any live cell with more than three live neighbors dies, as if by over-population.
-   Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the `m x n` grid `board`, return the next state.

**answer**

```py
# Time complexity: O(n * m)
# Space complexity: O(1)
def gameOfLife(self, board: List[List[int]]) -> None:
    neighbors = [(-1, -1), (-1, 0), (-1, 1), (0, 1), (1, 1), (1, 0), (1, -1), (0, -1)]

    for row in range(len(board)):
        for col in range(len(board[0])):
            # Count live neighbors
            count = 0
            for coord in neighbors:
                newRow = row + coord[0]
                newCol = col + coord[1]
                if newRow >= 0 and newRow < len(board) and newCol >= 0 and newCol < len(board[0]):
                    if board[newRow][newCol] == 1 or board[newRow][newCol] == 2:
                        count += 1

            # 2 = currently live, will die
            # 3 = currently dead, will live
            if board[row][col] == 1:
                if count < 2 or count > 3:
                    board[row][col] = 2
            elif board[row][col] == 0:
                if count == 3:
                    board[row][col] = 3

    # Convert 2 -> 0, 3 -> 1
    for row in range(len(board)):
        for col in range(len(board[0])):
            board[row][col] %= 2
```
