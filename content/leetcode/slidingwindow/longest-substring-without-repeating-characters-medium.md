## title

Longest Substring Without Repeating Characters (Medium)

## question

<a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/description" target="_blank">Longest Substring Without Repeating Characters</a> (Medium)

Given a string `s`, find the length of the longest substring without repeating characters.

## answer

```py
def lengthOfLongestSubstring(s: str) -> int:
    cSet = set()
    answer = 0
    left = 0

    # Expand window
    for right in range(len(s)):
        # Shrink window if duplicate found
        while s[right] in cSet:
            cSet.remove(s[left])
            left += 1

        cSet.add(s[right])
        answer = max(answer, right - left + 1)

    return answer
```

Time: O(n)

Space: O(n)
