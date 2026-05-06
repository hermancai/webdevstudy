## title

Maximum Depth of Binary Tree (Easy)

## question

<a href="https://leetcode.com/problems/maximum-depth-of-binary-tree/description" target="_blank">Maximum Depth of Binary Tree</a> (Easy)

Given the `root` of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

## answer

```py
# Time complexity: O(n), n = number of nodes
# Space complexity: O(h), h = height of tree
def maxDepth(root: Optional[TreeNode]) -> int:
    if not root:
        return 0

    left = self.maxDepth(root.left) + 1
    right = self.maxDepth(root.right) + 1

    return max(left, right)
```
