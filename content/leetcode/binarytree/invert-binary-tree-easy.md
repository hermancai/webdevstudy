## title

Invert Binary Tree (Easy)

## question

<a href="https://leetcode.com/problems/invert-binary-tree/description" target="_blank">Invert Binary Tree</a> (Easy)

Given the `root` of a binary tree, invert the tree, and return its root.

## answer

Recursive:

```py
# Time complexity: O(n), n = number of nodes
# Space complexity: O(h), h = height of tree
def invertTree(root: Node) -> Node:
    if not root:
        return root

    left = self.invertTree(root.left)
    right = self.invertTree(root.right)
    root.left, root.right = root.right, root.left
    return root
```

Iterative:

```py
from collections import deque

# Time complexity: O(n)
# Space complexity: O(n)
def invertTree(root: Node) -> Node:
    if not root: return root

    q = deque()
    q.append(root)

    while q:
        node = q.popleft()
        node.left, node.right = node.right, node.left
        if node.left:
            q.append(node.left)
        if node.right:
            q.append(node.right)
    return root
```
