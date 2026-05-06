## title

Jump Game (Medium)

## question

<a href="https://leetcode.com/problems/jump-game/description" target="_blank">Jump Game</a> (Medium)

You are given an integer array `nums`. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return `true` if you can reach the last index, or `false` otherwise.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1)
def canJump(nums: List[int]) -> bool:
    if len(nums) <= 1:
        return True

    farthest = 0
    target = len(nums) - 1

    # From start, update farthest possible index
    for i in range(len(nums)):
        if nums[i] == 0 and i == farthest:
            return False
        farthest = max(farthest, i + nums[i])
        if farthest >= target:
            return True

    return farthest >= target
```
