## title

Two Sum (Easy)

## question

<a href="https://leetcode.com/problems/two-sum/description" target="_blank">Two Sum</a> (Easy)

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(n)
def twoSum(nums: List[int], target: int) -> List[int]:
    m = {}
    for i in range(len(nums)):
        comp = target - nums[i]
        if comp in m:
            return [i, m[comp]]
        m[nums[i]] = i
```
