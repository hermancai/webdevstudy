## title

Sum Root to Leaf Numbers (Medium)

## question

<a href="https://leetcode.com/problems/sum-root-to-leaf-numbers/description" target="_blank">Sum Root to Leaf Numbers</a> (Medium)

You are given the `root` of a binary tree containing digits from `0` to `9` only.

Each root-to-leaf path in the tree represents a number. For example, the root-to-leaf path `1 -> 2 -> 3` represents the number `123`.

Return the total sum of all root-to-leaf numbers. A leaf node is a node with no children.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(h) where h = height of tree
def sumNumbers(root: Optional[TreeNode]) -> int:
    return helper(root, 0)

def helper(node: Optional[TreeNode], currVal: int) -> int:
    if not node:
        return 0

    currVal = currVal * 10 + node.val

    if not node.left and not node.right:
        return currVal

    left = helper(node.left, currVal)
    right = helper(node.right, currVal)
    return left + right
```
