## title

Jump Game II (Medium)

## question

<a href="https://leetcode.com/problems/jump-game-ii/description" target="_blank">Jump Game II</a> (Medium)

You are given a 0-indexed array of integers `nums` of length `n`. You are initially positioned at `nums[0]`.

Each element `nums[i]` represents the maximum length of a forward jump from index `i`. In other words, if you are at `nums[i]`, you can jump to any `nums[i + j]` where `0 <= j <= nums[i]` and `i + j < n`.

Return the minimum number of jumps to reach `nums[n - 1]`. Assume there is always a way to reach `nums[n - 1]`.

## answer

```py
def jump(nums: List[int]) -> int:
    count = 0
    position = 0
    farthest = 0

    # Exclude last index to prevent one extra count
    for i in range(len(nums) - 1):
        farthest = max(farthest, i + nums[i])

        # Reached biggest possible jump. Update position
        if i == position:
            position = farthest
            count += 1

    return count
```

Time: O(n)

Space: O(1)
