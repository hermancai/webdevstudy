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
def isValidBST(root: Optional[TreeNode]) -> bool:
    stack, prev, curr = [], None, root

    # Iterative inorder traversal, tracking prev
    while stack or curr:
        while curr:
            stack.append(curr)
            curr = curr.left

        node = stack.pop()
        if prev and prev.val >= node.val:
            return False

        prev = node
        curr = node.right

    return True
```

Time: O(n)

Space: O(h), h = tree height

<br />

Alternative solution:

```py
def isValidBST(root: Optional[TreeNode]) -> bool:
    # Recursive inorder traversal, updating valid value range
    def helper(root, minV, maxV):
        if not root: return True

        if root.val <= minV or root.val >= maxV:
            return False

        left = helper(root.left, minV, root.val)
        right = helper(root.right, root.val, maxV)
        return left and right

    return helper(root, float("-inf"), float("inf"))
```

Time: O(n)

Space: O(h), h = tree height
