## title

Longest Increasing Subsequence (Medium)

## question

<a href="https://leetcode.com/problems/longest-increasing-subsequence/description" target="_blank">Longest Increasing Subsequence</a> (Medium)

Given an integer array `nums`, return the length of the longest strictly increasing subsequence.

## answer

```py
def lengthOfLIS(nums: List[int]) -> int:
    memo = [1] * (len(nums))

    for i in range(1, len(nums)):
        for j in range(i):
            if nums[j] < nums[i]:
                memo[i] = max(memo[i], memo[j] + 1)

    return max(memo)
```

Time: O(n<sup>2</sup>)

Space: O(n)

<br />

Alternative solution:

```py
def lengthOfLIS(nums: List[int]) -> int:
    # Build longest subsequence
    sub = []

    for num in nums:
        # Current num can be added to subsequence
        if not sub or num > sub[-1]:
            sub.append(num)
        else:
            # Native function: bisect_left(sorted_list, val)
            # Binary search to find leftmost index for inserting val
            # Replace an element in subsequence instead of appending
            sub[bisect_left(sub, num)] = num

    # sub may no longer hold a valid subsequence. Does not matter because
    # length is preserved and appending only requires checking last element
    return len(sub)
```

Time: O(n \* log n)

Space: O(n)
