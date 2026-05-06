## title

Average of Levels in Binary Tree (Easy)

## question

<a href="https://leetcode.com/problems/average-of-levels-in-binary-tree/description" target="_blank">Average of Levels in Binary Tree</a> (Easy)

Given the `root` of a binary tree, return the average value of the nodes on each level in the form of an array.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(n)
def averageOfLevels(root: Optional[TreeNode]) -> List[float]:
    answer = []
    q = [root]
    while q:
        nextLevel = []
        currentLevelSum = 0
        for node in q:
            currentLevelSum += node.val
            if node.left:
                nextLevel.append(node.left)
            if node.right:
                nextLevel.append(node.right)
        answer.append(currentLevelSum / len(q))
        q = nextLevel
    return answer
```
