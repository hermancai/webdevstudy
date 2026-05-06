## title

Same Tree (Easy)

## question

<a href="https://leetcode.com/problems/same-tree/description" target="_blank">Same Tree</a> (Easy)

Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

## answer

```py
# Time complexity: O(n), n = number of nodes
# Space complexity: O(h), h = height of tree
def isSameTree(p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
    if not p and not q: return True
    if not p or not q: return False
    if p.val != q.val: return False

    left = self.isSameTree(p.left, q.left)
    if not left: return False
    right = self.isSameTree(p.right, q.right)
    if not right: return False

    return p.val == q.val
```
