## title

Kth Smallest Element in a BST (Medium)

## question

<a href="https://leetcode.com/problems/kth-smallest-element-in-a-bst/description" target="_blank">Kth Smallest Element in a BST</a> (Medium)

Given the `root` of a binary search tree, and an integer `k`, return the `k`<sup>th</sup> smallest value (1-indexed) of all the values of the nodes in the tree.

## answer

```py
def kthSmallest(root: Optional[TreeNode], k: int) -> int:
    # Iterative inorder traversal
    curr, stack = root, []

    while stack or curr:
        while curr:
            stack.append(curr)
            curr = curr.left

        node = stack.pop()
        k -= 1
        if k == 0:
            return node.val
        curr = node.right

    return -1
```

Time: O(n)

Space: O(h), h = tree height

<br />

Alternative solution:

```py
def kthSmallest(root: Optional[TreeNode], k: int) -> int:
    count, answer = 0, 0

    # Recursive inorder traversal, counting nodes
    def helper(root):
        if not root: return

        helper(root.left)
        nonlocal count, answer
        count += 1
        if count == k:
            answer = root.val
            return
        helper(root.right)

    helper(root)
    return answer
```

Time: O(n)

Space: O(h), h = tree height
