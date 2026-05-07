## title

Combination Sum (Medium)

## question

<a href="https://leetcode.com/problems/combination-sum/description" target="_blank">Combination Sum</a> (Medium)

Given an array of distinct integers `candidates` and a target integer `target`, return a list of all unique combinations of candidates where the chosen numbers sum to `target`. You may return the combinations in any order.

The same number may be chosen from `candidates` an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

## answer

```py
# Time complexity: O(N * 2^(M)) where N = length of currLi; M = sum of (target / candidate[i]) for all candidates
# Space complexity: O(K) where K = length of longest combination
def combinationSum(candidates: List[int], target: int) -> List[List[int]]:
    answer = []
    helper(candidates, target, answer, [], 0, 0)
    return answer

def helper(candidates, target, answer, currLi, currSum, index):
    if currSum > target:
        return

    if currSum == target:
        answer.append(currLi[:])
        return

    # All solutions containing elements before index have been checked
    for i in range(index, len(candidates)):
        currLi.append(candidates[i])
        # Recurse with same index because answer allows duplicates
        helper(candidates, target, answer, currLi, currSum + candidates[i], i)
        currLi.pop()
```
