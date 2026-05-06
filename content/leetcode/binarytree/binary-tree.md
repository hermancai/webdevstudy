## title

Binary Tree

## question

Binary Tree

## answer

```py
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

Preorder traversal

- Process node -> traverse left subtree -> traverse right subtree
- Used to create a copy of the tree

Inorder traversal

- Traverse left subtree -> process node -> traverse right subtree
- Used to get sorted values in a binary search tree

Postorder traversal

- Traverse left subtree -> traverse right subtree -> process node
- Used to delete a tree starting from leaves to root
