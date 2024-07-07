**question**

<a href="https://leetcode.com/problems/minimum-size-subarray-sum/description" target="_blank">Minimum Size Subarray Sum</a> (Medium)

Given an array of positive integers `nums` and a positive integer `target`, return the minimal length of a subarray whose sum is greater than or equal to `target`. If there is no such subarray, return `0` instead. Assume `1 <= nums[i]`.

**answer**

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

**question**

<a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/description" target="_blank">Longest Substring Without Repeating Characters</a> (Medium)

Given a string `s`, find the length of the longest substring without repeating characters.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(n)
def lengthOfLongestSubstring(s: str) -> int:
    answer = start = end = 0
    m = {} # char : index

    while end < len(s):
        # Decrease window size to exclude duplicate
        if s[end] in m:
            start = max(start, m[s[end]] + 1)
        m[s[end]] = end
        end += 1
        answer = max(answer, end - start)
    return answer
```
