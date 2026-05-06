## title

Binary Tree Level Order Traversal (Medium)

## question

<a href="https://leetcode.com/problems/binary-tree-level-order-traversal/description" target="_blank">Binary Tree Level Order Traversal</a> (Medium)

Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

## answer

```py
# Time complexity: O(n)
# Space complexity: O(n)
def levelOrder(root: Optional[TreeNode]) -> List[List[int]]:
    if not root:
        return []

    q = [root]
    answer = []
    # Breadth-first traversal while adding values to answer
    while q:
        nextLevel = []
        vals = []
        for node in q:
            vals.append(node.val)
            if node.left:
                nextLevel.append(node.left)
            if node.right:
                nextLevel.append(node.right)
        answer.append(vals)
        q = nextLevel

    return answer
```
