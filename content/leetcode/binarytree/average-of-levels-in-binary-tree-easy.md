## title

Average of Levels in Binary Tree (Easy)

## question

<a href="https://leetcode.com/problems/average-of-levels-in-binary-tree/description" target="_blank">Average of Levels in Binary Tree</a> (Easy)

Given the `root` of a binary tree, return the average value of the nodes on each level in the form of an array.

## answer

```py
def averageOfLevels(root: Optional[TreeNode]) -> List[float]:
    currLvl, answer = [root],  []

    while currLvl:
        nextLvl, total = [], 0
        for node in currLvl:
            total += node.val
            if node.left:
                nextLvl.append(node.left)
            if node.right:
                nextLvl.append(node.right)

        answer.append(total / len(currLvl))
        currLvl = nextLvl

    return answer
```

Time: O(n)

Space: O(n)
