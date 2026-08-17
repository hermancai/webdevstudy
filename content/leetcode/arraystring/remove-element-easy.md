## title

Remove Element (Easy)

## question

<a href="https://leetcode.com/problems/remove-element/description" target="_blank">Remove Element</a> (Easy)

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` in-place. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.

<br />

Consider the number of elements in `nums` which are not equal to `val` be `k`. Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`. The remaining elements of `nums` are not important as well as the size of `nums`. Return `k`.

## answer

```py
def removeElement(nums: List[int], val: int) -> int:
    k = 0

    # Swap all non-vals to nums[k]
    for i in range(len(nums)):
        if nums[i] != val:
            nums[i], nums[k] = nums[k], nums[i]
            k += 1

    return k
```

Time: O(n)

Space: O(1)
