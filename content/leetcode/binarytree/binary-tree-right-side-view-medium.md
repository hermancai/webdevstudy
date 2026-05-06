## title

Binary Tree Right Side View (Medium)

## question

<a href="https://leetcode.com/problems/binary-tree-right-side-view/description" target="_blank">Binary Tree Right Side View</a> (Medium)

Given the `root` of a binary tree, imagine yourself standing on the right side of it, and return the values of the nodes you can see ordered from top to bottom.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(h) where h = height of tree
def rightSideView(root: Optional[TreeNode]) -> List[int]:
    return helper(root, 0, [])

# Reversed preorder traversal
def helper(node: Optional[TreeNode], depth: int, answer: List[int]) -> List[int]:
    if not node:
        return answer

    # Only add right-most node of new levels
    if depth == len(answer):
        answer.append(node.val)

    helper(node.right, depth + 1, answer)
    helper(node.left, depth + 1, answer)
    return answer
```

Alternative solution:

```py
# Time complexity: O(n)
# Space complexity: O(n)
# Iterative breadth-first traversal, adding last node of every level
def rightSideView(root: Optional[TreeNode]) -> List[int]:
    if not root:
        return []

    answer = [root.val]
    q = [root]
    while q:
        nextLevel = []
        for node in q:
            if node.left:
                nextLevel.append(node.left)
            if node.right:
                nextLevel.append(node.right)
        if nextLevel:
            answer.append(nextLevel[-1].val)
        q = nextLevel
    return answer
```
