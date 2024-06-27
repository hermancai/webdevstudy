**question**

<a href="https://leetcode.com/problems/climbing-stairs/description" target="_blank">Climbing Stairs</a> (Easy)

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def climbStairs(n: int) -> int:
    if n < 3: return n

    prev = 1
    curr = 2
    for i in range(3, n + 1):
        curr += prev
        # Same as using temp variable for curr
        prev = curr - prev
    return curr
```
