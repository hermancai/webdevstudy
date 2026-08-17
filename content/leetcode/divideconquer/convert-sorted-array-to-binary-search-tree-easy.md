## title

Convert Sorted Array to Binary Search Tree (Easy)

## question

<a href="https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description" target="_blank">Convert Sorted Array to Binary Search Tree</a> (Easy)

Given an integer array `nums` where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

```py
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

## answer

```py
def sortedArrayToBST(nums: List[int]) -> Optional[TreeNode]:
    def helper(left, right):
        if left > right:
            return None

        mid = (left + right) // 2
        node = TreeNode(nums[mid])
        node.left = helper(left, mid - 1)
        node.right = helper(mid + 1, right)
        return node

    return helper(0, len(nums) - 1)
```

Time: O(n)

Space: O(n) or O(log n) excluding output
