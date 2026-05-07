## title

Best Time to Buy and Sell Stock II (Medium)

## question

<a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description" target="_blank">Best Time to Buy and Sell Stock II</a> (Medium)

You are given an integer array `prices` where `prices[i]` is the price of a given stock on the `i`<sup>th</sup> day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1)
def maxProfit(prices: List[int]) -> int:
    answer = 0
    i = 1

    while i < len(prices):
        # Buy at valley
        while i < len(prices) and prices[i] <= prices[i - 1]:
            i += 1
        buy = prices[i - 1]
        # Sell at peak
        while i < len(prices) and prices[i] >= prices[i - 1]:
            i += 1
        sell = prices[i - 1]
        answer += sell - buy

    return answer
```
