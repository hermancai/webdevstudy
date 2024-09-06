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

**question**

<a href="https://leetcode.com/problems/coin-change/description" target="_blank">Coin Change</a> (Medium)

You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.

You may assume that you have an infinite number of each kind of coin.

**answer**

```py
# Time complexity: O(n * m) where n = length of coins; m = amount
# Space complexity: O(m)
def coinChange(coins: List[int], amount: int) -> int:
    coins.sort()
    memo = [float("inf")] * (amount + 1)
    memo[0] = 0

    for i in range(1, amount + 1):
        # Consider coin values as index differences
        # For example, with current coin = 5, current amount = 8
        #   (memo[8 - 5] + 1) is a potential answer to memo[8]
        for coin in coins:
            if i - coin < 0:
                break
            memo[i] = min(memo[i], memo[i - coin] + 1)

    return memo[-1] if memo[-1] != float("inf") else -1
```

**question**

<a href="https://leetcode.com/problems/longest-increasing-subsequence/description" target="_blank">Longest Increasing Subsequence</a> (Medium)

Given an integer array `nums`, return the length of the longest strictly increasing subsequence.

**answer**

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

**question**

<a href="https://leetcode.com/problems/triangle/description" target="_blank">Triangle</a> (Medium)

Given a `triangle` array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index `i` on the current row, you may move to either index `i` or index `i + 1` on the next row.

```py
# Example: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
#    2
#   3 4
#  6 5 7
# 4 1 8 3
# Output = 11
```

**answer**

```py
# Time complexity: O(n^2)
# Space complexity: O(1)
def minimumTotal(triangle: List[List[int]]) -> int:
    # Bottom-up DP
    # Space optimization: modify triangle in-place instead of memoization

    # Start from last row in triangle, which is inherently already solved
    for currRow in range(len(triangle) - 1, 0, -1):
        # In the upper row, each value is a parent to two values in the current row
        #   The lower of those two values is used to create a potential min path
        upperRow = currRow - 1
        for i in range(currRow):
            triangle[upperRow][i] += min(triangle[currRow][i], triangle[currRow][i + 1])
    return triangle[0][0]
```

Alternative solution:

```py
# Time complexity: O(n^2)
# Space complexity: O(1)
def minimumTotal(triangle: List[List[int]]) -> int:
    # Top-down DP
    # Space optimization: modify triangle in-place instead of memoization

    # Starting from second row, building from root
    for currRow in range(1, len(triangle)):
        # Modify the current row using the upper row
        upperRow = currRow - 1
        for i in range(len(triangle[currRow])):
            # The first and last values in a row only have one path choice
            if i == 0:
                triangle[currRow][i] += triangle[upperRow][i]
            elif i == currRow:
                triangle[currRow][i] += triangle[upperRow][i - 1]
            else:
                triangle[currRow][i] += min(triangle[upperRow][i], triangle[upperRow][i - 1])
    return min(triangle[-1])
```

**question**

<a href="https://leetcode.com/problems/minimum-path-sum/description" target="_blank">Minimum Path Sum</a> (Medium)

Given a `m x n` `grid` filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

You can only move either down or right at any point in time.

**answer**

```py
# Time complexity: O(m * n) where m, n = lengths of grid
# Space complexity: O(1)
def minPathSum(grid: List[List[int]]) -> int:
    # First row in grid can only move right
    for col in range(1, len(grid[0])):
        grid[0][col] += grid[0][col - 1]

    for row in range(1, len(grid)):
        # First col in grid can only move down
        grid[row][0] += grid[row - 1][0]

        # The current square has a minimum sum path by adding the lower value
        #   between the square above or to the left
        for col in range(1, len(grid[0])):
            grid[row][col] += min(grid[row - 1][col], grid[row][col - 1])

    return grid[-1][-1]
```
