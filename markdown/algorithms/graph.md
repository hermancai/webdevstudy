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

**question**

<a href="https://leetcode.com/problems/clone-graph/description" target="_blank">Clone Graph</a> (Medium)

Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

```py
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
```

**answer**

```py
from collections import deque

# Time complexity: O(V + E)
# Space complexity: O(V) excluding output
# Iterative breadth-first traversal
def cloneGraph(node: Optional['Node']) -> Optional['Node']:
    if not node:
        return None

    # Key: old node; Value: new copy
    visited = {}
    newHead = Node(node.val)
    visited[node] = newHead

    q = deque()
    q.append(node)
    while q:
        node = q.pop()
        for n in node.neighbors:
            if n not in visited:
                visited[n] = Node(n.val)
                q.append(n)
            # Add neighbors to new copy node
            visited[node].neighbors.append(visited[n])

    return newHead
```

Alternative solution:

```py
# Time complexity: O(V + E)
# Space complexity: O(V) excluding output
# Recursive depth-first traversal
def cloneGraph(node: Optional['Node']) -> Optional['Node']:
    return self.helper(node, {})

# visited - Key: old node; Value: new copy
def helper(node: Optional['Node'], visited) -> Optional['Node']:
    if not node:
        return None

    if node not in visited:
        visited[node] = Node(node.val)
        for n in node.neighbors:
            visited[node].neighbors.append(self.helper(n, visited))
    return visited[node]
```

**question**

<a href="https://leetcode.com/problems/evaluate-division/description" target="_blank">Evaluate Division</a> (Medium)

You are given an array of variable pairs `equations` and an array of real numbers `values`, where `equations[i] = [Ai, Bi]` and `values[i]` represent the equation `Ai / Bi = values[i]`. Each `Ai` or `Bi` is a string that represents a single variable.

You are also given some `queries`, where `queries[j] = [Cj, Dj]` represents the `j`<sup>th</sup> query where you must find the answer for `Cj / Dj = ?`.

Return the answers to all queries. If a single answer cannot be determined, return `-1.0`.

Assume the input is always valid. Evaluating the queries will not result in division by zero and there is no contradiction.

Variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.

**answer**

```py
# Time complexity: O(Q * (N + V)) where Q = queries, N = variables, V = values
# Space complexity: O(N + V)
def calcEquation(equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
    graph = makeGraph(equations, values)
    return [getPath(graph, query) for query in queries]

# Given ["x", "y"], [2] ->
# Graph: { x: { y: 2 }, y: { x: 1/2 }}
def makeGraph(equations: List[List[str]], values: List[float]):
    g = {}
    for i in range(len(equations)):
        x = equations[i][0]
        y = equations[i][1]
        if x not in g:
            g[x] = {}
        if y not in g[x]:
            g[x][y] = values[i]
        if y not in g:
            g[y] = {}
        if x not in g[y]:
            g[y][x] = 1 / values[i]
    return g

def getPath(graph, query: List[str]) -> float:
    x, y = query

    if x not in graph or y not in graph:
        return -1

    visited = set()
    q = deque()
    q.append((x, 1))  # (node, product of current path)

    # Iterative breadth-first search
    while q:
        curr, product = q.popleft()
        if curr == y:  # Found end of path
            return product
        visited.add(curr)
        # Add unvisited neighbors of current node to queue
        for neighbor, weight in graph[curr].items():
            if neighbor not in visited:
                # Keep track of path's total product
                q.append((neighbor, weight * product))
    return -1
```
