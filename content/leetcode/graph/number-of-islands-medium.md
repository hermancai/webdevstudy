## title

Number of Islands (Medium)

## question

<a href="https://leetcode.com/problems/number-of-islands/description" target="_blank">Number of Islands</a> (Medium)

Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

## answer

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
