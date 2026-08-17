## title

Valid Sudoku (Medium)

## question

<a href="https://leetcode.com/problems/valid-sudoku/description" target="_blank">Valid Sudoku</a> (Medium)

Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

- Each row must contain the digits `1-9` without repetition.
- Each column must contain the digits `1-9` without repetition.
- Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without repetition.

Note:

- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
- Only the filled cells need to be validated according to the mentioned rules.

## answer

```py
def isValidSudoku(board: List[List[str]]) -> bool:
    rows = [set() for _ in range(9)]
    cols = [set() for _ in range(9)]
    grid = [[set() for _ in range(3)] for _ in range(3)]

    for row in range(9):
        for col in range(9):
            val = board[row][col]
            if val == ".":
                continue

            if val in rows[row]:
                return False
            rows[row].add(val)

            if val in cols[col]:
                return False
            cols[col].add(val)

            gridRow, gridCol = row // 3, col // 3
            if val in grid[gridRow][gridCol]:
                return False
            grid[gridRow][gridCol].add(val)

    return True
```

Time: O(1)

Space: O(1)

<br />

Alternative solution:

```py
def isValidSudoku(board: List[List[str]]) -> bool:
    visited = set()

    for row in range(9):
        for col in range(9):
            val = board[row][col]
            if val == ".":
                continue

            rowStr = "r" + str(row) + val
            colStr = "c" + str(col) + val
            gridStr = "g" + str(row // 3) + str(col // 3) + val

            if rowStr in visited or colStr in visited or gridStr in visited:
                return False

            visited.add(rowStr)
            visited.add(colStr)
            visited.add(gridStr)

    return True
```

Time: O(1)

Space: O(1)
