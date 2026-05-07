## title

House Robber (Medium)

## question

<a href="https://leetcode.com/problems/house-robber/description" target="_blank">House Robber</a> (Medium)

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1)
def rob(nums: List[int]) -> int:
    # The solution only needs the previous two houses
    oneBefore = 0
    twoBefore = 0
    # For any house, the two options are to steal and take from two before,
    #   or not steal and take from one before
    for n in nums:
        curr = max(twoBefore + n, oneBefore)
        twoBefore = oneBefore
        oneBefore = curr
    return oneBefore
```
