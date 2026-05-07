## title

Longest Increasing Subsequence (Medium)

## question

<a href="https://leetcode.com/problems/longest-increasing-subsequence/description" target="_blank">Longest Increasing Subsequence</a> (Medium)

Given an integer array `nums`, return the length of the longest strictly increasing subsequence.

## answer

```py
# Time complexity: O(n^2)
# Space complexity: O(n)
def lengthOfLIS(nums: List[int]) -> int:
    memo = [1] * len(nums)
    answer = 1

    for i in range(len(nums)):
        for j in range(i):
            # If nums[i] fits into subsequence containing nums[j],
            #   (memo[j] + 1) is a potential answer
            if nums[j] < nums[i]:
                memo[i] = max(memo[i], memo[j] + 1)
                answer = max(answer, memo[i])
    return answer
```

Alternative solution:

```py
# Time complexity: O(n * log(n))
# Space complexity: O(n)
def lengthOfLIS(nums: List[int]) -> int:
    # Build subsequence sub by looping through nums once
    # If current val n does not fit into the subsequence,
    #   search sub for the lowest value x >= n
    #   Replace x with n in sub
    # Even if sub no longer represents a valid subsequence,
    #   sub will retain the length of the LIS.
    #   Values are never removed from sub, and expanding sub
    #   only involves checking the last value in sub
    sub = []
    for n in nums:
        if not sub or n > sub[-1]:
            sub.append(n)
        else:
            i = getIndexOfLowestGreaterVal(sub, n)
            sub[i] = n
    return len(sub)

def getIndexOfLowestGreaterVal(sub: List[int], n: int) -> int:
    # Binary search. sub is guaranteed to be sorted
    start, end = 0, len(sub) - 1
    while start < end:
        mid = (start + end) // 2
        if sub[mid] < n:
            start = mid + 1
        else:
            end = mid
    return start
```
