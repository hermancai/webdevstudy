## title

Isosmorphic Strings (Easy)

## question

<a href="https://leetcode.com/problems/isomorphic-strings/description" target="_blank">Isomorphic Strings</a> (Easy)

Given two strings `s` and `t`, determine if they are isomorphic.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself. Assume `s.length == t.length`.

## answer

```py
def isIsomorphic(self, s: str, t: str) -> bool:
    # Use two maps for s -> t and t -> s
    sMap, tMap = {}, {}

    for i in range(len(s)):
        charS, charT = s[i], t[i]
        if charS in sMap and sMap[charS] != charT:
            return False
        if charT in tMap and tMap[charT] != charS:
            return False

        sMap[charS] = charT
        tMap[charT] = charS

    return True
```

Time: O(n)

Space: O(n)

NOTE: The solution for "Word Pattern" can also be used to solve this problem.
