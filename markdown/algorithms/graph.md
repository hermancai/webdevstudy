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

**question**

<a href="https://leetcode.com/problems/course-schedule/description" target="_blank">Course Schedule</a> (Medium)

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.

For example, the pair `[0, 1]` indicates that to take course `0` you have to first take course `1`.

Return `true` if you can finish all courses. Otherwise, return `false`.

**answer**

```py
from collections import deque

# Time complexity: O(V + E)
# Space complexity: O(V + E)
# Topological sort with breadth-first traversal
def canFinish(numCourses: int, prerequisites: List[List[int]]) -> bool:
    # Index refers to parent course. Nested list contains child courses
    courses = [[] for n in range(numCourses)]

    # Index refers to child course. Value counts number of parents
    degrees = [0 for _ in range(numCourses)]
    # Note that this solution can use lists because nodes are 0-indexed

    for parent, child in prerequisites:
        courses[parent].append(child)
        degrees[child] += 1

    q = deque()
    for i in range(numCourses):
        # Degree of 0 means course has no prereqs
        if degrees[i] == 0:
            q.append(i)

    while q:
        course = q.popleft()
        numCourses -= 1
        # Remove parent course as prereq from all child courses
        for child in courses[course]:
            degrees[child] -= 1
            if degrees[child] == 0:
                q.append(child)

    return numCourses == 0
```

**question**

<a href="https://leetcode.com/problems/course-schedule-ii/description" target="_blank">Course Schedule II</a> (Medium)

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.

For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.

Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

**answer**

```py
# The same solution for "Course Schedule" can be used.
# Return a list that keeps track of processed nodes.
```

Alternative solution:

```py
# Time complexity: O(V + E)
# Space complexity: O(V + E)
# Topological sort with depth-first traversal
def findOrder(numCourses: int, prerequisites: List[List[int]]) -> List[int]:
    courses = [[] for _ in range(numCourses)]
    degrees = [0 for _ in range(numCourses)]
    answer = []

    for child, parent in prerequisites:
        courses[parent].append(child)
        degrees[child] += 1

    for i in range(numCourses):
        if degrees[i] == 0:
            dfs(i, courses, degrees, answer)

    if len(answer) != numCourses:
        return []
    return answer

def dfs(current, courses, degrees, answer) -> None:
    answer.append(current)
    degrees[current] -= 1
    for child in courses[current]:
        degrees[child] -= 1
        if degrees[child] == 0:
            dfs(child, courses, degrees, answer)
```

**question**

<a href="https://leetcode.com/problems/snakes-and-ladders/description" target="_blank">Snakes and Ladders</a> (Medium)

You are given an `n x n` integer matrix `board` where the cells are labeled from `1` to `n^2` in a Boustrophedon style starting from the bottom left of the board (i.e. `board[n - 1][0]`) and alternating direction each row.

You start on square `1` of the board. In each move, starting from square `curr`, do the following:

-   Choose a destination square `next` with a label in the range `[curr + 1, min(curr + 6, n^2)]`.
    -   This choice simulates the result of a standard 6-sided die roll: i.e., there are always at most 6 destinations, regardless of the size of the board.
-   If `next` has a snake or ladder, you must move to the destination of that snake or ladder. Otherwise, you move to `next`.
-   The game ends when you reach the square `n^2`.

A board square on row `r` and column `c` has a snake or ladder if `board[r][c] != -1`. The destination of that snake or ladder is `board[r][c]`. Squares `1` and `n^2` do not have a snake or ladder.

Note that you only take a snake or ladder at most once per move. If the destination to a snake or ladder is the start of another snake or ladder, you do not follow the subsequent snake or ladder.

Return the least number of moves required to reach the square `n^2`. If it is not possible to reach the square, return `-1`.

**answer**

```py
from collections import deque

# Time complexity: O(n^2)
# Space complexity: O(n^2)
def snakesAndLadders(board: List[List[int]]) -> int:
    goal = len(board) * len(board)
    steps = {1: 0}  # Track steps to current square. Also tracks if visited
    q = deque()
    q.append(1)

    while q:
        step = q.popleft()
        # Looping backwards from +6 to +1 is an optimization
        # If square +6 is -1, squares +1 to +5 do not need to be checked
        #   if that square is also -1
        skipStep = False
        for i in range(min(goal, step + 6), step, -1):
            # Convert step to indices on board
            row = (i - 1) // len(board)
            col = (i - 1) % len(board)
            # ~ means invert bits (e.g. ~3 -> -4; 011 -> 100)
            # Used to get index from right. (~i) = -(i + 1)
            nextStep = board[~row][col if row % 2 == 0 else ~col]

            # Found snake/ladder
            if nextStep > 0:
                i = nextStep

            if i == goal:
                return steps[step] + 1

            # Found normal square. Can ignore lower normal squares
            if nextStep < 0:
                if skipStep:
                    continue
                skipStep = True

            if i not in steps:
                steps[i] = steps[step] + 1
                q.append(i)
    return -1
```

