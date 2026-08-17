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
class BSTIterator:
    def __init__(self, root: Optional[TreeNode]):
        self.stack = []
        self.node = root

    # Iterative inorder traversal
    def next(self) -> int:
        # Get leftmost node
        # This loop runs at most n times.
        # If next() is called n times, average time complexity is O(1)
        while self.node:
            self.stack.append(self.node)
            self.node = self.node.left
        nextNode = self.stack.pop()

        # If nextNode.right is None, get next node from stack
        self.node = nextNode.right
        return nextNode.val

    def hasNext(self) -> bool:
        return bool(self.stack or self.node)
```

Time: O(1) average

Space: O(h), h = tree height
