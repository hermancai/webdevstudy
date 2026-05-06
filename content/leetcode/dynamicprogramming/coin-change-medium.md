## title

Coin Change (Medium)

## question

<a href="https://leetcode.com/problems/coin-change/description" target="_blank">Coin Change</a> (Medium)

You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.

You may assume that you have an infinite number of each kind of coin.

## answer

```py
# Time complexity: O(n * m) where n = length of coins; m = amount
# Space complexity: O(m)
def coinChange(coins: List[int], amount: int) -> int:
    coins.sort()
    memo = [float("inf")] * (amount + 1)
    memo[0] = 0

    for i in range(1, amount + 1):
        # Consider coin values as index differences
        # For example, with current coin = 5, current amount = 8
        #   (memo[8 - 5] + 1) is a potential answer to memo[8]
        for coin in coins:
            if i - coin < 0:
                break
            memo[i] = min(memo[i], memo[i - coin] + 1)

    return memo[-1] if memo[-1] != float("inf") else -1
```
