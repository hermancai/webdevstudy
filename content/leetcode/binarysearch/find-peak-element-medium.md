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
def findPeakElement(nums: List[int]) -> int:
    # Check boundaries now and ignore later
    if len(nums) == 1 or nums[0] > nums[1]:
        return 0
    if nums[-1] > nums[-2]:
        return len(nums) - 1

    left, right = 1, len(nums) - 2

    while left <= right:
        mid = (left + right) // 2
        prev, curr, nxt = nums[mid - 1], nums[mid], nums[mid + 1]
        if prev < curr > nxt:
            return mid
        # Peak is guaranteed to exist on side with larger num, given assumptions
        elif prev > curr:
            right = mid - 1
        else:
            left = mid + 1
```

Time: O(log n)

Space: O(1)
