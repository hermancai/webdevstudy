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
class TrieNode:
    def __init__(self):
        self.children = {}
        self.completeWord = False

class WordDictionary:
    def __init__(self):
        self.node = TrieNode()

    # Time complexity: O(N) where N = length of word
    def addWord(self, word: str) -> None:
        node = self.node
        for c in word:
            if c not in node.children:
                node.children[c] = TrieNode()
            node = node.children[c]
        node.completeWord = True

    # Time complexity: O(M) where M = number of TrieNodes
    def search(self, word: str) -> bool:
        return self.searchHelper(word, 0, self.node)

    def searchHelper(self, word: str, i: int, node: Optional["TrieNode"]) -> bool:
        # Note that len(word) is checked instead of len(word) - 1
        # This functions checks if the next char is in the current node's children
        if i == len(word):
            # At end of word, node points to node for last char
            return node.completeWord

        # Depth-first traversal
        if word[i] == ".":
            # Check all children
            for child in node.children.values():
                if self.searchHelper(word, i + 1, child):
                    return True
        else:
            # Standard check for one char
            if word[i] not in node.children:
                return False
            return self.searchHelper(word, i + 1, node.children[word[i]])

        return False
```
