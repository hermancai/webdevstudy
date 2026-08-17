## title

Construct Binary Tree from Preorder and Inorder Traversal (Medium)

## question

<a href="https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description" target="_blank">Construct Binary Tree from Preorder and Inorder Traversal</a> (Medium)

Given two integer arrays `preorder` and `inorder` where `preorder` is the preorder traversal of a binary tree and `inorder` is the inorder traversal of the same tree, construct and return the binary tree.

`preorder` and `inorder` consist of unique values.

## answer

```py
# In a preorder list, a node's left child is always the next element in the list
# In an inorder list, left side elements are left subtree of current node. Same with right
def buildTree(preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
    # Map inorder indices for O(1) lookup
    m = {}
    for i in range(len(inorder)):
        m[inorder[i]] = i

    # Recursively build left and right child nodes while shrinking list
    def helper(preI, inLeft, inRight):
        if preI >= len(preorder) or inLeft > inRight:
            return None

        inI = m[preorder[preI]]
        node = TreeNode(preorder[preI])

        node.left = helper(preI + 1, inLeft, inI - 1)
        # To get the current node's right child's index in preorder,
        # Skip the length of the entire left subtree
        # Left subtree length = inI - inLeft + 1
        node.right = helper(preI + inI - inLeft + 1, inI + 1, inRight)
        return node

    return helper(0, 0, len(inorder) - 1)
```

Time: O(n)

Space: O(n)
