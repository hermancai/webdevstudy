## title

Binary Tree Zigzag Level Order Traversal (Medium)

## question

<a href="https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description" target="_blank">Binary Tree Zigzag Level Order Traversal</a> (Medium)

Given the `root` of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

## answer

```py
# Time complexity: O(n)
# Space complexity: O(n)
def zigzagLevelOrder(root: Optional[TreeNode]) -> List[List[int]]:
    if not root:
        return []

    answer = []
    q = [root]
    goRight = True
    # Breadth-first traversal while adding values to answer
    while q:
        nextLevel = []
        vals = []
        for i in range(len(q)):
            node = q[i]

            # Get symmetric index depending on goRight
            if goRight:
                vals.append(node.val)
            else:
                vals.append(q[len(q) - i - 1].val)

            if node.left:
                nextLevel.append(node.left)
            if node.right:
                nextLevel.append(node.right)
        goRight = not goRight
        answer.append(vals)
        q = nextLevel

    return answer
```
