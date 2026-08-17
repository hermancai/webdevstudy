## title

House Robber (Medium)

## question

<a href="https://leetcode.com/problems/house-robber/description" target="_blank">House Robber</a> (Medium)

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

## answer

```py
def rob(nums: List[int]) -> int:
    # Track max stolen value up to previous two houses
    oneBack = twoBack = 0

    for num in nums:
        # Two choices for current index:
        # Ignore current house, keep oneBack value -OR-
        # Steal from current house, add to twoBack
        curr = max(num + twoBack, oneBack)
        twoBack = oneBack
        oneBack = curr

    return curr
```

Time: O(n)

Space: O(1)
