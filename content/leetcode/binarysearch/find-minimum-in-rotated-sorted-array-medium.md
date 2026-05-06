## title

Find Minimum in Rotated Sorted Array (Medium)

## question

<a href="https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description" target="_blank">Find Minimum in Rotated Sorted Array</a> (Medium)

Suppose an array of length `n` sorted in ascending order is rotated between `1` and `n` times. For example, the array `nums = [0,1,2,4,5,6,7]` might become:

- `[4,5,6,7,0,1,2]` if it was rotated `4` times.
- `[0,1,2,4,5,6,7]` if it was rotated `7` times.

Notice that rotating an array `[a[0], a[1], a[2], ..., a[n-1]]` 1 time results in the array `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.

Given the sorted rotated array `nums` of unique elements, return the minimum element of this array.

Write an algorithm that runs in `O(log n)` time.

## answer

```py
# Time complexity: O(log n)
# Space complexity: O(1)
def findMin(nums: List[int]) -> int:
    start, end = 0, len(nums) - 1

    while start < end:
        mid = (start + end) // 2
        # If right side is rotated, answer is in right side
        if nums[mid] > nums[end]:
            # nums[mid] cannot be the answer, so mid is safe to skip
            start = mid + 1
        else:
            end = mid
    return nums[start]

    # The following conditional does not work. If the left side is rotated,
    #   it is possible that nums[mid] is the answer

    # if nums[start] > nums[mid]:
    #     end = mid - 1
    # else:
    #     start = mid
```
