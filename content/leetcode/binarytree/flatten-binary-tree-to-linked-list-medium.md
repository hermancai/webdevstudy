## title

Flatten Binary Tree to Linked List (Medium)

## question

<a href="https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description" target="_blank">Flatten Binary Tree to Linked List</a> (Medium)

Given the `root` of a binary tree, flatten the tree into a "linked list":

- The "linked list" should use the same `TreeNode` class where the `right` child pointer points to the next node in the list and the `left` child pointer is always `null`.
- The "linked list" should be in the same order as a pre-order traversal of the binary tree.

## answer

```py
def flatten(root: Optional[TreeNode]) -> None:
    if not root: return

    # Make preorder list of nodes, then update node pointers
    nodes = []

    def helper(root):
        if not root: return

        nodes.append(root)
        helper(root.left)
        helper(root.right)

    helper(root)
    for i in range(len(nodes) - 1):
        nodes[i].left = None
        nodes[i].right = nodes[i + 1]
```

Time: O(n)

Space: O(n)

<br />

Follow-up: Use O(1) space.

```py
def flatten(root: Optional[TreeNode]) -> None:
    # Remove the right subtree and attach to the rightmost node
    # in the left subtree. This preserves preorder
    curr = root

    while curr:
        if curr.left:
            # Find rightmost node in left subtree
            rightMostNode = curr.left
            while rightMostNode.right:
                rightMostNode = rightMostNode.right

            # Attach right subtree
            rightMostNode.right = curr.right

            # Move left subtree to right side
            curr.right = curr.left
            curr.left = None

        curr = curr.right
```

Time: O(n)

Space: O(1)
