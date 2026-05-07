## title

Longest Palindromic Substring (Medium)

## question

<a href="https://leetcode.com/problems/longest-palindromic-substring/description" target="_blank">Longest Palindromic Substring</a> (Medium)

Given a string `s`, return the longest palindromic substring in `s`.

## answer

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
