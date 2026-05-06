## title

Valid Anagram (Easy)

## question

<a href="https://leetcode.com/problems/valid-anagram/description" target="_blank">Valid Anagram</a> (Easy)

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(n)
def isAnagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False

    m = {}
    for c in s:
        m[c] = m.get(c, 0) + 1

    for c in t:
        if c not in m or m[c] == 0:
            return False
        m[c] -= 1
    return True
```
