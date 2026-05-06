## title

Lowest Common Ancestor of a Binary Tree (Medium)

## question

<a href="https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description" target="_blank">Lowest Common Ancestor of a Binary Tree</a> (Medium)

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow a node to be a descendant of itself).

## answer

```py
# Time complexity: O(n)
# Space complexity: O(h) where h = height of tree
def lowestCommonAncestor(root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
    # Return if p/q is found without searching deeper
    #   because LCA cannot be in a lower level
    if not root or root == p or root == q:
        return root

    # Search whole tree for p and q
    # If p/q is not in left/right, left/right = None
    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)

    # LCA is immediate parent when p and q are both found
    if left and right:
        return root

    # When LCA is found, it will be carried up the stack
    #   because either left or right would be None
    return left or right
```
