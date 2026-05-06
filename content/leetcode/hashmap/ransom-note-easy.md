## title

Ransom Note (Easy)

## question

<a href="https://leetcode.com/problems/ransom-note/description" target="_blank">Ransom Note</a> (Easy)

Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed by using the letters from `magazine` and `false` otherwise.

Each letter in `magazine` can only be used once in `ransomNote`.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(n)
def canConstruct(ransomNote: str, magazine: str) -> bool:
    m = {}
    for c in magazine:
        m[c] = m.get(c, 0) + 1

    for c in ransomNote:
        if c not in m or m[c] == 0:
            return False
        m[c] -= 1
    return True
```
