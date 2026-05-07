## title

Flatten Binary Tree to Linked List (Medium)

## question

<a href="https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description" target="_blank">Flatten Binary Tree to Linked List</a> (Medium)

Given the `root` of a binary tree, flatten the tree into a "linked list":

- The "linked list" should use the same `TreeNode` class where the `right` child pointer points to the next node in the list and the `left` child pointer is always `null`.
- The "linked list" should be in the same order as a pre-order traversal of the binary tree.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(h) where h = height of tree
def flatten(root: Optional[TreeNode]) -> None:
    return helper(root, None)

# Preorder traversal == reversed postorder starting with right subtrees
# Preorder cannot be used here because left pointers get overwritten
# Build list starting from tail with postorder starting with right subtrees
def helper(curr, prev):
    if not curr:
        return prev

    # To understanding this solution, keep track of what prev points to
    prev = helper(curr.right, prev)
    # prev can potentially point to a node from a far subtree
    prev = helper(curr.left, prev)

    # prev now points to the node after curr in preorder traversal
    curr.right = prev
    curr.left = None
    return curr
```
