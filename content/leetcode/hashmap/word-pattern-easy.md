## title

Word Pattern (Easy)

## question

<a href="https://leetcode.com/problems/word-pattern/description" target="_blank">Word Pattern</a> (Easy)

Given a pattern and a string `s`, find if `s` follows the same pattern.

Here 'follow' means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

Example: Input `pattern = "abba", s = "dog cat cat dog"` Output `true`

## answer

```py
def convertPatternToTuple(string: str) -> tuple:
    # Example: "dog cat cat dog" -> (0, 1, 1, 0)
    def wordsToTuple(words: str) -> tuple:
        m, i, result = {}, 0, []
        words = words.split()

        for word in words:
            if word not in m:
                m[word] = i
                i += 1
            result.append(m[word])

        return tuple(result)

    # Example: "abba" -> (0, 1, 1, 0)
    def patternToTuple(pattern: str) -> tuple:
        m, i, result = {}, 0, []

        for c in pattern:
            if c not in m:
                m[c] = i
                i += 1
            result.append(m[c])

        return tuple(result)

    return patternToTuple(pattern) == wordsToTuple(s)
```

Time: O(n)

Space: O(n)

<br />

Alternative solution:

```py
def convertPatternToTuple(string: str) -> tuple:
    # Use two maps for word -> char and char -> word
    wordMap, charMap = {}, {}
    words = s.split()

    if len(pattern) != len(words):
        return False

    for i in range(len(pattern)):
        char = pattern[i]
        word = words[i]

        if char in charMap and charMap[char] != word:
            return False
        if word in wordMap and wordMap[word] != char:
            return False

        charMap[char] = word
        wordMap[word] = char

    return True
```

Time: O(n)

Space: O(n)
