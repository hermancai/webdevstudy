## title

Minimum Absolute Difference in BST (Easy)

## question

<a href="https://leetcode.com/problems/minimum-absolute-difference-in-bst/description" target="_blank">Minimum Absolute Difference in BST</a> (Easy)

Given the `root` of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

## answer

```py
def getMinimumDifference(root: Optional[TreeNode]) -> int:
    answer, prev = float("inf"), None

    # Inorder traversal, keep track of prev
    def helper(root):
        if not root: return

        helper(root.left)
        nonlocal answer, prev
        if prev:
            answer = min(answer, root.val - prev.val)
        prev = root
        helper(root.right)

    helper(root)
    return answer
```

Time: O(n)

Space: O(h), h = tree height
