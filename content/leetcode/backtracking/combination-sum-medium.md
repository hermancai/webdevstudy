## title

Combination Sum (Medium)

## question

<a href="https://leetcode.com/problems/combination-sum/description" target="_blank">Combination Sum</a> (Medium)

Given an array of distinct integers `candidates` and a target integer `target`, return a list of all unique combinations of candidates where the chosen numbers sum to `target`. You may return the combinations in any order.

The same number may be chosen from `candidates` an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

## answer

```py
def combinationSum(candidates: List[int], target: int) -> List[List[int]]:
    candidates.sort()
    answer = []

    def dfs(index, currLi, currSum):
        if currSum == target:
            answer.append(currLi[:])
            return

        for i in range(index, len(candidates)):
            # Done checking because all further values are greater
            if candidates[i] + currSum > target:
                break

            currLi.append(candidates[i])
            # Pass i instead of i + 1 because duplicates allowed
            dfs(i, currLi, currSum + candidates[i])
            currLi.pop()

    dfs(0, [], 0)
    return answer
```

Time: O(n<sup>t / m</sup>), n = len(candidates), t = target, m = min(candidates)

Space: O(k \* t / m + t / m) or O(t / m) excluding output, k = number of valid combinations
