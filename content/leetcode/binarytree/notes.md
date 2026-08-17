## title

Notes

## question

Notes

## answer

```py
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

Breadth-First Traversal (BFS)

```py
from collections import deque

def bfs(root):
    if not root: return []

    result = []
    # If deque is not allowed, use lists to store current and next level
    queue = deque([root])

    while queue:
        curr = queue.popleft()
        result.append(curr.val)

        if curr.left:
            queue.append(curr.left)
        if curr.right:
            queue.append(curr.right)

    return result
```

Preorder traversal

- Used to create a copy of the tree

```py
def preorderRecursive(root):
    if not root: return

    print(root.val)
    preorderRecursive(root.left)
    preorderRecursive(root.right)

def preorderIterative(root):
    stack = [root]

    while stack:
        node = stack.pop()
        print(node.val)
        # Push node.right first because stack is LIFO
        if node.right: stack.append(node.right)
        if node.left: stack.append(node.left)
```

Inorder traversal

- Used to get sorted values in a binary search tree

```py
def inorderRecursive(root):
    if not root: return

    preorderRecursive(root.left)
    print(root.val)
    preorderRecursive(root.right)

def inorderIterative(root):
    curr, stack = root, []

    while curr or stack:
        # Always try to get leftmost child node
        while curr:
            stack.append(curr)
            curr = curr.left

        curr = stack.pop()
        print(curr.val)

        curr = curr.right
```

Postorder traversal

- Used to delete a tree starting from leaves to root

```py
def postorderRecursive(root):
    if not root: return

    preorderRecursive(root.left)
    preorderRecursive(root.right)
    print(root.val)

def postorderIterative(root):
    stack, result = [root], []

    # Preorder is root -> left -> right
    # Modify preorder to root -> right -> left,
    #   then reverse result: left -> right -> root (== postorder)
    while stack:
        node = stack.pop()
        result.append(node.val)
        # Push node.left first, opposite of preorder solution
        if node.left: stack.append(node.left)
        if node.right: stack.append(node.right)

    result.reverse()
    for node in result:
        print(node.val)
```
