## title

Maximum Sum Circular Subarray (Medium)

## question

<a href="https://leetcode.com/problems/maximum-sum-circular-subarray/description" target="_blank">Maximum Sum Circular Subarray</a> (Medium)

Given a circular integer array `nums` of length `n`, return the maximum possible sum of a non-empty subarray of `nums`.

A circular array means the end of the array connects to the beginning of the array. Formally, the next element of `nums[i]` is `nums[(i + 1) % n]` and the previous element of `nums[i]` is `nums[(i - 1 + n) % n]`.

A subarray may only include each element of the fixed buffer `nums` at most once. Formally, for a subarray `nums[i], nums[i + 1], ..., nums[j]`, there does not exist `i <= k1`, `k2 <= j` with `k1 % n == k2 % n`.

## answer

Solution logic:

- The maximum sum subarray is either contiguous or wraps around the circular array.
- Find the potentially contiguous subarray using Kadane's algorithm.
- To find the wrapping subarray, get the contiguous minimum sum and subtract from the array total sum.
    - total = min array + max array --> max array = total - min array
- Note that only computing (total - min array) is not enough to find the maximum sum subarray. If the maximum sum subarray is contiguous, the minimum sum subarray wraps and will not be found by Kadane's algorithm.

```py
# Time complexity: O(n)
# Space complexity: O(1)
def maxSubarraySumCircular(nums: List[int]) -> int:
    total = 0
    maxSum = minSum = nums[0]
    currMax = currMin = 0

    # Use Kadane's algorithm to get both minimum and maximum sum subarrays
    for n in nums:
        total += n

        currMax = max(n, currMax + n)
        maxSum = max(maxSum, currMax)

        currMin = min(n, currMin + n)
        minSum = min(minSum, currMin)

    # Edge case: If all ints are negative, (total - minSum) == 0
    #   and maxSum will be negative, resulting in a return of 0
    if maxSum <= 0:
        return maxSum
    return max(maxSum, total - minSum)
```
