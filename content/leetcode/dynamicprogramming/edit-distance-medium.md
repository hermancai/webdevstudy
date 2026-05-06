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
