## title

Longest Consecutive Sequence (Medium)

## question

<a href="https://leetcode.com/problems/longest-consecutive-sequence/description" target="_blank">Longest Consecutive Sequence</a> (Medium)

Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.

Write an algorithm that runs in `O(n)` time.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(n)
def longestConsecutive(nums: List[int]) -> int:
    s = set(nums)
    answer = 0

    for n in nums:
        # n is lowest value aka start of own sequence
        if n - 1 not in s:
            end = n + 1
            while end in s:
                end += 1
            answer = max(answer, end - n)
    return answer
```
