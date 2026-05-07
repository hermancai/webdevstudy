## title

Remove Duplicates from Sorted Array (Easy)

## question

<a href="https://leetcode.com/problems/remove-duplicates-from-sorted-array/description" target="_blank">Remove Duplicates from Sorted Array</a> (Easy)

Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in `nums`.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1)
def removeDuplicates(nums: List[int]) -> int:
    finalIndex = 1

    for i in range(1, len(nums)):
        # If not duplicate, place current integer at nums[finalIndex]
        if nums[i] > nums[i - 1]:
            nums[finalIndex] = nums[i]
            finalIndex += 1
    return finalIndex
```
