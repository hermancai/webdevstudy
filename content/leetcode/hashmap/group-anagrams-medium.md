## title

Group Anagrams (Medium)

## question

<a href="https://leetcode.com/problems/group-anagrams/description" target="_blank">Group Anagrams</a> (Medium)

Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## answer

```py
def groupAnagrams(strs: List[str]) -> List[List[str]]:
    m = {}

    # Anagrams always result in same sorted string. Use as key
    for word in strs:
        base = "".join(sorted(word))
        if base not in m:
            m[base] = [word]
        else:
            m[base].append(word)

    return list(m.values())
```

Time: O(n \* (k log k)) where n = len(strs), k = max(len(word))

Space: O(n \* k)

<br />

Alternative solution:

```py
def groupAnagrams(strs: List[str]) -> List[List[str]]:
    m = {}

    # Use char frequency as key
    for word in strs:
        buckets = [0] * 26
        for char in word:
            buckets[ord(char) - 97] += 1

        tup = tuple(buckets)
        if tup not in m:
            m[tup] = [word]
        else:
            m[tup].append(word)

    return list(m.values())
```

Time: O(n \* k)

Space: O(n \* k)
