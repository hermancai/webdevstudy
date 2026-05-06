## title

Isosmorphic Strings (Easy)

## question

<a href="https://leetcode.com/problems/isomorphic-strings/description" target="_blank">Isomorphic Strings</a> (Easy)

Given two strings `s` and `t`, determine if they are isomorphic.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself. Assume `s.length == t.length`.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(n)
def isIsomorphic(self, s: str, t: str) -> bool:
    s2t, t2s = {}, {}
    for i in range(len(s)):
        # Characters must have the same mapping in both directions
        if s[i] in s2t and s2t[s[i]] != t[i]:
            return False
        if t[i] in t2s and t2s[t[i]] != s[i]:
            return False
        s2t[s[i]] = t[i]
        t2s[t[i]] = s[i]
    return True
```

NOTE: The solution for "Word Pattern" can also be used to solve this problem.
