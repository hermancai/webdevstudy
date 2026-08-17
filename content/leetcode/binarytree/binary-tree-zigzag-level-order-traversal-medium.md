## title

Binary Tree Zigzag Level Order Traversal (Medium)

## question

<a href="https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description" target="_blank">Binary Tree Zigzag Level Order Traversal</a> (Medium)

Given the `root` of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

## answer

```py
def zigzagLevelOrder(root: Optional[TreeNode]) -> List[List[int]]:
    if not root: return []

    currLvl, answer, forward = [root], [], True

    while currLvl:
        vals = []
        for node in currLvl:
            vals.append(node.val)
        if not forward:
            vals.reverse()
        answer.append(vals)
        forward = not forward

        nextLvl = []
        for node in currLvl:
            if node.left:
                nextLvl.append(node.left)
            if node.right:
                nextLvl.append(node.right)
        currLvl = nextLvl

    return answer
```

Time: O(n)

Space: O(n)
