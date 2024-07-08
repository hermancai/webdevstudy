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
