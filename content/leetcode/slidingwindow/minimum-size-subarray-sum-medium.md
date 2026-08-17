## title

Minimum Size Subarray Sum (Medium)

## question

<a href="https://leetcode.com/problems/minimum-size-subarray-sum/description" target="_blank">Minimum Size Subarray Sum</a> (Medium)

Given an array of positive integers `nums` and a positive integer `target`, return the minimal length of a subarray whose sum is greater than or equal to `target`. If there is no such subarray, return `0` instead. Assume `1 <= nums[i]`.

## answer

```py
def minSubArrayLen(target: int, nums: List[int]) -> int:
    answer = float("inf")
    left = right = 0
    currSum = 0

    # Expand until target found. Shrink until target lost
    while right < len(nums):
        currSum += nums[right]
        right += 1

        while currSum >= target:
            answer = min(answer, right - left)
            currSum -= nums[left]
            left += 1

    return 0 if answer == float("inf") else answer
```

Time: O(n)

Space: O(1)
