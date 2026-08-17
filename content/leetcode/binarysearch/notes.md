## title

Notes

## question

Notes

## answer

```py
# For finding an exact value (Is mid the answer?)
def binarySearch1(nums, target):
    left, right = 0, len(nums) - 1

    # Use <= because mid is always discarded
    while left <= right:
        mid = (left + right) // 2

        if nums[mid] == target:
            return mid

        if nums[mid] > target:
            right = mid - 1
        else:
            left = mid + 1

    return -1

# For shrinking boundaries (Is mid a valid first answer?)
def binarySearch2(nums, target):
    left, right = 0, len(nums) - 1

    # Use < because mid may be kept
    while left < right:
        mid = (left + right) // 2

        if nums[mid] >= target:
            right = mid
        else:
            left = mid + 1

    if nums[left] == target:
        return left
    return -1
```

Time: O(log n)

Space: O(1)
