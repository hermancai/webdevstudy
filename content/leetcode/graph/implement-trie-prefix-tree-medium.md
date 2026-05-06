## title

Implement Trie (Prefix Tree) (Medium)

## question

<a href="https://leetcode.com/problems/implement-trie-prefix-tree/description" target="_blank">Implement Trie (Prefix Tree)</a> (Medium)

A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

- `Trie()` Initializes the trie object.
- `void insert(String word)` Inserts the string `word` into the trie.
- `boolean search(String word)` Returns `true` if the string `word` is in the trie (i.e., was inserted before), and `false` otherwise.
- `boolean startsWith(String prefix)` Returns `true` if there is a previously inserted string `word` that has the prefix `prefix`, and `false` otherwise.

## answer

```py
class Trie:
    def __init__(self):
        # Nested dictionaries to simulate a graph
        # Example: "apple" -> {a: {p: {p: {l: {e: {"#": "#"}}}}}}
        self.graph = {}

    def insert(self, word: str) -> None:
        # Traverse nested levels, registering char if needed
        level = self.graph
        for c in word:
            if c not in level:
                level[c] = {}
            level = level[c]
        # Use "#" to signal end of a word
        level["#"] = "#"

    def search(self, word: str) -> bool:
        level = self.graph
        for c in word:
            if c not in level:
                return False
            level = level[c]
        return True if "#" in level else False

    def startsWith(self, prefix: str) -> bool:
        level = self.graph
        for c in prefix:
            if c not in level:
                return False
            level = level[c]
        return True
```

Alternative solution:

```py
# Use a custom node class instead of nested dictionaries
class TrieNode:
    def __init__(self):
        # children -> {"a": TrieNode, "b": TrieNode, ...}
        self.children = {}
        self.completeWord = False
```
