## title

Climbing Stairs (Easy)

## question

<a href="https://leetcode.com/problems/climbing-stairs/description" target="_blank">Climbing Stairs</a> (Easy)

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

## answer

```py
def climbStairs(n: int) -> int:
    if n <= 1:
        return 1

    # memo[i] = (memo[i - 1] solutions plus 1 step) + (memo[i - 2] solutions plus 2 steps)
    memo = [0] * (n + 1)
    memo[1] = 1
    memo[2] = 2

    for i in range(3, n + 1):
        memo[i] = memo[i - 1] + memo[i - 2]

    return memo[n]
```

Time: O(n)

Space: O(n)

<br />

Alternative solution:

```py

def climbStairs(n: int) -> int:
    if n < 3:
        return n

    # Don't need list because don't need to save old calculations
    prev = 1
    curr = 2

    for _ in range(3, n + 1):
        # Same as using temp variable
        curr += prev
        prev = curr - prev

    return curr
```

Time: O(n)

Space: O(1)
