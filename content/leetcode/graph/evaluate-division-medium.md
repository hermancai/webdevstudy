## title

Evaluate Division (Medium)

## question

<a href="https://leetcode.com/problems/evaluate-division/description" target="_blank">Evaluate Division</a> (Medium)

You are given an array of variable pairs `equations` and an array of real numbers `values`, where `equations[i] = [Ai, Bi]` and `values[i]` represent the equation `Ai / Bi = values[i]`. Each `Ai` or `Bi` is a string that represents a single variable.

You are also given some `queries`, where `queries[j] = [Cj, Dj]` represents the `j`<sup>th</sup> query where you must find the answer for `Cj / Dj = ?`.

Return the answers to all queries. If a single answer cannot be determined, return `-1.0`.

Assume the input is always valid. Evaluating the queries will not result in division by zero and there is no contradiction.

Variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.

## answer

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
