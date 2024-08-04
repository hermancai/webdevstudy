**question**

<a href="https://leetcode.com/problems/number-of-islands/description" target="_blank">Number of Islands</a> (Medium)

Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

**answer**

```py
# Time complexity: O(n * m)
# Space complexity: O(n * m)
def numIslands(grid: List[List[str]]) -> int:
    count = 0
    for row in range(len(grid)):
        for col in range(len(grid[0])):
            if grid[row][col] == "1":
                markIsland(grid, row, col)
                count += 1
    return count

# Iterative breadth-first traversal while marking visited spots
def markIsland(grid: List[List[str]], row: int, col: int) -> None:
    neighbors = [(-1, 0), (0, 1), (1, 0), (0, -1)]
    q = [(row, col)]
    while q:
        node = q.pop()
        row = node[0]
        col = node[1]
        grid[row][col] = "2"
        for n in neighbors:
            newRow = row + n[0]
            newCol = col + n[1]
            if newRow >= 0 and newRow < len(grid) and newCol >= 0 and newCol < len(grid[0]):
                if grid[newRow][newCol] == "1":
                    q.append((newRow, newCol))
```

Alternative solution:

```py
# Time complexity: O(n * m)
# Space complexity: O(n * m)
def numIslands(grid: List[List[str]]) -> int:
    count = 0
    for row in range(len(grid)):
        for col in range(len(grid[0])):
            if grid[row][col] == "1":
                markIsland(grid, row, col)
                count += 1
    return count

# Recursive depth-first traversal while marking visited spots
def markIsland(grid: List[List[str]], row: int, col: int) -> None:
    if row < 0 or row >= len(grid) or col < 0 or col >= len(grid[0]) or grid[row][col] != "1":
        return
    grid[row][col] = "2"
    markIsland(grid, row - 1, col)
    markIsland(grid, row, col + 1)
    markIsland(grid, row + 1, col)
    markIsland(grid, row, col - 1)
```

**question**

<a href="https://leetcode.com/problems/surrounded-regions/description" target="_blank">Surrounded Regions</a> (Medium)

You are given an `m x n` matrix `board` containing letters `'X'` and `'O'`, capture regions that are surrounded:

-   Connect: A cell is connected to adjacent cells horizontally or vertically.
-   Region: To form a region connect every `'O'` cell.
-   Surround: The region is surrounded with `'X'` cells if you can connect the region with `'X'` cells and none of the region cells are on the edge of the `board`.

A surrounded region is captured by replacing all `'O'`s with `'X'`s in the input matrix `board`.

**answer**

```py
# Time complexity: O(n * m)
# Space complexity: O(n * m)
def solve(board: List[List[str]]) -> None:
    # Check board border to mark all regions on edge of board
    # Marking as "1" means revert to "O"
    lastRow = len(board) - 1
    for col in range(len(board[0])):
        if board[0][col] == "O":
            markRegion(board, 0, col)
        if board[lastRow][col] == "O":
            markRegion(board, lastRow, col)
    lastCol = len(board[0]) - 1
    for row in range(1, len(board) - 1):
        if board[row][0] == "O":
            markRegion(board, row, 0)
        if board[row][lastCol] == "O":
            markRegion(board, row, lastCol)

    # Revert "1" to "O", convert "O" to "X"
    for row in range(len(board)):
        for col in range(len(board[0])):
            if board[row][col] == "1":
                board[row][col] = "O"
            elif board[row][col] == "O":
                board[row][col] = "X"

# Recursive depth-first traversal
def markRegion(board: List[List[str]], row: int, col: int) -> None:
    if row < 0 or row >= len(board) or col < 0 or col >= len(board[0]) or board[row][col] != "O":
        return
    board[row][col] = "1"
    markRegion(board, row - 1, col)
    markRegion(board, row, col + 1)
    markRegion(board, row + 1, col)
    markRegion(board, row, col - 1)
```
