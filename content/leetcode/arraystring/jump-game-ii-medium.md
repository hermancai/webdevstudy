## title

Jump Game II (Medium)

## question

<a href="https://leetcode.com/problems/jump-game-ii/description" target="_blank">Jump Game II</a> (Medium)

You are given a 0-indexed array of integers `nums` of length `n`. You are initially positioned at `nums[0]`.

Each element `nums[i]` represents the maximum length of a forward jump from index `i`. In other words, if you are at `nums[i]`, you can jump to any `nums[i + j]` where `0 <= j <= nums[i]` and `i + j < n`.

Return the minimum number of jumps to reach `nums[n - 1]`. Assume there is always a way to reach `nums[n - 1]`.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1)
def jump(nums: List[int]) -> int:
    answer = currFarthest = currEnd = 0

    # Find max jumps and track jump count
    for i in range(len(nums) - 1):
        currFarthest = max(currFarthest, nums[i] + i)
        # Loop excludes last index because if currEnd >= end,
        # this conditional will unnecessarily increment the answer
        if i == currEnd:
            answer += 1
            # currEnd becomes max distance of previous jump
            currEnd = currFarthest
    return answer
```
