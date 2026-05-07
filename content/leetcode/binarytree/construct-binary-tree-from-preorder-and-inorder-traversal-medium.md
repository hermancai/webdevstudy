## title

Construct Binary Tree from Preorder and Inorder Traversal (Medium)

## question

<a href="https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description" target="_blank">Construct Binary Tree from Preorder and Inorder Traversal</a> (Medium)

Given two integer arrays `preorder` and `inorder` where `preorder` is the preorder traversal of a binary tree and `inorder` is the inorder traversal of the same tree, construct and return the binary tree.

`preorder` and `inorder` consist of unique values.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(n)
def buildTree(preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
    # Convert inorder to map with indices
    m = {}
    for i in range(len(inorder)):
        m[inorder[i]] = i

    return build(preorder, m, 0, 0, len(inorder) - 1)

# p: index of current node in preorder
# l: starting index of subtree in inorder
# r: ending index of subtree in inorder
def build(preorder, inorder, p, l, r) -> Optional[TreeNode]:
    if p >= len(preorder) or l > r:
        return None

    # Position of current node in inorder
    inIdx = inorder[preorder[p]]

    node = TreeNode(preorder[p])
    # In preorder, left child of node is always next
    node.left = build(preorder, inorder, p + 1, l, inIdx - 1)

    # In inorder, left subtree size == length of left subarray == inIdx - l
    # To get index of right child in preorder, skip length of left subarray + 1
    node.right = build(preorder, inorder, p + inIdx - l + 1, inIdx + 1, r)
    return node
```
