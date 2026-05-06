## title

Longest Substring Without Repeating Characters (Medium)

## question

<a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/description" target="_blank">Longest Substring Without Repeating Characters</a> (Medium)

Given a string `s`, find the length of the longest substring without repeating characters.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(n)
def lengthOfLongestSubstring(s: str) -> int:
    answer = start = end = 0
    m = {} # char : index

    while end < len(s):
        # Decrease window size to exclude duplicate
        if s[end] in m:
            start = max(start, m[s[end]] + 1)
        m[s[end]] = end
        end += 1
        answer = max(answer, end - start)
    return answer
```
