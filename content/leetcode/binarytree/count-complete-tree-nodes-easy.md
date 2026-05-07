## title

Count Complete Tree Nodes (Easy)

## question

<a href="https://leetcode.com/problems/count-complete-tree-nodes/description" target="_blank">Count Complete Tree Nodes</a> (Easy)

Given the `root` of a complete binary tree, return the number of the nodes in the tree.

In a complete binary tree, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2<sup>h</sup> nodes inclusive at the last level `h`.

Design an algorithm that runs in less than `O(n)` time complexity.

## answer

```py
# Time complexity: O((log n)^2)
# Space complexity: O(h), h = height of tree
def getHeight(root) -> int:
    if not root: return 0
    return getHeight(root.left) + 1

def countNodes(root) -> int:
    if not root: return 0

    left = getHeight(root.left)
    right = getHeight(root.right)

    # Equal height means left subtree is perfect binary tree
    if left == right:
        return countNodes(root.right) + 2**left
    # Else the right subtree is perfect binary tree
    else:
        return countNodes(root.left) + 2**right
```
