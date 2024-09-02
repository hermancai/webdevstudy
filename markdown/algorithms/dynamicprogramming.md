**question**

<a href="https://leetcode.com/problems/climbing-stairs/description" target="_blank">Climbing Stairs</a> (Easy)

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def climbStairs(n: int) -> int:
    if n < 3: return n

    prev = 1
    curr = 2
    for i in range(3, n + 1):
        curr += prev
        # Same as using temp variable for curr
        prev = curr - prev
    return curr
```

**question**

<a href="https://leetcode.com/problems/house-robber/description" target="_blank">House Robber</a> (Medium)

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def rob(nums: List[int]) -> int:
    # The solution only needs the previous two houses
    oneBefore = 0
    twoBefore = 0
    # For any house, the two options are to steal and take from two before,
    #   or not steal and take from one before
    for n in nums:
        curr = max(twoBefore + n, oneBefore)
        twoBefore = oneBefore
        oneBefore = curr
    return oneBefore
```

**question**

<a href="https://leetcode.com/problems/word-break/description" target="_blank">Word Break</a> (Medium)

Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

**answer**

```py
# Time complexity: O(n^3) where n = length of s
# Space complexity: O(n + m) where m = length of wordDict
def wordBreak(s: str, wordDict: List[str]) -> bool:
    wordDict = set(wordDict)
    # Memo offset index by 1 to include base case of empty string
    memo = [False] * (len(s) + 1)
    memo[0] = True

    # Build answer starting with smallest substring
    for end in range(1, len(s) + 1):
        # Must do repeated checks because substring may be valid in multiple ways
        for start in range(0, end):
            # If the current word window exists in wordDict and the substring
            #   immediately before the current word window is valid,
            #   s[0:end + 1] is valid
            # Remember that memo[start] corresponds with s[start - 1]
            if memo[start] and s[start:end] in wordDict:
                    memo[end] = True
                    break
    return memo[-1]
```
