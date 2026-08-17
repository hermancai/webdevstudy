## title

Number of Islands (Medium)

## question

<a href="https://leetcode.com/problems/number-of-islands/description" target="_blank">Number of Islands</a> (Medium)

Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

## answer

```py
def numIslands(grid: List[List[str]]) -> int:
    directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]
    m, n, count = len(grid), len(grid[0]), 0

    for row in range(m):
        for col in range(n):
            if grid[row][col] == "1":
                count += 1
                stack = [(row, col)]
                # Iterative depth-first traversal, mark entire island as visited
                while stack:
                    r, c = stack.pop()
                    for d in directions:
                        newR, newC = r + d[0], c + d[1]
                        if 0 <= newR < m and 0 <= newC < n and grid[newR][newC] == "1":
                            grid[newR][newC] = "2"
                            stack.append((newR, newC))

    return count
```

Time: O(m \* n)

Space: O(m \* n)

<br />

Alternative solution:

```py
def numIslands(grid: List[List[str]]) -> int:
    def dfs(row, col):
        if not 0 <= row < len(grid) or not 0 <= col < len(grid[0]) or grid[row][col] != "1":
            return

        grid[row][col] = "2"
        dfs(row, col - 1)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row + 1, col)

    count = 0

    for row in range(len(grid)):
        for col in range(len(grid[0])):
            if grid[row][col] == "1":
                count += 1
                dfs(row, col)

    return count
```

Time: O(m \* n)

Space: O(m \* n)
