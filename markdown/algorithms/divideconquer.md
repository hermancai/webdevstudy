**question**

<a href="https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description" target="_blank">Convert Sorted Array to Binary Search Tree</a>

Given an integer array `nums` where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

**answer**

```py
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Time complexity: O(n)
# Space complexity: O(log n) excluding output
def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
    return self.helper(nums, 0, len(nums) - 1)

def helper(self, nums, start, end):
    if start > end: return None

    mid = (start + end) // 2
    node = TreeNode(nums[mid])
    node.left = self.helper(nums, start, mid - 1)
    node.right = self.helper(nums, mid + 1, end)
    return node
```