**question**

<a href="https://leetcode.com/problems/minimum-genetic-mutation/description" target="_blank">Minimum Genetic Mutation</a> (Medium)

A gene string can be represented by an 8-character long string, with choices from `'A'`, `'C'`, `'G'`, and `'T'`.

Suppose we need to investigate a mutation from a gene string `startGene` to a gene string `endGene` where one mutation is defined as one single character changed in the gene string.

For example, `"AACCGGTT" --> "AACCGGTA"` is one mutation.

There is also a gene bank `bank` that records all the valid gene mutations. A gene must be in `bank` to make it a valid gene string.

Given the two gene strings `startGene` and `endGene` and the gene bank `bank`, return the minimum number of mutations needed to mutate from `startGene` to `endGene`. If there is no such a mutation, return `-1`.

Note that the starting point is assumed to be valid, so it might not be included in the bank.

**answer**

```py
from collections import deque

# Time complexity: O(N^2 * M * K) where N = string length, M = mutations, K = bank size
# Space complexity: O(N^2 * M * K)
def minMutation(startGene: str, endGene: str, bank: List[str]) -> int:
    bank = set(bank)
    if endGene not in bank:
        return -1

    mutations = ["A", "C", "G", "T"]
    # Track number of mutations to reach each string
    visited = {startGene: 0}
    q = deque()
    q.append(startGene)

    while q:
        curr = q.popleft()
        # Try swapping every character with every mutation
        for i in range(len(curr)):
            for m in mutations:
                newM = list(curr)
                newM[i] = m
                newM = "".join(newM)
                if newM == endGene:
                    return visited[curr] + 1
                if newM in bank and newM not in visited:
                    q.append(newM)
                    visited[newM] = visited[curr] + 1
    return -1
```

**question**

<a href="https://leetcode.com/problems/minimum-genetic-mutation/description" target="_blank">Minimum Genetic Mutation</a> (Medium)

A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

-   `Trie()` Initializes the trie object.
-   `void insert(String word)` Inserts the string `word` into the trie.
-   `boolean search(String word)` Returns `true` if the string `word` is in the trie (i.e., was inserted before), and `false` otherwise.
-   `boolean startsWith(String prefix)` Returns `true` if there is a previously inserted string `word` that has the prefix `prefix`, and `false` otherwise.

**answer**

```py
class Trie:
    def __init__(self):
        # Nested dictionaries to simulate a graph
        # Example: "apple" -> {a: {p: {p: {l: {e: {"#": "#"}}}}}}
        self.graph = {}

    def insert(self, word: str) -> None:
        # Traverse nested levels, registering char if needed
        level = self.graph
        for c in word:
            if c not in level:
                level[c] = {}
            level = level[c]
        # Use "#" to signal end of a word
        level["#"] = "#"

    def search(self, word: str) -> bool:
        level = self.graph
        for c in word:
            if c not in level:
                return False
            level = level[c]
        return True if "#" in level else False

    def startsWith(self, prefix: str) -> bool:
        level = self.graph
        for c in prefix:
            if c not in level:
                return False
            level = level[c]
        return True
```

Alternative solution:

```py
# Use a custom node class instead of nested dictionaries
class TrieNode:
    def __init__(self):
        # children -> {"a": TrieNode, "b": TrieNode, ...}
        self.children = {}
        self.completeWord = False
```

**question**

<a href="https://leetcode.com/problems/design-add-and-search-words-data-structure/description" target="_blank">Design Add and Search Words Data Structure</a> (Medium)

Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the `WordDictionary` class:

-   `WordDictionary()` Initializes the object.
-   `void addWord(word)` Adds `word` to the data structure, it can be matched later.
-   `bool search(word)` Returns `true` if there is any string in the data structure that matches `word` or `false` otherwise. `word` may contain dots `'.'` where dots can be matched with any letter.

**answer**

```py
class TrieNode:
    def __init__(self):
        self.children = {}
        self.completeWord = False

class WordDictionary:
    def __init__(self):
        self.node = TrieNode()

    # Time complexity: O(N) where N = length of word
    def addWord(self, word: str) -> None:
        node = self.node
        for c in word:
            if c not in node.children:
                node.children[c] = TrieNode()
            node = node.children[c]
        node.completeWord = True

    # Time complexity: O(M) where M = number of TrieNodes
    def search(self, word: str) -> bool:
        return self.searchHelper(word, 0, self.node)

    def searchHelper(self, word: str, i: int, node: Optional["TrieNode"]) -> bool:
        # Note that len(word) is checked instead of len(word) - 1
        # This functions checks if the next char is in the current node's children
        if i == len(word):
            # At end of word, node points to node for last char
            return node.completeWord

        # Depth-first traversal
        if word[i] == ".":
            # Check all children
            for child in node.children.values():
                if self.searchHelper(word, i + 1, child):
                    return True
        else:
            # Standard check for one char
            if word[i] not in node.children:
                return False
            return self.searchHelper(word, i + 1, node.children[word[i]])

        return False
```
