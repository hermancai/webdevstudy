## title

Construct Binary Tree from Inorder and Postorder Traversal (Medium)

## question

<a href="https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description" target="_blank">Construct Binary Tree from Inorder and Postorder Traversal</a> (Medium)

Given two integer arrays `inorder` and `postorder` where `inorder` is the inorder traversal of a binary tree and `postorder` is the postorder traversal of the same tree, construct and return the binary tree.

## answer

The solution is similar to "Construct Binary Tree from Preorder and Inorder Traversal". Notice that the output of postorder traversal is similar to preorder traversal, except postorder starts with right subtrees and the output is reversed.

```py
# Time complexity: O(n)
# Space complexity: O(n)
def buildTree(inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
    # Convert inorder to map with indices
    m = {}
    for i in range(len(inorder)):
        m[inorder[i]] = i

    return build(m, postorder, len(postorder) - 1, 0, len(inorder) - 1)

# p: index of current node in postorder
# l: starting index of subtree in inorder
# r: ending index of subtree in inorder
def build(inorder, postorder, p, l, r):
    if p < 0 or l > r:
        return None

    # Position of current node in inorder
    inIdx = inorder[postorder[p]]

    node = TreeNode(postorder[p])
    # In postorder, right child of node is always before
    node.right = build(inorder, postorder, p - 1, inIdx + 1, r)

    # In inorder, right subtree size == length of right subarray == r - inIdx
    # To get index of left child in postorder, skip length of right subarray + 1
    node.left = build(inorder, postorder, p - (r - inIdx + 1), l, inIdx - 1)
    return node
```
