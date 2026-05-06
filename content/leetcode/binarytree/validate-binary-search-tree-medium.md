## title

Validate Binary Search Tree (Medium)

## question

<a href="https://leetcode.com/problems/validate-binary-search-tree/description" target="_blank">Validate Binary Search Tree</a> (Medium)

Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(n)
# Iterative inorder traversal while tracking previous node
def isValidBST(root: Optional[TreeNode]) -> bool:
    stack = []
    prev = None

    while root or stack:
        while root:
            stack.append(root)
            root = root.left

        root = stack.pop()
        # Previous value must be less than current in inorder traversal of valid BST
        if prev and root.val <= prev.val:
            return False

        prev = root
        root = root.right
    return True
```

Alternative solution:

```py
# Time complexity: O(n)
# Space complexity: O(h) where h = height of tree
def isValidBST(root: Optional[TreeNode]) -> bool:
    return helper(root, float("-inf"), float("inf"))

# Recursive inorder traversal
# Keep track of valid range for current value
def helper(node: Optional[TreeNode], minV, maxV) -> bool:
    if not node:
        return True

    if node.val <= minV or node.val >= maxV:
        return False

    left = helper(node.left, minV, node.val)
    if not left:
        return False

    right = helper(node.right, node.val, maxV)

    return left and right
```
