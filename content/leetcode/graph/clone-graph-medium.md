## title

Clone Graph (Medium)

## question

<a href="https://leetcode.com/problems/clone-graph/description" target="_blank">Clone Graph</a> (Medium)

Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

```py
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
```

## answer

```py
from collections import deque

def cloneGraph(node: Optional['Node']) -> Optional['Node']:
    if not node: return None

    # Key: old node; Value: new node
    visited, d = { node: Node(node.val)}, deque([node])

    # Iterative breadth first traversal
    while d:
        curr = d.popleft()
        for neighbor in curr.neighbors:
            if neighbor not in visited:
                d.append(neighbor)
                visited[neighbor] = Node(neighbor.val)
            visited[curr].neighbors.append(visited[neighbor])

    return visited[node]
```

Time: O(V + E), V = vertices, E = edges

Space: O(V) excluding output

<br />

Alternative solution:

```py
def cloneGraph(node: Optional['Node']) -> Optional['Node']:
    if not node: return None

    # Key: old node; Value: new node
    visited = {}

    # Recursive depth first traversal
    def dfs(node):
        if node not in visited:
            visited[node] = Node(node.val)
            for neighbor in node.neighbors:
                visited[node].neighbors.append(dfs(neighbor))
        return visited[node]

    return dfs(node)
```

Time: O(V + E), V = vertices, E = edges

Space: O(V) excluding output
