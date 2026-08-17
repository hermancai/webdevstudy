## title

Design Add and Seach Words Data Structure (Medium)

## question

<a href="https://leetcode.com/problems/design-add-and-search-words-data-structure/description" target="_blank">Design Add and Search Words Data Structure</a> (Medium)

Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the `WordDictionary` class:

- `WordDictionary()` Initializes the object.
- `void addWord(word)` Adds `word` to the data structure, it can be matched later.
- `bool search(word)` Returns `true` if there is any string in the data structure that matches `word` or `false` otherwise. `word` may contain dots `'.'` where dots can be matched with any letter.

## answer

```py
class WordDictionary:
    def __init__(self):
        # Simulate graph nodes with nested maps. Use "#" to end word
        # "apple" -> {a: {p: {p: {l: {e: {"#": True}}}}}}
        self.head = {}

    def addWord(self, word: str) -> None:
        node = self.head
        for char in word:
            if char not in node:
                node[char] = {}
            node = node[char]
        node["#"] = {}

    def search(self, word: str) -> bool:
        def dfs(i, charMap):
            if i >= len(word):
                return "#" in charMap

            char = word[i]

            if char != ".":
                if char not in charMap:
                    return False
                return dfs(i + 1, charMap[char])
            else:
                for key in charMap:
                    if dfs(i + 1, charMap[key]):
                        return True
                return False

        return dfs(0, self.head)
```
