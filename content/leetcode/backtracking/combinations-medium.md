## title

Combinations (Medium)

## question

<a href="https://leetcode.com/problems/combinations/description" target="_blank">Combinations</a> (Medium)

Given two integers `n` and `k`, return all possible combinations of `k` numbers chosen from the range `[1, n]`.

You may return the answer in any order.

Note that combinations are unordered, i.e., `[1,2]` and `[2,1]` are considered to be the same combination.

## answer

```py
# Time complexity: O(c(n, k) * k)
# Space complexity: O(c(n, k) * k)
def combine(n: int, k: int) -> List[List[int]]:
    answer = []
    helper(n, k, answer, [], 1)
    return answer

def helper(n, k, answer, currLi, currVal) -> None:
    if len(currLi) == k:
        # Need copy of list due to passing by reference
        answer.append(currLi[:])
        return

    # Faster loop compared to range(currVal, n + 1)
    # Suppose n = 10, k = 5, currLi = []
    # If i = 7, the largest possible currLi will be [7, 8, 9, 10],
    #   which is not a valid answer.
    # (n - (k - len(currLi)) + 2) cuts off unnecessary recursion.
    for i in range(currVal, n - (k - len(currLi)) + 2):
        currLi.append(i)
        helper(n, k, answer, currLi, i + 1)
        currLi.pop()
```
