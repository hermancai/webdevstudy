## title

Notes

## question

Notes

## answer

Breadth-First Traversal (BFS)

- BFS naturally finds the shortest path to a node

```py
from collections import deque

def bfs(graph, root):
    visited = set([root])
    queue = deque([root])
    result = []

    while queue:
        curr = popleft()
        result.append(curr)

        for neighbor in graph[curr]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

    return result
```

Depth-First Search (DFS)

```py
def dfsRecursive(graph, root, visited):
    visited.add(root)
    print(root.val)

    for neighbor in graph[root]:
        if root not in visited:
            dfsRecursive(graph, neighbor, visited)

def dfsIterative(graph, root):
    visited = set()
    stack = [root]

    while stack:
        curr = stack.pop()
        print(curr.val)
        visited.add(curr)

        for neighbor in graph[curr]:
            if neighbor not in visited:
                stack.append(neighbor)
```

Topological Sort (Kahn's Algorithm)

```py
from collections import deque, defaultdict

def topologicalSort(nodes, edges):
    # Which nodes have current node as a prerequisite?
    # { prereqNode: [nodes] }
    neighbors = defaultdict(list)
    # How many prerequisites does the current node have?
    # { node: prereqCount }
    indegree = {}

    # Add all nodes. Edges may not include all nodes
    for node in nodes:
        indegree[node] = 0

    for prereq, node in edges:
        neighbors[prereq].append(node)
        indegree[node] += 1

    # breadth first traversal
    queue = deque([node for node in nodes if indegree[node] == 0])
    result = []

    while queue:
        node = queue.popleft()
        result.append(node)

        for neighbor in neighbors[node]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    # Cycle exists if unequal lengths
    return result if len(result) == len(nodes) else []
```
