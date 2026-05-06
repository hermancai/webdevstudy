## title

Find the Index of the First Occurrence in a String (Easy)

## question

<a href="https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description" target="_blank">Find the Index of the First Occurrence in a String</a> (Easy)

Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1)
def strStr(haystack: str, needle: str) -> int:
    i = 0
    matchCount = 0

    while i < len(haystack):
        if haystack[i] == needle[matchCount]:
            matchCount += 1
        else: # Reset search
            i -= matchCount
            matchCount = 0

        if matchCount == len(needle):
            return i - len(needle) + 1
        i += 1

    return -1
```
