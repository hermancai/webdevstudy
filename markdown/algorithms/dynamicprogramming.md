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

**question**

<a href="https://leetcode.com/problems/unique-paths-ii/description" target="_blank">Unique Paths II</a> (Medium)

You are given an `m x n` integer array `grid`. There is a robot initially located at the top-left corner (i.e., `grid[0][0]`). The robot tries to move to the bottom-right corner (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.

An obstacle and space are marked as `1` or `0` respectively in `grid`. A path that the robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

**answer**

```py
# Time complexity: O(m * n) where m, n = lengths of grid
# Space complexity: O(m * n)
def uniquePathsWithObstacles(obstacleGrid: List[List[int]]) -> int:
    memo = [[0 for _ in range(len(obstacleGrid[0]))] for _ in range(len(obstacleGrid))]
    memo[0][0] = 0 if obstacleGrid[0][0] == 1 else 1

    for row in range(len(obstacleGrid)):
        for col in range(len(obstacleGrid[0])):
            if obstacleGrid[row][col] == 1:
                continue
            # The current square's number of unique paths is equal to
            #   the sum of the square above and to the left
            if row - 1 >= 0:
                memo[row][col] += memo[row - 1][col]
            if col - 1 >= 0:
                memo[row][col] += memo[row][col - 1]
    return memo[-1][-1]
```

Alternative solution:

```py
# Time complexity: O(m * n) where m, n = lengths of grid
# Space complexity: O(n)
def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
    # In this 2D DP problem, memo[row][col] depends on memo[row - 1][col]
    #   and memo[row][col - 1]. (Refer to previous solution)
    # These constraints allow the memo grid to be collapsed into a 1D array.
    memo = [0 for _ in range(len(obstacleGrid[0]))]
    memo[0] = 0 if obstacleGrid[0][0] == 1 else 1

    # The loop processes each row first. Consider a 2D memo grid.
    # Once memo[row][col] is processed, memo[row][col] is the state of memo[row + 1][col]
    #   after adding only memo[row][col] (i.e. only adding from the square above).
    #   This is possible because memo is initialized with 0s.
    # In other words, a 1D memo array is possible because each square is an
    #   accumulation of values from previous rows.
    # Then adding the square to the left is simply memo[col - 1].
    for row in range(len(obstacleGrid)):
        for col in range(len(obstacleGrid[0])):
            # Reset current square because it cannot be used in a path
            if obstacleGrid[row][col] == 1:
                memo[col] = 0
            # Skip col 0 because the first column can have at most 1 unique path
            elif col > 0:
                memo[col] += memo[col - 1]
    return memo[-1]
```

Alternative solution:

```py
# Time complexity: O(m * n) where m, n = lengths of grid
# Space complexity: O(1)
def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
    # Modify grid in-place instead of using memoization
    obstacleGrid[0][0] = 0 if obstacleGrid[0][0] == 1 else 1

    # Handle first row. Value can be at most 1
    for col in range(1, len(obstacleGrid[0])):
        obstacleGrid[0][col] = 0 if obstacleGrid[0][col] == 1 else obstacleGrid[0][col - 1]

    # Handle first column. Value can be at most 1
    for row in range(1, len(obstacleGrid)):
        obstacleGrid[row][0] = 0 if obstacleGrid[row][0] == 1 else obstacleGrid[row - 1][0]

    # Handle inner grid. Add top and left squares if not obstacles
    for row in range(1, len(obstacleGrid)):
        for col in range(1, len(obstacleGrid[0])):
            if obstacleGrid[row][col] == 1:
                obstacleGrid[row][col] = 0
            else:
                obstacleGrid[row][col] = obstacleGrid[row - 1][col] + obstacleGrid[row][col - 1]

    return obstacleGrid[-1][-1]
```

**question**

<a href="https://leetcode.com/problems/longest-palindromic-substring/description" target="_blank">Longest Palindromic Substring</a> (Medium)

Given a string `s`, return the longest palindromic substring in `s`.

**answer**

```py
# Time complexity: O(n^2) where n = length of s
# Space complexity: O(n^2)
def longestPalindrome(s: str) -> str:
    # 2D array using two indices as substring window
    # If memo[j][i] is True, s[j:i + 1] is a palindrome
    memo = [[False for _ in s] for _ in s]
    start = end = 0

    # j = start index; i = end index
    # inner loop is start index because j cannot be larger than i
    for i in range(len(s)):
        memo[i][i] = True  # Single char is a palindrome
        for j in range(i):
            # Check if current substring is a palindrome
            # s[j] == s[i] means first and last chars of substring are equal
            # (i - j <= 2) means substring is three or less chars (i.e. guaranteed palindrome)
            # memo[j + 1][i - 1] uses memoization to check if substring without
            #   first and last char is palindrome
            if s[j] == s[i] and (i - j <= 2 or memo[j + 1][i - 1]):
                memo[j][i] = True
                if i - j > end - start:
                    start, end = j, i

    return s[start:end + 1]
```

Alternative solution:

```py
# Time complexity: O(n^2) where n = length of s
# Space complexity: O(1)
def longestPalindrome(s: str) -> str:
    start = end = 0

    # For each char in s, expand substring window to find largest palindrome
    for i in range(len(s) - 1):
        left, right = expandPalindrome(s, i, i)
        if right - left > end - start:
            start, end = left, right

        # Center of a palindrome might be two chars
        left, right = expandPalindrome(s, i, i + 1)
        if right - left > end - start:
            start, end = left, right

    return s[start:end + 1]

def expandPalindrome(s: str, left: int, right: int) -> Tuple[int, int]:
    while left >= 0 and right < len(s) and s[left] == s[right]:
        left -= 1
        right += 1
    return left + 1, right - 1
```

**question**

<a href="https://leetcode.com/problems/interleaving-string/description" target="_blank">Interleaving String</a> (Medium)

Given strings `s1`, `s2`, and `s3`, find whether `s3` is formed by an interleaving of `s1` and `s2`.

An interleaving of two strings `s` and `t` is a configuration where `s` and `t` are divided into `n` and `m` substrings respectively, such that:

-   `s = s1 + s2 + ... + sn`
-   `t = t1 + t2 + ... + tm`
-   `|n - m| <= 1`
-   The interleaving is` s1 + t1 + s2 + t2 + s3 + t3 + ...` or `t1 + s1 + t2 + s2 + t3 + s3 + ...`

**answer**

```py
# Time complexity: O(m * n) where m, n = length of s1, s2
# Space complexity: O(m * n)
def isInterleave(s1: str, s2: str, s3: str) -> bool:
    if len(s1) + len(s2) != len(s3):
        return False

    # 2D array representing s1 and s2
    # Index 0 represents empty string
    # Given memo[i][j], check if s1[:i] and s2[:j] -> s3[:i+j]
    memo = [[False for _ in range(len(s2) + 1)] for _ in range(len(s1) + 1)]
    memo[0][0] = True

    # Handle first row (index for s2 while s1 is empty string)
    # -1 when indexing strings because memo is offset by 1
    for col in range(1, len(memo[0])):
        memo[0][col] = memo[0][col - 1] and s2[col - 1] == s3[col - 1]

    # Handle first column (index for s1 while s2 is empty string)
    for row in range(1, len(memo)):
        memo[row][0] = memo[row - 1][0] and s1[row - 1] == s3[row - 1]

    # Handle inner grid. row for s1, col for s2
    # Incrementally add chars from s1/s2 to previously solved substrings
    for row in range(1, len(memo)):
        for col in range(1, len(memo[0])):
            # Square above or left of current square must be True
            # And new char from s1/s2 must be equal to cumulative index in s3
            memo[row][col] = (
                (memo[row - 1][col] and s1[row - 1] == s3[row + col - 1]) or
                (memo[row][col - 1] and s2[col - 1] == s3[row + col - 1])
            )

    # Note that if the answer is True, s1 and s2 are inherently split
    #   into substrings with a count difference of 1 or less.
    #   Ex: If s1 is split into 5 substrings, there must be 4/5/6
    #     substrings of s2 to fill the gaps and create s3
    return memo[len(s1)][len(s2)]
```

**question**

<a href="https://leetcode.com/problems/edit-distance/description" target="_blank">Edit Distance</a> (Medium)

Given two strings `word1` and `word2`, return the minimum number of operations required to convert `word1` to `word2`.

You have the following three operations permitted on a word:

-   Insert a character
-   Delete a character
-   Replace a character

Example:

Input: `word1 = "horse", word2 = "ros"`

Output: `3`

`horse -> rorse (replace 'h' with 'r')`

`rorse -> rose (remove 'r')`

`rose -> ros (remove 'e')`

**answer**

```py
# Time complexity: O(m * n) where m, n = length of word1, word2
# Space complexity: O(m * n)
def minDistance(word1: str, word2: str) -> int:
    # Bottom-up DP: starting with empty strings
    # 2D array where memo[i][j] = minimum operations for word1[:i] to word2[:j]
    memo = [[0 for _ in range(len(word2) + 1)] for _ in range(len(word1) + 1)]

    # Handle first row and column
    # When either word is empty string, operations = length of other string
    for col in range(1, len(memo[0])):
        memo[0][col] = col
    for row in range(1, len(memo)):
        memo[row][0] = row

    # row for word1, col for word2
    for row in range(1, len(memo)):
        for col in range(1, len(memo[0])):
            # If current chars are equal, no operation is needed
            # word indices are -1 for memo index offset
            if word1[row - 1] == word2[col - 1]:
                memo[row][col] = memo[row - 1][col - 1]
            else:
                # Top square: delete
                # Left square: insert
                # Top-left square: replace
                memo[row][col] = 1 + min(
                    memo[row - 1][col],
                    memo[row][col - 1],
                    memo[row - 1][col - 1]
                )

    return memo[-1][-1]
```

Alternative solution:

```py
# Time complexity: O(m * n) where m, n = length of word1, word2
# Space complexity: O(m * n)
def minDistance(word1: str, word2: str) -> int:
    # Top-down recursive DP, starting with full strings
    # memo is dictionary { tuple(int, int): int}
    # keys are word indices representing subproblems
    #   The indices are for the start of the string
    #   i, j -> word1[i:], word2[j:]
    # values are mininum operations for current subproblem
    return helper(word1, word2, 0, 0, {})

def helper(word1, word2, i, j, memo):
    # Reached end for both words
    if i == len(word1) and j == len(word2):
        return 0

    # If one word is empty, must use insert/delete for remaining chars
    if i == len(word1):
        return len(word2) - j
    if j == len(word2):
        return len(word1) - i

    if (i, j) not in memo:
        # No operation needed if current chars match
        if word1[i] == word2[j]:
            answer = helper(word1, word2, i + 1, j + 1, memo)
        else:
            insert = 1 + helper(word1, word2, i, j + 1, memo)
            delete = 1 + helper(word1, word2, i + 1, j, memo)
            replace = 1 + helper(word1, word2, i + 1, j + 1, memo)
            answer = min(insert, delete, replace)
        memo[(i, j)] = answer

    # The final answer is stored in memo[(0, 0)]
    return memo[(i, j)]
```

**question**

<a href="https://leetcode.com/problems/maximal-square/description" target="_blank">Maximal Square</a> (Medium)

Given an `m x n` binary `matrix` filled with `0`'s and `1`'s, find the largest square containing only `1`'s and return its area.

**answer**

```py
# Time complexity: O(m * n) where m, n = dimensions of matrix
# Space complexity: O(m * n)
def maximalSquare(matrix: List[List[str]]) -> int:
    # Bottom-up DP, starting with base case of 1x1 square
    # memo has an extra row and column to handle boundaries
    # The value in memo[i][j] represents the length of the largest valid square
    #   where memo[i][j] is the bottom right corner of the square
    #   Ex: If memo[i][j] == 2, then the largest square consists of
    #     memo[i][j], memo[i - 1][j], memo[i][j - 1], memo[i - 1][j - 1]
    memo = [[0 for _ in range(len(matrix[0]) + 1)] for _ in range(len(matrix) + 1)]
    answer = 0

    for row in range(len(matrix)):
        for col in range(len(matrix[0])):
            if matrix[row][col] == "1":
                # Remember that memo index is offset by 1
                mRow = row + 1
                mCol = col + 1
                # Check top, left, and top-left
                # A 0 means the current 1x1 square cannot be expanded to 2x2
                # If the min value is 2, then the square can be expanded to 3x3, and so on
                memo[mRow][mCol] = 1 + min(
                    memo[row][col],
                    memo[row][mCol],
                    memo[mRow][col]
                )
                answer = max(answer, memo[mRow][mCol])

    return answer * answer  # area of square
```
