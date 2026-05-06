## title

Group Anagrams (Medium)

## question

<a href="https://leetcode.com/problems/group-anagrams/description" target="_blank">Group Anagrams</a> (Medium)

Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## answer

```py
# Time complexity: O(n * m * log(m))
# Space complexity: O(n * m)
def groupAnagrams(strs: List[str]) -> List[List[str]]:
    answer = {}

    for word in strs:
        w = "".join(sorted(word))
        if w in answer:
            answer[w].append(word)
        else:
            answer[w] = [word]
    return list(answer.values())
```

Alternative solution:

```py
# Time complexity: O(n * m)
# Space complexity: O(n * m)
def groupAnagrams(strs: List[str]) -> List[List[str]]:
    m = {}
    for word in strs:
        # Use list to count char frequency
        chars = [0] * 26
        for char in word:
            chars[ord(char) - 97] += 1
        # Use frequency as map key
        tup = tuple(chars)
        if tup in m:
            m[tup].append(word)
        else:
            m[tup] = [word]

    return [m[tup] for tup in m]
```
