## title

Length of Last Word (Easy)

## question

<a href="https://leetcode.com/problems/length-of-last-word/description" target="_blank">Length of Last Word</a> (Easy)

Given a string `s` consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

`s` consists of only English letters and spaces `' '`. There will be at least one word in `s`.

## answer

```py
def lengthOfLastWord(s: str) -> int:
    right = len(s) - 1

    while s[right] == " ":
        right -= 1

    left = right - 1
    while left >= 0 and s[left] != " ":
        left -= 1

    return right - left
```

Time: O(n)

Space: O(1)
