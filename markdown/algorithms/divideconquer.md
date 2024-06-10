**question**

Convert a sorted array into a height-balanced binary search tree

**answer**

```py
class Node:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Time complexity: O(n)
# Space complexity: O(log n) if excluding final result tree
def sortedArrayToBST(nums: List[int]):
    mid = len(nums) // 2
    root = Node(nums[mid])
    root.left = helper(nums, 0, mid - 1)
    root.right = helper(nums, mid + 1, len(nums) - 1)
    return root

def helper(nums, start, end):
    if start > end:
        return None

    mid = (start + end) // 2
    node = Node(nums[mid])
    node.left = helper(nums, start, mid - 1)
    node.right = helper(nums, mid + 1, end)
    return node
```

<a href="https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description" target="_blank">108. Convert Sorted Array to Binary Search Tree</a>
