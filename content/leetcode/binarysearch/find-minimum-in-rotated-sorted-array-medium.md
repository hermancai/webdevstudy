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
def findMin(nums: List[int]) -> int:
    left, right = 0, len(nums) - 1

    # Exit loop when left == right
    while left < right:
        mid = (left + right) // 2

        # The rotated start is on the right side
        if nums[mid] > nums[right]:
            # Skip mid since it cannot be the answer
            left = mid + 1
        else:
            right = mid

    return nums[left]
```

Time: O(log n)

Space: O(1)

<br />

Alternative answer:

```py
def findMin(nums: List[int]) -> int:
    left, right = 0, len(nums) - 1

    # Exit loop when left == right
    while left < right:
        # Early check: range is sorted
        if nums[left] < nums[right]:
            return nums[left]

        mid = (left + right) // 2

        # The rotated start is on the left side -> go left
        if nums[left] > nums[mid]:
            # Cannot skip mid, which could be answer
            right = mid
        # The left side is sorted -> go right
        # This is bad if the entire range is sorted
        else:
            left = mid + 1

    return nums[left]
```

Time: O(log n)

Space: O(1)
