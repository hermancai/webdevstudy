## title

Longest Common Prefix (Easy)

## question

<a href="https://leetcode.com/problems/longest-common-prefix/description" target="_blank">Longest Common Prefix</a> (Easy)

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

## answer

```py
# Time complexity: O(n*m) where m is length of shortest word
# Space complexity: O(1)
def longestCommonPrefix(strs: List[str]) -> str:
    answer = []

    # Find shortest word, which will contain answer
    shortestWord = strs[0]
    for word in strs:
        if len(word) < len(shortestWord):
            shortestWord = word

    for i in range(len(shortestWord)):
        for word in strs:
            if word[i] != shortestWord[i]:
                return "".join(answer)
        answer.append(shortestWord[i])

    return shortestWord
```
