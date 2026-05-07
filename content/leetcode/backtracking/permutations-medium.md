## title

Permutations (Medium)

## question

<a href="https://leetcode.com/problems/permutations/description" target="_blank">Permutations</a> (Medium)

Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.

## answer

```py
# Time complexity: O(n * n!)
# Space complexity: O(n * n!)
def permute(nums: List[int]) -> List[List[int]]:
    answer = []
    helper(nums, answer, [], set())
    return answer

def helper(nums, answer, currLi, currSet) -> None:
    if len(currLi) == len(nums):
        answer.append(currLi[:])
        return

    for i in range(len(nums)):
        # Loop through every element that isn't in currLi
        if nums[i] not in currSet:
            currLi.append(nums[i])
            currSet.add(nums[i])
            helper(nums, answer, currLi, currSet)
            currLi.pop()
            currSet.remove(nums[i])
```
