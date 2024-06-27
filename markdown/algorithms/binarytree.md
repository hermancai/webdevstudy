**question**

Binary Tree

**answer**

```py
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

Preorder traversal

-   Process node -> traverse left subtree -> traverse right subtree
-   Used to create a copy of the tree

Inorder traversal

-   Traverse left subtree -> process node -> traverse right subtree
-   Used to get sorted values in a binary search tree

Postorder traversal

-   Traverse left subtree -> traverse right subtree -> process node
-   Used to delete a tree starting from leaves to root

**question**

<a href="https://leetcode.com/problems/maximum-depth-of-binary-tree/description" target="_blank">Maximum Depth of Binary Tree</a> (Easy)

Given the `root` of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

**answer**

```py
# Time complexity: O(n), n = number of nodes
# Space complexity: O(h), h = height of tree
def maxDepth(root: Optional[TreeNode]) -> int:
    if not root:
        return 0

    left = self.maxDepth(root.left) + 1
    right = self.maxDepth(root.right) + 1

    return max(left, right)
```

**question**

<a href="https://leetcode.com/problems/same-tree/description" target="_blank">Same Tree</a> (Easy)

Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

**answer**

```py
# Time complexity: O(n), n = number of nodes
# Space complexity: O(h), h = height of tree
def isSameTree(p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
    if not p and not q: return True
    if not p or not q: return False
    if p.val != q.val: return False

    left = self.isSameTree(p.left, q.left)
    if not left: return False
    right = self.isSameTree(p.right, q.right)
    if not right: return False

    return p.val == q.val
```

**question**

<a href="https://leetcode.com/problems/invert-binary-tree/description" target="_blank">Invert Binary Tree</a> (Easy)

Given the `root` of a binary tree, invert the tree, and return its root.

**answer**

Recursive:

```py
# Time complexity: O(n), n = number of nodes
# Space complexity: O(h), h = height of tree
def invertTree(root: Node) -> Node:
    if not root:
        return root

    left = self.invertTree(root.left)
    right = self.invertTree(root.right)
    root.left, root.right = root.right, root.left
    return root
```

Iterative:

```py
from collections import deque

# Time complexity: O(n)
# Space complexity: O(n)
def invertTree(root: Node) -> Node:
    if not root: return root

    q = deque()
    q.append(root)

    while q:
        node = q.popleft()
        node.left, node.right = node.right, node.left
        if node.left:
            q.append(node.left)
        if node.right:
            q.append(node.right)
    return root
```

**question**

<a href="https://leetcode.com/problems/symmetric-tree/description" target="_blank">Symmetric Tree</a> (Easy)

Given the `root` of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

**answer**

Recursive:

```py
def isSymmetric(root: Node) -> bool:
    if not root: return False
    return helper(root.left, root.right)

# Time complexity: O(n), n = number of nodes
# Space complexity: O(h), h = height of tree
def helper(left, right) -> bool:
    if not left and not right: return True
    if not left or not right: return False
    if left.val != right.val: return False

    outer = helper(left.left, right.right)
    inner = helper(left.right, right.left)
    return outer and inner
```

Iterative:

```py
from collections import deque

# Time complexity: O(n)
# Space complexity: O(n)
def isSymmetric(root:Node) -> bool:
    if not root: return False

    q = deque()
    q.append(root.left)
    q.append(root.right)

    while q:
        left = q.popleft()
        right = q.popleft()
        if not left and not right: continue
        if not left or not right: return False
        if left.val != right.val: return False
        q.append(left.left)
        q.append(right.right)
        q.append(left.right)
        q.append(right.left)
    return True
```

**question**

<a href="https://leetcode.com/problems/path-sum/description" target="_blank">Path Sum</a> (Easy)

Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a root-to-leaf path such that adding up all the values along the path equals `targetSum`.

A leaf is a node with no children.

**answer**

```py
def hasPathSum(root: Optional[TreeNode], targetSum: int) -> bool:
    return self.helper(root, 0, targetSum)

# Time complexity: O(n), n = number of nodes
# Space complexity: O(h), h = height of tree
def helper(root, total, targetSum):
    if not root: return False
    if not root.left and not root.right:
        return total + root.val == targetSum

    left = self.helper(root.left, total + root.val, targetSum)
    if left: return True

    right = self.helper(root.right, total + root.val, targetSum)
    return right
```

**question**

<a href="https://leetcode.com/problems/count-complete-tree-nodes/description" target="_blank">Count Complete Tree Nodes</a> (Easy)

Given the `root` of a complete binary tree, return the number of the nodes in the tree.

In a complete binary tree, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2<sup>h</sup> nodes inclusive at the last level `h`.

Design an algorithm that runs in less than `O(n)` time complexity.

**answer**

```py
# Time complexity: O((log n)^2)
# Space complexity: O(h), h = height of tree
def getHeight(root) -> int:
    if not root: return 0
    return getHeight(root.left) + 1

def countNodes(root) -> int:
    if not root: return 0

    left = getHeight(root.left)
    right = getHeight(root.right)

    # Equal height means left subtree is perfect binary tree
    if left == right:
        return countNodes(root.right) + 2**left
    # Else the right subtree is perfect binary tree
    else:
        return countNodes(root.left) + 2**right
```

**question**

<a href="https://leetcode.com/problems/average-of-levels-in-binary-tree/description" target="_blank">Average of Levels in Binary Tree</a> (Easy)

Given the `root` of a binary tree, return the average value of the nodes on each level in the form of an array.

**answer**

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

**question**

<a href="https://leetcode.com/problems/minimum-absolute-difference-in-bst/description" target="_blank">Minimum Absolute Difference in BST</a> (Easy)

Given the `root` of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

**answer**

```py
# Inorder traversal using global variable to track answer
# Time complexity: O(n), n = number of nodes
# Space complexity: O(h), h = height of tree
class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        self.answer = float("inf")
        self.prev = None

        def inorder(root):
            if not root: return
            inorder(root.left)
            if self.prev != None:
                self.answer = min(self.answer, root.val - self.prev)
            self.prev = root.val
            inorder(root.right)

        inorder(root)
        return self.answer
```
