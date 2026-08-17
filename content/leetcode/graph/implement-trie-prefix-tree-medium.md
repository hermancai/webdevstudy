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
        # Simulate graph nodes with nested maps. Use "#" to end word
        # "apple" -> {a: {p: {p: {l: {e: {"#": True}}}}}}
        self.head = {}

    def insert(self, word: str) -> None:
        node = self.head
        for char in word:
            if char not in node:
                node[char] = {}
            node = node[char]
        node["#"] = True

    def search(self, word: str) -> bool:
        node = self.head
        for char in word:
            if char not in node:
                return False
            node = node[char]
        return "#" in node

    def startsWith(self, prefix: str) -> bool:
        node = self.head
        for char in prefix:
            if char not in node:
                return False
            node = node[char]
        return True
```
