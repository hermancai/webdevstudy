## title

Best Time to Buy and Sell Stock II (Medium)

## question

<a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description" target="_blank">Best Time to Buy and Sell Stock II</a> (Medium)

You are given an integer array `prices` where `prices[i]` is the price of a given stock on the `i`<sup>th</sup> day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

## answer

```py
def maxProfit(prices: List[int]) -> int:
    profit = 0
    buy = prices[0]

    # If positive profit, sell
    # Else update to new minimum buy price
    for price in prices:
        if price > buy:
            profit += price - buy
        buy = price

    return profit
```

Time: O(n)

Space: O(1)
