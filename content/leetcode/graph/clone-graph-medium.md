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
