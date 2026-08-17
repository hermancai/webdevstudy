## title

Binary Tree Right Side View (Medium)

## question

<a href="https://leetcode.com/problems/binary-tree-right-side-view/description" target="_blank">Binary Tree Right Side View</a> (Medium)

Given the `root` of a binary tree, imagine yourself standing on the right side of it, and return the values of the nodes you can see ordered from top to bottom.

## answer

```py
def rightSideView(root: Optional[TreeNode]) -> List[int]:
    if not root: return []

    # Iterative breadth first traversal
    currLvl, answer = [root], []

    while currLvl:
        answer.append(currLvl[-1].val)
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

<br />

Alternative answer:

```py
def rightSideView(root: Optional[TreeNode]) -> List[int]:
    answer = []

    # Reversed preorder traversal
    def helper(root, depth: int) -> None:
        if not root: return

        if depth == len(answer):
            answer.append(root.val)

        helper(root.right, depth + 1)
        helper(root.left, depth + 1)

    helper(root, 0)
    return answer
```

Time: O(n)

Space: O(h), h = tree height
