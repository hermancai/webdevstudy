## title

Remove Duplicates from Sorted Array (Easy)

## question

<a href="https://leetcode.com/problems/remove-duplicates-from-sorted-array/description" target="_blank">Remove Duplicates from Sorted Array</a> (Easy)

Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in `nums`.

<br />

Consider the number of unique elements in `nums` to be `k​​​​​​​​​​​​​​`. After removing duplicates, return the number of unique elements `k`.

## answer

```py
def removeDuplicates(nums: List[int]) -> int:
    k = 1

    # Slot into nums[k] if not duplicate
    for i in range(1, len(nums)):
        if nums[i] > nums[i - 1]:
            nums[k] = nums[i]
            k += 1

    return k
```

Time: O(n)

Space: O(1)
