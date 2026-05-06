## title

Binary Search Tree Iterator (Medium)

## question

<a href="https://leetcode.com/problems/binary-search-tree-iterator/description" target="_blank">Binary Search Tree Iterator</a> (Medium)

Implement the `BSTIterator` class that represents an iterator over the in-order traversal of a binary search tree (BST):

- `BSTIterator(TreeNode root)` Initializes an object of the `BSTIterator` class. The `root` of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.
- `boolean hasNext()` Returns `true` if there exists a number in the traversal to the right of the pointer, otherwise returns `false`.
- `int next()` Moves the pointer to the right, then returns the number at the pointer.

Notice that by initializing the pointer to a non-existent smallest number, the first call to `next()` will return the smallest element in the BST.

You may assume that `next()` calls will always be valid. That is, there will be at least a next number in the in-order traversal when `next()` is called.

Implement `next()` and `hasNext()` to run in average `O(1)` time and use `O(h)` memory, where `h` is the height of the tree.

## answer

```py
# Time complexity: average O(1)
# Space complexity: O(h) where h = height of tree
class BSTIterator:
    # This solution is essentially iterative inorder traversal.
    def __init__(self, root: Optional[TreeNode]):
        self.stack = []
        # The stack will be filled with all lefts nodes of the current node,
        #   similar to recursive inorder traversal.
        self.appendLeftNodes(root)

    def next(self) -> int:
        node = self.stack.pop()
        if node.right:
            self.appendLeftNodes(node.right)
        return node.val

    def hasNext(self) -> bool:
        return len(self.stack) > 0

    def appendLeftNodes(self, root: Optional[TreeNode]) -> None:
        # The while loop will run at most n times.
        # If next() is called n times, the average time complexity is O(1).
        while root:
            self.stack.append(root)
            root = root.left
```
