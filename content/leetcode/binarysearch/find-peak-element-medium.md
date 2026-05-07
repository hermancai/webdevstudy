## title

Find Peak Element (Medium)

## question

<a href="https://leetcode.com/problems/find-peak-element/description" target="_blank">Find Peak Element</a> (Medium)

A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array `nums`, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

Assume `nums[-1] = nums[n] = -∞`. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

Assume `nums[i] != nums[i + 1]` for all valid `i`.

Write an algorithm that runs in `O(log n)` time.

## answer

```py
# Time complexity: O(log n)
# Space complexity: O(1)
def findPeakElement(nums: List[int]) -> int:
    # Check ends of list now to prevent boundary checks later
    if len(nums) == 1 or nums[0] > nums[1]:
        return 0
    if nums[-1] > nums[-2]:
        return len(nums) - 1

    start, end = 1, len(nums) - 2
    while start <= end:
        mid = (start + end) // 2
        if nums[mid] > nums[mid - 1] and nums[mid] > nums[mid + 1]:
            return mid
        # A peak is guaranteed to exist on the side that is higher,
        #   either as a normal peak with two neighbors, or the end of the list.
        elif nums[mid] < nums[mid - 1]:
            end = mid - 1
        else:
            start = mid + 1
```
