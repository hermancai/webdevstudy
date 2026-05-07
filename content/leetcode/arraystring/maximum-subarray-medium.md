## title

Maximum Subarray (Medium)

## question

<a href="https://leetcode.com/problems/maximum-subarray/description" target="_blank">Maximum Subarray</a> (Medium)

Given an integer array `nums`, find the subarray with the largest sum, and return its sum.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1)
def maxSubArray(nums: List[int]) -> int:
    answer = float("-inf")
    currSum = 0

    for n in nums:
        # If new value does not lead to larger currSum,
        #   reset currSum and start new subarray
        currSum = max(n, currSum + n)
        answer = max(answer, currSum)
    return answer
```
