## title

Word Pattern (Easy)

## question

<a href="https://leetcode.com/problems/word-pattern/description" target="_blank">Word Pattern</a> (Easy)

Given a pattern and a string `s`, find if `s` follows the same pattern.

Here 'follow' means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

Example: Input `pattern = "abba", s = "dog cat cat dog"` Output `true`

## answer

```py
# Time complexity: O(n)
# Space complexity: O(n)

# Example: "abba" -> (0, 1, 1, 0)
def convertPatternToTuple(string: str) -> tuple:
    m = {}
    count = 0
    result = []

    for c in string:
        if c in m:
            result.append(m[c])
        else:
            m[c] = count
            result.append(count)
            count += 1
    return tuple(result)

# Example: "dog cat cat dog" -> (0, 1, 1, 0)
def convertWordsToTuple(words: str) -> tuple:
    m = {}
    count = 0
    result = []
    words = words.split()

    for word in words:
        if word in m:
            result.append(m[word])
        else:
            m[word] = count
            result.append(count)
            count += 1
    return tuple(result)

def wordPattern(pattern: str, s: str) -> bool:
    return convertPatternToTuple(pattern) == convertWordsToTuple(s)
```
