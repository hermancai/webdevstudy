## title

Surrounded Regions (Medium)

## question

<a href="https://leetcode.com/problems/surrounded-regions/description" target="_blank">Surrounded Regions</a> (Medium)

You are given an `m x n` matrix `board` containing letters `'X'` and `'O'`, capture regions that are surrounded:

- Connect: A cell is connected to adjacent cells horizontally or vertically.
- Region: To form a region connect every `'O'` cell.
- Surround: The region is surrounded with `'X'` cells if you can connect the region with `'X'` cells and none of the region cells are on the edge of the `board`.

A surrounded region is captured by replacing all `'O'`s with `'X'`s in the input matrix `board`.

## answer

```py
def solve(board: List[List[str]]) -> None:
    def dfs(row, col):
        if not 0 <= row < len(board) or not 0 <= col < len(board[0]) or board[row][col] != "O":
            return

        board[row][col] = "L"
        dfs(row, col - 1)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row + 1, col)

    # Regions on the border will not be surrounded. Mark them as safe
    for row in (0, len(board) - 1):
        for col in range(len(board[0])):
            if board[row][col] == "O":
                dfs(row, col)
    for col in (0, len(board[0]) - 1):
        for row in range(len(board)):
            if board[row][col] == "O":
                dfs(row, col)

    # Revert marked regions and capture everything else
    for row in range(len(board)):
        for col in range(len(board[0])):
            if board[row][col] == "O":
                board[row][col] = "X"
            elif board[row][col] == "L":
                board[row][col] = "O"
```

Time: O(m \* n)

Space: O(m \* n)
