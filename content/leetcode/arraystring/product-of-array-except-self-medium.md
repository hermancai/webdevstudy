## title

Product of Array Except Self (Medium)

## question

<a href="https://leetcode.com/problems/product-of-array-except-self/description" target="_blank">Product of Array Except Self</a> (Medium)

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

Write an algorithm that runs in `O(n)` time and without using the division operation.

## answer

```py
def productExceptSelf(nums: List[int]) -> List[int]:
    answer = [1] * len(nums)

    # Build prefix (product from left side of element)
    prefix = 1
    for i in range(len(nums)):
        answer[i] = prefix
        prefix *= nums[i]

    # Build suffix and multiply with prefix
    suffix = 1
    for i in range(len(nums) - 1, -1, -1):
        answer[i] *= suffix
        suffix *= nums[i]

    return answer
```

Time: O(n)

Space: O(1) excluding output
