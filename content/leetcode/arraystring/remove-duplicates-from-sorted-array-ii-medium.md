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
def removeDuplicates(nums: List[int]) -> int:
    k = 2

    # k = index of next duplicate to be replaced
    for n in range(2, len(nums)):
        if nums[n] > nums[k - 2]:
            nums[k] = nums[n]
            k += 1

    return k
```

Time: O(n)

Space: O(1)
