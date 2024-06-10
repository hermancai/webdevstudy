**question**

Create the normalized pattern of a string

**answer**

```py
# Essentially records the first appearance of each character
# Input: "abcaad"
# Output: [0, 1, 2, 0, 0, 3]
# Time complexity: O(n)
# Space complexity: O(n)
def stringPattern(s: str) -> List[int]:
    result = []
    charMap = {}
    count = 0

    for char in s:
        if char in charMap:
            result.append(charMap[char])
        else:
            result.append(count)
            charMap[char] = count
            count += 1
    return result
```

<a href="https://leetcode.com/problems/isomorphic-strings/description" target="_blank">205. Isomorphic Strings</a>

<a href="https://leetcode.com/problems/word-pattern/description" target="_blank">290. Word Pattern</a>
