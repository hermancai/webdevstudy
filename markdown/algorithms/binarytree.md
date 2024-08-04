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

**question**

<a href="https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description" target="_blank">Construct Binary Tree from Preorder and Inorder Traversal</a> (Medium)

Given two integer arrays `preorder` and `inorder` where `preorder` is the preorder traversal of a binary tree and `inorder` is the inorder traversal of the same tree, construct and return the binary tree.

`preorder` and `inorder` consist of unique values.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(n)
def buildTree(preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
    # Convert inorder to map with indices
    m = {}
    for i in range(len(inorder)):
        m[inorder[i]] = i

    return build(preorder, m, 0, 0, len(inorder) - 1)

# p: index of current node in preorder
# l: starting index of subtree in inorder
# r: ending index of subtree in inorder
def build(preorder, inorder, p, l, r) -> Optional[TreeNode]:
    if p >= len(preorder) or l > r:
        return None

    # Position of current node in inorder
    inIdx = inorder[preorder[p]]

    node = TreeNode(preorder[p])
    # In preorder, left child of node is always next
    node.left = build(preorder, inorder, p + 1, l, inIdx - 1)

    # In inorder, left subtree size == length of left subarray == inIdx - l
    # To get index of right child in preorder, skip length of left subarray + 1
    node.right = build(preorder, inorder, p + inIdx - l + 1, inIdx + 1, r)
    return node
```

**question**

<a href="https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description" target="_blank">Construct Binary Tree from Inorder and Postorder Traversal</a> (Medium)

Given two integer arrays `inorder` and `postorder` where `inorder` is the inorder traversal of a binary tree and `postorder` is the postorder traversal of the same tree, construct and return the binary tree.

**answer**

The solution is similar to "Construct Binary Tree from Preorder and Inorder Traversal". Notice that the output of postorder traversal is similar to preorder traversal, except postorder starts with right subtrees and the output is reversed.

```py
# Time complexity: O(n)
# Space complexity: O(n)
def buildTree(inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
    # Convert inorder to map with indices
    m = {}
    for i in range(len(inorder)):
        m[inorder[i]] = i

    return build(m, postorder, len(postorder) - 1, 0, len(inorder) - 1)

# p: index of current node in postorder
# l: starting index of subtree in inorder
# r: ending index of subtree in inorder
def build(inorder, postorder, p, l, r):
    if p < 0 or l > r:
        return None

    # Position of current node in inorder
    inIdx = inorder[postorder[p]]

    node = TreeNode(postorder[p])
    # In postorder, right child of node is always before
    node.right = build(inorder, postorder, p - 1, inIdx + 1, r)

    # In inorder, right subtree size == length of right subarray == r - inIdx
    # To get index of left child in postorder, skip length of right subarray + 1
    node.left = build(inorder, postorder, p - (r - inIdx + 1), l, inIdx - 1)
    return node
```

**question**

<a href="https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/description" target="_blank">Populating Next Right Pointers in Each Node II</a> (Medium)

Given a binary tree with nodes:

```py
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
```

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to `NULL`.

Initially, all next pointers are set to `NULL`.

Write a solution that uses constant space. Recursion using implicit stack space is fine.

**answer**

Solution logic:

-   You are essentially trying to create a linked list for each level in the binary tree using the custom nodes.
-   After building a linked list for one level, that list can be used to build a list for the next level, and so on.

```py
# Time complexity: O(n)
# Space complexity: O(1)
def connect(root: 'Node') -> 'Node':
    # levelDummy will be the head of each level's linked list
    levelDummy = curr = Node()
    originalRoot = root

    while root:
        # Build list for next level, using completed previous level list
        if root.left:
            curr.next = root.left
            curr = curr.next
        if root.right:
            curr.next = root.right
            curr = curr.next
        root = root.next

        # Reached end of previous level list
        if not root:
            # Move on to next level
            # levelDummy.next points to head of newly completed list
            root = levelDummy.next
            # Reset dummy pointers
            curr = levelDummy
            levelDummy.next = None

    return originalRoot
```

**question**

<a href="https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description" target="_blank">Flatten Binary Tree to Linked List</a> (Medium)

Given the `root` of a binary tree, flatten the tree into a "linked list":

-   The "linked list" should use the same `TreeNode` class where the `right` child pointer points to the next node in the list and the `left` child pointer is always `null`.
-   The "linked list" should be in the same order as a pre-order traversal of the binary tree.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(h) where h = height of tree
def flatten(root: Optional[TreeNode]) -> None:
    return helper(root, None)

# Preorder traversal == reversed postorder starting with right subtrees
# Preorder cannot be used here because left pointers get overwritten
# Build list starting from tail with postorder starting with right subtrees
def helper(curr, prev):
    if not curr:
        return prev

    # To understanding this solution, keep track of what prev points to
    prev = helper(curr.right, prev)
    # prev can potentially point to a node from a far subtree
    prev = helper(curr.left, prev)

    # prev now points to the node after curr in preorder traversal
    curr.right = prev
    curr.left = None
    return curr
```

**question**

<a href="https://leetcode.com/problems/sum-root-to-leaf-numbers/description" target="_blank">Sum Root to Leaf Numbers</a> (Medium)

You are given the `root` of a binary tree containing digits from `0` to `9` only.

Each root-to-leaf path in the tree represents a number. For example, the root-to-leaf path `1 -> 2 -> 3` represents the number `123`.

Return the total sum of all root-to-leaf numbers. A leaf node is a node with no children.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(h) where h = height of tree
def sumNumbers(root: Optional[TreeNode]) -> int:
    return helper(root, 0)

def helper(node: Optional[TreeNode], currVal: int) -> int:
    if not node:
        return 0

    currVal = currVal * 10 + node.val

    if not node.left and not node.right:
        return currVal

    left = helper(node.left, currVal)
    right = helper(node.right, currVal)
    return left + right
```

**question**

<a href="https://leetcode.com/problems/binary-search-tree-iterator/description" target="_blank">Binary Search Tree Iterator</a> (Medium)

Implement the `BSTIterator` class that represents an iterator over the in-order traversal of a binary search tree (BST):

-   `BSTIterator(TreeNode root)` Initializes an object of the `BSTIterator` class. The `root` of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.
-   `boolean hasNext()` Returns `true` if there exists a number in the traversal to the right of the pointer, otherwise returns `false`.
-   `int next()` Moves the pointer to the right, then returns the number at the pointer.

Notice that by initializing the pointer to a non-existent smallest number, the first call to `next()` will return the smallest element in the BST.

You may assume that `next()` calls will always be valid. That is, there will be at least a next number in the in-order traversal when `next()` is called.

Implement `next()` and `hasNext()` to run in average `O(1)` time and use `O(h)` memory, where `h` is the height of the tree.

**answer**

```py
# Time complexity: average O(1)
# Space complexity: O(h) where h = height of tree
class BSTIterator:
    # This solution is essentially iterative inorder traversal.
    def __init__(self, root: Optional[TreeNode]):
        self.stack = []
        # The stack will be filled with all lefts nodes of the current node,
        #   similar to recursive inorder traversal.
        self.appendLeftNodes(root)

    def next(self) -> int:
        node = self.stack.pop()
        if node.right:
            self.appendLeftNodes(node.right)
        return node.val

    def hasNext(self) -> bool:
        return len(self.stack) > 0

    def appendLeftNodes(self, root: Optional[TreeNode]) -> None:
        # The while loop will run at most n times.
        # If next() is called n times, the average time complexity is O(1).
        while root:
            self.stack.append(root)
            root = root.left
```

**question**

<a href="https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description" target="_blank">Lowest Common Ancestor of a Binary Tree</a> (Medium)

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow a node to be a descendant of itself).

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(h) where h = height of tree
def lowestCommonAncestor(root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
    # Return if p/q is found without searching deeper
    #   because LCA cannot be in a lower level
    if not root or root == p or root == q:
        return root

    # Search whole tree for p and q
    # If p/q is not in left/right, left/right = None
    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)

    # LCA is immediate parent when p and q are both found
    if left and right:
        return root

    # When LCA is found, it will be carried up the stack
    #   because either left or right would be None
    return left or right
```

**question**

<a href="https://leetcode.com/problems/binary-tree-right-side-view/description" target="_blank">Binary Tree Right Side View</a> (Medium)

Given the `root` of a binary tree, imagine yourself standing on the right side of it, and return the values of the nodes you can see ordered from top to bottom.

**answer**

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

**question**

<a href="https://leetcode.com/problems/binary-tree-level-order-traversal/description" target="_blank">Binary Tree Level Order Traversal</a> (Medium)

Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

**answer**

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

**question**

<a href="https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description" target="_blank">Binary Tree Zigzag Level Order Traversal</a> (Medium)

Given the `root` of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

**answer**

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

**question**

<a href="https://leetcode.com/problems/kth-smallest-element-in-a-bst/description" target="_blank">Kth Smallest Element in a BST</a> (Medium)

Given the `root` of a binary search tree, and an integer `k`, return the `k`<sup>th</sup> smallest value (1-indexed) of all the values of the nodes in the tree.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(h) where h = height of tree
def kthSmallest(root: Optional[TreeNode], k: int) -> int:
    # Simulate global variables in list. vals[1] will contain answer
    vals = [k, 0]
    helper(root, vals)
    return vals[1]

# Recursive inorder traversal
def helper(node: Optional[TreeNode], vals: List[int]) -> None:
    if not node or vals[0] < 0:
        return

    helper(node.left, vals)

    vals[0] -= 1
    if vals[0] == 0:
        vals[1] = node.val

    helper(node.right, vals)
```

Alternative solution:

```py
# Time complexity: O(n)
# Space complexity: O(n)
# Iterative inorder traversal
def kthSmallest(root: Optional[TreeNode], k: int) -> int:
    stack = []

    while root or stack:
        while root:
            stack.append(root)
            root = root.left

        root = stack.pop()
        k -= 1
        if k == 0:
            return root.val
        root = root.right
    return -1
```

**question**

<a href="https://leetcode.com/problems/validate-binary-search-tree/description" target="_blank">Validate Binary Search Tree</a> (Medium)

Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

-   The left subtree of a node contains only nodes with keys less than the node's key.
-   The right subtree of a node contains only nodes with keys greater than the node's key.
-   Both the left and right subtrees must also be binary search trees.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(n)
# Iterative inorder traversal while tracking previous node
def isValidBST(root: Optional[TreeNode]) -> bool:
    stack = []
    prev = None

    while root or stack:
        while root:
            stack.append(root)
            root = root.left

        root = stack.pop()
        # Previous value must be less than current in inorder traversal of valid BST
        if prev and root.val <= prev.val:
            return False

        prev = root
        root = root.right
    return True
```

Alternative solution:

```py
# Time complexity: O(n)
# Space complexity: O(h) where h = height of tree
def isValidBST(root: Optional[TreeNode]) -> bool:
    return helper(root, float("-inf"), float("inf"))

# Recursive inorder traversal
# Keep track of valid range for current value
def helper(node: Optional[TreeNode], minV, maxV) -> bool:
    if not node:
        return True

    if node.val <= minV or node.val >= maxV:
        return False

    left = helper(node.left, minV, node.val)
    if not left:
        return False

    right = helper(node.right, node.val, maxV)

    return left and right
```
