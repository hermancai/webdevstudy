## title

Path Sum (Easy)

## question

<a href="https://leetcode.com/problems/path-sum/description" target="_blank">Path Sum</a> (Easy)

Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a root-to-leaf path such that adding up all the values along the path equals `targetSum`.

A leaf is a node with no children.

## answer

```py
def hasPathSum(root: Optional[TreeNode], targetSum: int) -> bool:
    return self.helper(root, 0, targetSum)

# Time complexity: O(n), n = number of nodes
# Space complexity: O(h), h = height of tree
def helper(root, total, targetSum):
    if not root: return False
    if not root.left and not root.right:
        return total + root.val == targetSum

    left = self.helper(root.left, total + root.val, targetSum)
    if left: return True

    right = self.helper(root.right, total + root.val, targetSum)
    return right
```
