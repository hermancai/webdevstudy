**question**

Maximum subarray: find the largest sum of contiguous integers in an array

**answer**

```py
# Kadane's algorithm
# Time complexity: O(n)
# Space complexity: O(1)
def maxSubarray(nums: List[int]) -> int:
    bestSum = currentSum = 0
    for x in nums:
        # If x is low enough to make the current sum negative,
        # expanding the current subarray is useless.
        # Reset to 0 for new subarray.
        currentSum = max(0, currentSum + x)
        bestSum = max(bestSum, currentSum)
    return bestSum
```

<a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description" target="_blank">121. Best Time to Buy and Sell Stock</a>
