**question**

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

**answer**

```py
# Time complexity: O(log n)
# Space complexity: O(1)
def searchInsert(nums: List[int], target: int) -> int:
    start, end = 0, len(nums) - 1

    while start <= end:
        mid = (start + end) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] > target:
            end = mid - 1
        else:
            start = mid + 1

    # Start will be equivalent to mid or mid + 1 for insert position
    return start
```

<a href="https://leetcode.com/problems/search-insert-position/description" target="_blank">35. Search Insert Position</a>
