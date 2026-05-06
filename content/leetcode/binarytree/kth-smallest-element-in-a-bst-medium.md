## title

Kth Smallest Element in a BST (Medium)

## question

<a href="https://leetcode.com/problems/kth-smallest-element-in-a-bst/description" target="_blank">Kth Smallest Element in a BST</a> (Medium)

Given the `root` of a binary search tree, and an integer `k`, return the `k`<sup>th</sup> smallest value (1-indexed) of all the values of the nodes in the tree.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(h) where h = height of tree
def kthSmallest(root: Optional[TreeNode], k: int) -> int:
    # Simulate global variables in list. vals[1] will contain answer
    vals = [k, 0]
    helper(root, vals)
    return vals[1]

# Recursive inorder traversal
def helper(node: Optional[TreeNode], vals: List[int]) -> None:
    if not node or vals[0] < 0:
        return

    helper(node.left, vals)

    vals[0] -= 1
    if vals[0] == 0:
        vals[1] = node.val

    helper(node.right, vals)
```

Alternative solution:

```py
# Time complexity: O(n)
# Space complexity: O(n)
# Iterative inorder traversal
def kthSmallest(root: Optional[TreeNode], k: int) -> int:
    stack = []

    while root or stack:
        while root:
            stack.append(root)
            root = root.left

        root = stack.pop()
        k -= 1
        if k == 0:
            return root.val
        root = root.right
    return -1
```
