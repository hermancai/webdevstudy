## title

Lowest Common Ancestor of a Binary Tree (Medium)

## question

<a href="https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description" target="_blank">Lowest Common Ancestor of a Binary Tree</a> (Medium)

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow a node to be a descendant of itself).

## answer

```py
def lowestCommonAncestor(root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
    if not root: return None

    # Return early if p/q found because LCA cannot be lower
    # If p/q is LCA, recursion will exit with p/q
    if root == p or root == q: return root

    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)

    # LCA is current node
    if left and right:
        return root

    # Answer will be carried up recursion stack
    return left or right
```

Time: O(n)

Space: O(h), h = tree height
