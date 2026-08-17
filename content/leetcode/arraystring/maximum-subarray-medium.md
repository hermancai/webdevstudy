## title

Maximum Subarray (Medium)

## question

<a href="https://leetcode.com/problems/maximum-subarray/description" target="_blank">Maximum Subarray</a> (Medium)

Given an integer array `nums`, find the subarray with the largest sum, and return its sum.

## answer

```py
def maxSubArray(nums: List[int]) -> int:
    # Kadane's algorithm
    answer, currSum = float("-inf"), 0

    for num in nums:
        # num > currSum + num if currSum is negative
        currSum = max(currSum + num, num)
        answer = max(answer, currSum)

    return answer
```

Time: O(n)

Space: O(1)
