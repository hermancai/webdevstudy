## title

Length of Last Word (Easy)

## question

<a href="https://leetcode.com/problems/length-of-last-word/description" target="_blank">Length of Last Word</a> (Easy)

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1)
def lengthOfLastWord(s: str) -> int:
    i = len(s) - 1
    while s[i] == " ":
        i -= 1

    count = 0
    while i >= 0 and s[i] != " ":
        i -= 1
        count += 1

    return count
```
