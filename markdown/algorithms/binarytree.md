**question**

Binary tree node class

**answer**

```py
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

**question**

Binary tree traversal order

**answer**

Preorder traversal

-   Process node -> traverse left subtree -> traverse right subtree
-   Used to create a copy of the tree

Inorder traversal

-   Traverse left subtree -> process node -> traverse right subtree
-   Used to get sorted values in a binary search tree

Postorder traversal

-   Traverse left subtree -> traverse right subtree -> process node
-   Used to delete a tree starting from leaves to root

**question**

Invert binary tree

**answer**

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

<a href="https://leetcode.com/problems/invert-binary-tree/description" target="_blank">226. Invert Binary Tree</a>

**question**

Check if a binary tree is symmetric

**answer**

Recursive:

```py
def isSymmetric(root: Node) -> bool:
    if not root: return False
    return helper(root.left, root.right)

# Time complexity: O(n), n = number of nodes
# Space complexity: O(h), h = height of tree
def helper(left, right) -> bool:
    if not left and not right: return True
    if not left or not right: return False
    if left.val != right.val: return False

    outer = helper(left.left, right.right)
    inner = helper(left.right, right.left)
    return outer and inner
```

Iterative:

```py
from collections import deque

# Time complexity: O(n)
# Space complexity: O(n)
def isSymmetric(root:Node) -> bool:
    if not root: return False

    q = deque()
    q.append(root.left)
    q.append(root.right)

    while q:
        left = q.popleft()
        right = q.popleft()
        if not left and not right: continue
        if not left or not right: return False
        if left.val != right.val: return False
        q.append(left.left)
        q.append(right.right)
        q.append(left.right)
        q.append(right.left)
    return True
```

<a href="https://leetcode.com/problems/symmetric-tree/description" target="_blank">101. Symmetric Tree</a>

**question**

Count nodes in a complete binary tree

**answer**

```py
# Time complexity: O((log n)^2)
# Space complexity: O(h) where h = height of tree
def getHeight(root) -> int:
    if not root:
        return 0
    return getHeight(root.left) + 1

def countNodes(root) -> int:
    if not root:
        return 0

    left = getHeight(root.left)
    right = getHeight(root.right)

    # Equal height means left subtree is perfect binary tree
    if left == right:
        return countNodes(root.right) + 2**left
    # Else the right subtree is perfect binary tree
    else:
        return countNodes(root.left) + 2**right
```

<a href="https://leetcode.com/problems/count-complete-tree-nodes/description" target="_blank">222. Count Complete Tree Nodes</a>
