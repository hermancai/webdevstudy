## title

Combinations (Medium)

## question

<a href="https://leetcode.com/problems/combinations/description" target="_blank">Combinations</a> (Medium)

Given two integers `n` and `k`, return all possible combinations of `k` numbers chosen from the range `[1, n]`.

You may return the answer in any order.

Note that combinations are unordered, i.e., `[1,2]` and `[2,1]` are considered to be the same combination.

## answer

```py
def combine(n: int, k: int) -> List[List[int]]:
    answer = []

    # DFS adding only larger values per level
    def dfs(currVal, currLi):
        if len(currLi) == k:
            answer.append(currLi[:])
            return

        # Optimization from range(currVal, n + 1)
        # Skip recursion if not enough numbers left
        # Example: n = 10, k = 5, currLi = [], currVal = 7
        #   len([7, 8, 9, 10]) < k
        for val in range(currVal, n - (k - len(currLi)) + 2):
            currLi.append(val)
            dfs(val + 1, currLi)
            currLi.pop()

    dfs(1, [])
    return answer
```

Time: O(c(n, k) \* k)

Space: O(c(n, k) \* k) or O(k) excluding output
