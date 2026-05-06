## title

Interleaving String (Medium)

## question

<a href="https://leetcode.com/problems/interleaving-string/description" target="_blank">Interleaving String</a> (Medium)

Given strings `s1`, `s2`, and `s3`, find whether `s3` is formed by an interleaving of `s1` and `s2`.

An interleaving of two strings `s` and `t` is a configuration where `s` and `t` are divided into `n` and `m` substrings respectively, such that:

- `s = s1 + s2 + ... + sn`
- `t = t1 + t2 + ... + tm`
- `|n - m| <= 1`
- The interleaving is` s1 + t1 + s2 + t2 + s3 + t3 + ...` or `t1 + s1 + t2 + s2 + t3 + s3 + ...`

## answer

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
