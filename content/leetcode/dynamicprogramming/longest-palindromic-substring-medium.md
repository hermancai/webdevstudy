## title

Longest Palindromic Substring (Medium)

## question

<a href="https://leetcode.com/problems/longest-palindromic-substring/description" target="_blank">Longest Palindromic Substring</a> (Medium)

Given a string `s`, return the longest palindromic substring in `s`.

## answer

```py
def longestPalindrome(s: str) -> str:
    # 2D array representing substring window indices
    # memo[left][right] = True --> s[left:right + 1] is palindrome
    memo = [[False for _ in s] for _ in s]
    answerStart = answerEnd = 0

    for right in range(len(s)):
        # Single char is always palindrome
        memo[right][right] = True

        for left in range(right):
            # If outer chars are equal:
            #   (right - left <= 2) string of 3 or less chars is always palindrome
            #   OR check if substring without outer chars is palindrome
            if s[left] == s[right] and (right - left <= 2 or memo[left + 1][right - 1]):
                memo[left][right] = True

                if right - left > answerEnd - answerStart:
                    answerStart, answerEnd = left, right

    return s[answerStart:answerEnd + 1]
```

Time: O(n<sup>2</sup>)

Space: O(n<sup>2</sup>)

<br />

Alternative solution:

```py
def longestPalindrome(s: str) -> str:
    def expand(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return left + 1, right - 1

    answerStart = answerEnd = 0

    # Find largest palindrome using every char as center
    for i in range(len(s)):
        # single char center
        oddL, oddR = expand(i, i)
        if answerEnd - answerStart < oddR - oddL:
            answerStart, answerEnd = oddL, oddR

        # two char center
        evenL, evenR = expand(i, i + 1)
        if answerEnd - answerStart < evenR - evenL:
            answerStart, answerEnd = evenL, evenR

    return s[answerStart: answerEnd + 1]
```

Time: O(n<sup>2</sup>)

Space: O(1)
