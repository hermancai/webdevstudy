## title

Remove Element (Easy)

## question

<a href="https://leetcode.com/problems/remove-element/description" target="_blank">Remove Element</a> (Easy)

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` in-place. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1)
def removeElement(nums: List[int], val: int) -> int:
    nonValIndex = 0

    # Swap values until all instances of target are at back of list
    for i in range(len(nums)):
        if nums[i] != val:
            nums[i], nums[nonValIndex] = nums[nonValIndex], nums[i]
            nonValIndex += 1
    return nonValIndex
```
