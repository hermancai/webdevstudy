## title

Permutations (Medium)

## question

<a href="https://leetcode.com/problems/permutations/description" target="_blank">Permutations</a> (Medium)

Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.

## answer

```py
def permute(nums: List[int]) -> List[List[int]]:
    answer, visited = [], set([None])

    def dfs(currVal, currLi):
        if len(currLi) == len(nums):
            answer.append(currLi[:])
            return

        for val in nums:
            # Tracking visited values only works if values are unique
            # Track index instead if duplicate values
            if val in visited:
                continue
            currLi.append(val)
            visited.add(val)
            dfs(val, currLi)
            currLi.pop()
            visited.remove(val)

    dfs(None, [])
    return answer
```

Time: O(n \* n!)

Space: O(n \* n!) or O(n) exluding output
