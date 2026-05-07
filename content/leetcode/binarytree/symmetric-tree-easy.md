## title

Symmetric Tree (Easy)

## question

<a href="https://leetcode.com/problems/symmetric-tree/description" target="_blank">Symmetric Tree</a> (Easy)

Given the `root` of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

## answer

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
