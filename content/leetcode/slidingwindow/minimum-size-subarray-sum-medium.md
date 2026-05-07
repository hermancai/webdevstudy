## title

Minimum Size Subarray Sum (Medium)

## question

<a href="https://leetcode.com/problems/minimum-size-subarray-sum/description" target="_blank">Minimum Size Subarray Sum</a> (Medium)

Given an array of positive integers `nums` and a positive integer `target`, return the minimal length of a subarray whose sum is greater than or equal to `target`. If there is no such subarray, return `0` instead. Assume `1 <= nums[i]`.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1)
def minSubArrayLen(target: int, nums: List[int]) -> int:
    start = end = currSum = 0
    answer = float("inf")

    while end < len(nums):
        # Expand window size from end
        currSum += nums[end]
        end += 1

        # Decrease window size from start
        while currSum >= target:
            answer = min(answer, end - start)
            currSum -= nums[start]
            start += 1

    return 0 if answer == float("inf") else answer
```
