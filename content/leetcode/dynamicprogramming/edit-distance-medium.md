## title

Edit Distance (Medium)

## question

<a href="https://leetcode.com/problems/edit-distance/description" target="_blank">Edit Distance</a> (Medium)

Given two strings `word1` and `word2`, return the minimum number of operations required to convert `word1` to `word2`.

You have the following three operations permitted on a word:

- Insert a character
- Delete a character
- Replace a character

Example:

Input: `word1 = "horse", word2 = "ros"`

Output: `3`

`horse -> rorse (replace 'h' with 'r')`

`rorse -> rose (remove 'r')`

`rose -> ros (remove 'e')`

## answer

```py
def minDistance(word1: str, word2: str) -> int:
    # memo[i][j] --> minimum operations for word1[:i] to word2[:j]
    # memo can be collapsed into 1D array and temp variable
    memo = [[0 for _ in range(len(word2) + 1)] for _ in range(len(word1) + 1)]

    # Handle first row (word1 always empty string)
    for col in range(1, len(memo[0])):
        memo[0][col] = col

    for row in range(1, len(memo)):
        # Handle first column (word2 always empty string)
        memo[row][0] = row

        # row for word1, col for word2
        for col in range(1, len(memo[0])):
            # If matching char, no operation needed
            if word1[row - 1] == word2[col - 1]:
                memo[row][col] = memo[row - 1][col - 1]
            else:
                # Top: Delete
                # Left: Insert
                # Top-left: Replace
                memo[row][col] = 1 + min(
                    memo[row - 1][col],
                    memo[row][col - 1],
                    memo[row - 1][col - 1]
                )

    return memo[-1][-1]
```

Time: O(m \* n), m = len(word1), n = len(word2)

Space: O(m \* n)

<br />

Alternative solution:

```py
def minDistance(word1: str, word2: str) -> int:
    # Top-down recursive DP, starting with full strings
    # memo holds word1 and word2 indices { tuple(int, int): int }
    # Value: (i1, i2) --> word1[i1:], word2[i2:]
    # Key: minimum operations for current substrings
    memo = {}

    def helper(i1, i2):
        if (i1, i2) in memo:
            return memo[(i1, i2)]

        # If other word is equal/more chars left, must insert remainder
        if i1 == len(word1):
            return len(word2) - i2
        if i2 == len(word2):
            return len(word1) - i1

        if word1[i1] == word2[i2]:
            memo[(i1, i2)] = helper(i1 + 1, i2 + 1)
        else:
            memo[(i1, i2)] = 1 + min(
                helper(i1, i2 + 1),     # Insert
                helper(i1 + 1, i2),     # Delete
                helper(i1 + 1, i2 + 1)  # Replace
            )

        return memo[(i1, i2)]

    # Answer is stored in memo[(0, 0)]
    return helper(0, 0)
```

Time: O(m \* n), m = len(word1), n = len(word2)

Space: O(m \* n)
