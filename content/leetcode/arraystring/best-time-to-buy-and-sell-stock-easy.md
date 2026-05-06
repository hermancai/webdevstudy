## title

Best Time to Buy and Sell Stock (Easy)

## question

<a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description" target="_blank">Best Time to Buy and Sell Stock</a> (Easy)

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`<sup>th</sup> day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1)
def maxProfit(prices: List[int]) -> int:
    profit = 0
    minPrice = prices[0]

    for i in range(1, len(prices)):
        profit = max(profit, prices[i] - minPrice)
        minPrice = min(minPrice, prices[i])

    return profit
```

This problem is similar to finding a maximum subarray.

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
