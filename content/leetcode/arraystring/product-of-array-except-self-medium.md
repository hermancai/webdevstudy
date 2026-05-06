## title

Product of Array Except Self (Medium)

## question

<a href="https://leetcode.com/problems/product-of-array-except-self/description" target="_blank">Product of Array Except Self</a> (Medium)

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

Write an algorithm that runs in `O(n)` time and without using the division operation.

## answer

Solution logic:

- The answer can be derived by creating two arrays: `prefix` and `suffix`.
- `prefix[i]` contains the product of all elements before `i`.
- `suffix[i]` contains the product of all elements after `i`.
- `answer[i] = prefix[i] * suffix[i]`
- Space can be optimized by using the `answer` array to build both `prefix` and `suffix`.
- Iterate normally through `answer` while keeping track of a prefix total.
- Then iterate backwards while keeping track of a suffix total.

```py
# Time complexity: O(n)
# Space complexity: O(1) excluding output
def productExceptSelf(nums: List[int]) -> List[int]:
    answer = [1 for _ in nums]

    product = 1
    for i in range(len(nums)):
        answer[i] *= product
        product *= nums[i]

    product = 1
    for i in range(len(nums) -  1, -1, -1):
        answer[i] *= product
        product *= nums[i]

    return answer
```
