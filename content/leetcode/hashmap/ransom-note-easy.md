## title

Ransom Note (Easy)

## question

<a href="https://leetcode.com/problems/ransom-note/description" target="_blank">Ransom Note</a> (Easy)

Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed by using the letters from `magazine` and `false` otherwise.

Each letter in `magazine` can only be used once in `ransomNote`.

## answer

```py
def canConstruct(ransomNote: str, magazine: str) -> bool:
    # Build frequency map
    charMap = {}
    for c in magazine:
        if c not in charMap:
            charMap[c] = 0
        charMap[c] += 1

    for c in ransomNote:
        if c not in charMap or charMap[c] == 0:
            return False
        charMap[c] -= 1

    return True
```

Time: O(n)

Space: O(n)
