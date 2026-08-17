## title

Longest Common Prefix (Easy)

## question

<a href="https://leetcode.com/problems/longest-common-prefix/description" target="_blank">Longest Common Prefix</a> (Easy)

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

## answer

```py
def longestCommonPrefix(strs: List[str]) -> str:
    if len(strs) == 0:
        return ""

    for i in range(len(strs[0])):
        for word in strs:
            if i >= len(word) or word[i] != strs[0][i]:
                return strs[0][:i]

    return strs[0]
```

Time: O(n \* m) where m is length of shortest word

Space: O(1)
