## title

Merge Sorted Array (Easy)

## question

<a href="https://leetcode.com/problems/merge-sorted-array/description" target="_blank">Merge Sorted Array</a> (Easy)

You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1)
def merge(nums1: List[int], m: int, nums2: List[int], n: int) -> None:
    i = m + n - 1
    i1 = m - 1
    i2 = n - 1

    # Merge backwards in nums1 until nums2 is empty
    while i2 >= 0:
        if i1 >= 0 and nums1[i1] > nums2[i2]:
            nums1[i] = nums1[i1]
            i1 -= 1
        else:
            nums1[i] = nums2[i2]
            i2 -= 1
        i -= 1
```
