## title

Find the Index of the First Occurrence in a String (Easy)

## question

<a href="https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description" target="_blank">Find the Index of the First Occurrence in a String</a> (Easy)

Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

## answer

```py
def strStr(haystack: str, needle: str) -> int:
    def isMatch(needle, haystack, start, end):
        if len(needle) != (end - start + 1):
            return False

        for i in range(len(needle)):
            if needle[i] != haystack[start]:
                return False
            start += 1

        return True

    # check for match when sliding window is correct size
    start = 0
    for end in range(len(haystack)):
        if (end - start + 1) == len(needle):
            if isMatch(needle, haystack, start, end):
                return start
            start += 1

    return -1
```

Time: O(n \* m) where n = len(haystack), m = len(needle)

Space: O(1)

<br />

There is an alternative solution with O(n + m) time and O(m) space using the Knuth–Morris–Pratt algorithm.
