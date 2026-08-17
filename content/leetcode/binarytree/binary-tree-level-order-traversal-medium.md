## title

Binary Tree Level Order Traversal (Medium)

## question

<a href="https://leetcode.com/problems/binary-tree-level-order-traversal/description" target="_blank">Binary Tree Level Order Traversal</a> (Medium)

Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

## answer

```py
def levelOrder(root: Optional[TreeNode]) -> List[List[int]]:
    if not root: return []

    currLvl, answer = [root], []

    while currLvl:
        answer.append([])
        nextLvl = []
        for node in currLvl:
            answer[-1].append(node.val)
            if node.left:
                nextLvl.append(node.left)
            if node.right:
                nextLvl.append(node.right)
        currLvl = nextLvl

    return answer
```

Time: O(n)

Space: O(n)
