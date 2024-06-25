**question**

<a href="https://leetcode.com/problems/ransom-note/description" target="_blank">Ransom Note</a> (Easy)

Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed by using the letters from `magazine` and `false` otherwise.

Each letter in `magazine` can only be used once in `ransomNote`.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(n)
def canConstruct(ransomNote: str, magazine: str) -> bool:
    m = {}
    for c in magazine:
        m[c] = m.get(c, 0) + 1

    for c in ransomNote:
        if c not in m or m[c] == 0:
            return False
        m[c] -= 1
    return True
```

**question**

<a href="https://leetcode.com/problems/isomorphic-strings/description" target="_blank">Isomorphic Strings</a> (Easy)

Given two strings `s` and `t`, determine if they are isomorphic.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself. Assume `s.length == t.length`.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(n)
def isIsomorphic(self, s: str, t: str) -> bool:
    s2t, t2s = {}, {}
    for i in range(len(s)):
        # Characters must have the same mapping in both directions
        if s[i] in s2t and s2t[s[i]] != t[i]:
            return False
        if t[i] in t2s and t2s[t[i]] != s[i]:
            return False
        s2t[s[i]] = t[i]
        t2s[t[i]] = s[i]
    return True
```

NOTE: The solution for "Word Pattern" can also be used to solve this problem.

**question**

<a href="https://leetcode.com/problems/word-pattern/description" target="_blank">Word Pattern</a> (Easy)

Given a pattern and a string `s`, find if `s` follows the same pattern.

Here 'follow' means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

Example: Input `pattern = "abba", s = "dog cat cat dog"` Output `true`

**answer**

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

**question**

<a href="https://leetcode.com/problems/valid-anagram/description" target="_blank">Valid Anagram</a> (Easy)

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(n)
def isAnagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False

    m = {}
    for c in s:
        m[c] = m.get(c, 0) + 1

    for c in t:
        if c not in m or m[c] == 0:
            return False
        m[c] -= 1
    return True
```

**question**

<a href="https://leetcode.com/problems/two-sum/description" target="_blank">Two Sum</a> (Easy)

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(n)
def twoSum(nums: List[int], target: int) -> List[int]:
    m = {}
    for i in range(len(nums)):
        comp = target - nums[i]
        if comp in m:
            return [i, m[comp]]
        m[nums[i]] = i
```

**question**

<a href="https://leetcode.com/problems/happy-number/description" target="_blank">Happy Number</a> (Easy)

Write an algorithm to determine if a number `n` is happy.

A happy number is a number defined by the following process:

-   Starting with any positive integer, replace the number by the sum of the squares of its digits.
-   Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
-   Those numbers for which this process ends in 1 are happy.

Return `true` if `n` is a happy number, and `false` if not.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(n)
def isHappy(n: int) -> bool:
    m = set()

    while True:
        if n in m:
            return False
        else:
            m.add(n)

        li = list(str(n))
        sum = 0
        for c in li:
            sum += int(c) ** 2
        if sum == 1:
            return True
        n = sum
```

**question**

<a href="https://leetcode.com/problems/contains-duplicate-ii/description" target="_blank">Contains Duplicate II</a> (Easy)

Given an integer array `nums` and an integer `k`, return `true` if there are two distinct indices `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(n)
def containsNearbyDuplicate(nums: List[int], k: int) -> bool:
    m = {}
    for i in range(len(nums)):
        if nums[i] not in m:
            m[nums[i]] = i
        else:
            if abs(i - m[nums[i]]) <= k:
                return True
            m[nums[i]] = i
    return False
```
