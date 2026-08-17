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
def isInterleave(s1: str, s2: str, s3: str) -> bool:
    if len(s1) + len(s2) != len(s3):
        return False

    # 2D array of indices for s1 and s2, including empty string
    # memo[i][j] = True --> s1[:i] and s2[:j] make s3[:i+j]
    memo = [[False for _ in range(len(s2) + 1)] for _ in range(len(s1) + 1)]
    memo[0][0] = True

    # Fill first row (when s1 is empty) and first column (when s2 is empty)
    for col in range(1, len(memo[0])):
        prev = col - 1
        memo[0][col] = memo[0][prev] and s2[prev] == s3[prev]
    for row in range(1, len(memo)):
        prev = row - 1
        memo[row][0] = memo[prev][0] and s1[prev] == s3[prev]

    # Inner grid. row for s1, col for s2
    # Incrementally add chars from s1/s2 to previously solved substrings
    for row in range(1, len(memo)):
        for col in range(1, len(memo[0])):
            # New char must be equal to cumulative index in s3
            memo[row][col] = (
                (memo[row - 1][col] and s1[row - 1] == s3[row + col - 1]) or
                (memo[row][col - 1] and s2[col - 1] == s3[row + col - 1])
            )

    return memo[-1][-1]
```

Time: O(m \* n), m = len(s1), n = len(s2)

Space: O(m \* n)

<br />

Alternative solution:

```py
def isInterleave(s1: str, s2: str, s3: str) -> bool:
    if len(s1) + len(s2) != len(s3):
        return False

    # Same solution as previous, but using 1D array
    # because only previous row in 2D array is needed
    memo = [False] * (len(s1) + 1)
    memo[0] = True

    for i in range(1, len(memo)):
        memo[i] = memo[i - 1] and s1[i - 1] == s3[i - 1]

    for i in range(1, len(s2) + 1):
        memo[0] = memo[0] and s2[i - 1] == s3[i - 1]

        for j in range(1, len(memo)):
            memo[j] = (
                (memo[j] and s2[i - 1] == s3[i + j - 1]) or
                (memo[j - 1] and s1[j - 1] == s3[i + j - 1])
            )

    return memo[-1]
```

Time: O(m \* n), m = len(s1), n = len(s2)

Space: O(m)
