## title

Minimum Absolute Difference in BST (Easy)

## question

<a href="https://leetcode.com/problems/minimum-absolute-difference-in-bst/description" target="_blank">Minimum Absolute Difference in BST</a> (Easy)

Given the `root` of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

## answer

```py
# Inorder traversal using global variable to track answer
# Time complexity: O(n), n = number of nodes
# Space complexity: O(h), h = height of tree
class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        self.answer = float("inf")
        self.prev = None

        def inorder(root):
            if not root: return
            inorder(root.left)
            if self.prev != None:
                self.answer = min(self.answer, root.val - self.prev)
            self.prev = root.val
            inorder(root.right)

        inorder(root)
        return self.answer
```
