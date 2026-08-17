## title

Coin Change (Medium)

## question

<a href="https://leetcode.com/problems/coin-change/description" target="_blank">Coin Change</a> (Medium)

You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.

You may assume that you have an infinite number of each kind of coin.

## answer

```py
def coinChange(coins: List[int], amount: int) -> int:
    memo = [float("inf")] * (amount + 1)
    memo[0] = 0

    for amnt in range(1, amount + 1):
        # Coin values are index differences
        for coin in coins:
            # Boundary check
            if amnt - coin >= 0:
                memo[amnt] = min(memo[amnt], memo[amnt - coin] + 1)

    return memo[-1] if memo[-1] != float("inf") else -1
```

Time: O(n \* m), n = len(coins), m = amount

Space: O(m)
