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

**question**

Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def rotate(nums: List[int], k: int) -> None:
    k = k % len(nums)
    reverseList(nums, 0, len(nums) - 1)
    reverseList(nums, 0, k - 1)
    reverseList(nums, k, len(nums) - 1)

def reverseList(li: List[int], start: int, end: int) -> None:
    while start < end:
        li[start], li[end] = li[end], li[start]
        start += 1
        end -= 1
```

<a href="https://leetcode.com/problems/rotate-array/description" target="_blank">189. Rotate Array</a>

**question**

You are given an integer array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

**answer**

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

<a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description" target="_blank">122. Best Time to Buy and Sell Stock II</a>
