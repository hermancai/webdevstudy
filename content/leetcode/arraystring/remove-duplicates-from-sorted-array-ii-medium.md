## title

Remove Duplicates from Sorted Array II (Medium)

## question

<a href="https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description" target="_blank">Remove Duplicates from Sorted Array II</a> (Medium)

Given an integer array `nums` sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

If there are `k` elements after removing the duplicates, then the first `k` elements of `nums` should hold the final result. It does not matter what you leave beyond the first `k` elements.

Return `k` after placing the final result in the first `k` slots of `nums`.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1)
def removeDuplicates(nums: List[int]) -> int:
    i = 0

    # Ignore first two elements
    # i essentially tracks the next duplicate for replacing
    # If current integer is valid, place in nums[i]
    for n in range(len(nums)):
        if i < 2 or nums[n] > nums[i - 2]:
            nums[i] = nums[n]
            i += 1
    return i
```
