## title

Construct Binary Tree from Inorder and Postorder Traversal (Medium)

## question

<a href="https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description" target="_blank">Construct Binary Tree from Inorder and Postorder Traversal</a> (Medium)

Given two integer arrays `inorder` and `postorder` where `inorder` is the inorder traversal of a binary tree and `postorder` is the postorder traversal of the same tree, construct and return the binary tree.

## answer

The solution is similar to "Construct Binary Tree from Preorder and Inorder Traversal". Notice that the output of postorder traversal is similar to preorder traversal, except postorder starts with right subtrees and the output is reversed.

```py
def buildTree(inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
    m = {}
    for i in range(len(inorder)):
        m[inorder[i]] = i

    def helper(postI, inLeft, inRight):
        if postI < 0 or inLeft > inRight:
            return None

        inI = m[postorder[postI]]
        node = TreeNode(postorder[postI])

        # To get the current node's left child's index in postorder,
        # Skip the length of the entire right subtree
        # Right subtree length = inRight - inI + 1
        node.left = helper(postI - (inRight - inI + 1), inLeft, inI - 1)
        node.right = helper(postI - 1, inI + 1, inRight)
        return node

    return helper(len(postorder) - 1, 0, len(inorder) - 1)
```

Time: O(n)

Space: O(n)
