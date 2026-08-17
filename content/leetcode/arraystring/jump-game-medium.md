## title

Jump Game (Medium)

## question

<a href="https://leetcode.com/problems/jump-game/description" target="_blank">Jump Game</a> (Medium)

You are given an integer array `nums`. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return `true` if you can reach the last index, or `false` otherwise.

## answer

```py
def canJump(nums: List[int]) -> bool:
    if len(nums) < 2:
        return True

    goal = len(nums) - 1
    farthest = 0

    for i in range(len(nums)):
        if nums[i] == 0 and i == farthest:
            return False

        farthest = max(farthest, i + nums[i])
        if farthest >= goal:
            return True
```

Time: O(n)

Space: O(1)

<br />

Alternative solution:

```py
def canJump(nums: List[int]) -> bool:
    farthest = 0

    for num in nums:
        if farthest < 0:
            return False

        if num > farthest:
            farthest = num
        farthest -= 1

    return True
```

Time: O(n)

Space: O(1)
