## title

Maximum Sum Circular Subarray (Medium)

## question

<a href="https://leetcode.com/problems/maximum-sum-circular-subarray/description" target="_blank">Maximum Sum Circular Subarray</a> (Medium)

Given a circular integer array `nums` of length `n`, return the maximum possible sum of a non-empty subarray of `nums`.

A circular array means the end of the array connects to the beginning of the array. Formally, the next element of `nums[i]` is `nums[(i + 1) % n]` and the previous element of `nums[i]` is `nums[(i - 1 + n) % n]`.

A subarray may only include each element of the fixed buffer `nums` at most once. Formally, for a subarray `nums[i], nums[i + 1], ..., nums[j]`, there does not exist `i <= k1`, `k2 <= j` with `k1 % n == k2 % n`.

## answer

```py
def maxSubarraySumCircular(nums: List[int]) -> int:
    # Get contiguous mininum AND maximum subarrays for non-circular nums
    # If the answer is contiguous, then the answer was found
    #   Otherwise, the answer is wrapping:
    #   total = minSum + wrapped max sum ---> wrapped max sum = total - minSum
    #   Note that this equation only applies because nums is circular
    total = 0
    currMin = minSum = float("inf")
    currMax = maxSum = float("-inf")

    for num in nums:
        total += num

        currMin = min(currMin + num, num)
        minSum = min(minSum, currMin)

        currMax = max(currMax + num, num)
        maxSum = max(maxSum, currMax)

    # Edge case: If all nums are negative: (total - minSum == 0) and (maxSum < 0)
    if maxSum <= 0:
        return maxSum

    return max(maxSum, total - minSum)
```

Time: O(n)

Space: O(1)
