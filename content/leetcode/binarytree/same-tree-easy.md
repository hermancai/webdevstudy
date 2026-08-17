## title

Same Tree (Easy)

## question

<a href="https://leetcode.com/problems/same-tree/description" target="_blank">Same Tree</a> (Easy)

Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

## answer

```py
def isSameTree(p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
    if not p and not q:
        return True

    if (not p or not q) or p.val != q.val:
        return False

    left = self.isSameTree(p.left, q.left)
    right = self.isSameTree(p.right, q.right)
    return left and right
```

Time: O(n)

Space: O(h), h = tree height
