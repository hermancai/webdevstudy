## title

Path Sum (Easy)

## question

<a href="https://leetcode.com/problems/path-sum/description" target="_blank">Path Sum</a> (Easy)

Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a root-to-leaf path such that adding up all the values along the path equals `targetSum`.

A leaf is a node with no children.

## answer

```py
def hasPathSum(root: Optional[TreeNode], targetSum: int) -> bool:
    def helper(node, target, total):
        if not node:
            return False

        if not node.left and not node.right:
            return target == total + node.val

        left = helper(node.left, target, total + node.val)
        right = helper(node.right, target, total + node.val)
        return left or right

    return helper(root, targetSum, 0)
```

Time: O(n)

Space: O(h), h = tree height
