**question**

<a href="https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description" target="_blank">Convert Sorted Array to Binary Search Tree</a> (Easy)

Given an integer array `nums` where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

```py
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(log(n)) excluding output
def sortedArrayToBST(nums: List[int]) -> Optional[TreeNode]:
    return helper(nums, 0, len(nums) - 1)

def helper(nums, start, end):
    if start > end: return None

    mid = (start + end) // 2
    node = TreeNode(nums[mid])
    node.left = helper(nums, start, mid - 1)
    node.right = helper(nums, mid + 1, end)
    return node
```

**question**

<a href="https://leetcode.com/problems/sort-list/description" target="_blank">Sort List</a> (Medium)

Given the `head` of a linked list, return the list after sorting it in ascending order.

```py
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
```

**answer**

```py
# Time complexity: O(n * log(n))
# Space complexity: O(1)
def sortList(head: Optional[ListNode]) -> Optional[ListNode]:
    if not head: return head

    dummy = ListNode(0, head)
    length = getLength(head)
    step = 1
    while length > step:
        curr = dummy.next
        tail = dummy
        # Process entire list, merging sections of step length
        # Example:
        #   list = 4 -> 2 -> 1 -> 3; step = 1
        #   left = 4; right = 2. Merge into 2 -> 4
        #   left = 1; right = 3. Merge into 1 -> 3
        #   Reached end of list. Increase step
        #   list = 2 -> 4 -> 1 -> 3; step = 2
        #   left = 2 -> 4; right = 1 -> 3. Merge into 1 -> 2 -> 3 -> 4
        while curr:
            left = curr
            right = split(left, step)  # right points to node after left's tail
            curr = split(right, step)  # curr points to node after right's tail
            tail = merge(left, right, tail)  # tail points to end of merged list
        step *= 2
    return dummy.next

def getLength(head: Optional[ListNode]) -> int:
    count = 0
    while head:
        count += 1
        head = head.next
    return count

# Given head node, skip step nodes, cut at tail, return tail.next
def split(head: Optional[ListNode], step: int):
    # (step - 1) because prev node is needed to cut at tail
    for _ in range(step - 1):
        if head:
            head = head.next

    # In case steps reach end of original list
    if not head: return None

    cutoff = head.next
    head.next = None
    return cutoff

# Merge two sorted lists, append to head, return tail of new list
def merge(a, b, head) -> Optional[ListNode]:
    curr = head
    while a and b:
        if a.val < b.val:
            curr.next = a
            a = a.next
        else:
            curr.next = b
            b = b.next
        curr = curr.next

    curr.next = a or b
    while curr.next:
        curr = curr.next
    return curr
```

Alternative solution:

```py
# Time complexity: O(n * log(n))
# Space complexity: O(log(n))
def sortList(head: Optional[ListNode]) -> Optional[ListNode]:
    if not head or not head.next:
        return head

    # prev is needed to split list. Consider a list of length 2
    prev = slow = fast = head
    while fast and fast.next:
        prev = slow
        slow = slow.next
        fast = fast.next.next
    prev.next = None

    # Recurse until lists are length 1
    left = sortList(head)
    right = sortList(slow)
    return merge(left, right)

def merge(a, b) -> Optional[ListNode]:
    dummy = curr = ListNode()
    while a and b:
        if a.val < b.val:
            curr.next = a
            a = a.next
        else:
            curr.next = b
            b = b.next
        curr = curr.next

    curr.next = a or b
    return dummy.next
```

**question**

<a href="https://leetcode.com/problems/construct-quad-tree/description" target="_blank">Construct Quad Tree</a> (Medium)

Given a `n * n` matrix `grid` of `0's` and `1's` only, represent `grid` with a Quad-Tree.

Return the root of the Quad-Tree representing `grid`.

A Quad-Tree is a tree data structure in which each internal node has exactly four children. Each node has two attributes:

-   `val`: `True` if the node represents a grid of `1's` or `False` if the node represents a grid of `0's`.
-   `isLeaf`: `True` if the node is a leaf node on the tree or `False` if the node has four children.

```py
# Definition for a QuadTree node.
class Node:
    def __init__(self, val, isLeaf, topLeft, topRight, bottomLeft, bottomRight):
        self.val = val
        self.isLeaf = isLeaf
        self.topLeft = topLeft
        self.topRight = topRight
        self.bottomLeft = bottomLeft
        self.bottomRight = bottomRight
```

Construct a Quad-Tree from a two-dimensional area using the following steps:

-   If the current grid has the same value (i.e all `1's` or all `0's`), set `isLeaf` `True` and set `val` to the value of the grid and set the four children to `Null` and stop.
-   If the current grid has different values, set `isLeaf` to `False` and set `val` to any value and divide the current grid into four sub-grids.
-   Recurse for each of the children with the proper sub-grid.

**answer**

```py
# Time complexity: O(n^2)
# Space complexity: O(n^2)
def construct(grid: List[List[int]]) -> 'Node':
    return helper(grid, 0, len(grid) - 1, 0, len(grid) - 1)

def helper(grid, rowStart, rowEnd, colStart, colEnd) -> 'Node':
    # Reached a single element grid
    if rowEnd == rowStart:
        return Node(grid[rowStart][colStart], True, None, None, None, None)

    # Indices for recursing into smaller grids
    topRowEnd = (rowStart + rowEnd) // 2
    leftColEnd = (colStart + colEnd) // 2

    node = Node(False, False, None, None, None, None)
    topLeft = helper(grid, rowStart, topRowEnd, colStart, leftColEnd)
    topRight = helper(grid, rowStart, topRowEnd, leftColEnd + 1, colEnd)
    bottomLeft = helper(grid, topRowEnd + 1, rowEnd, colStart, leftColEnd)
    bottomRight = helper(grid, topRowEnd + 1, rowEnd, leftColEnd + 1, colEnd)

    # Condition for current node to be leaf:
    #   All children are leaves and have same val
    isLeaf = (
        (topLeft.isLeaf and topRight.isLeaf and bottomLeft.isLeaf and bottomRight.isLeaf) and
        (topLeft.val == topRight.val == bottomLeft.val == bottomRight.val)
    )

    if isLeaf:
        node.isLeaf = True
        node.val = topLeft.val
    else:
        node.topLeft = topLeft
        node.topRight = topRight
        node.bottomLeft = bottomLeft
        node.bottomRight = bottomRight
    return node
```
