## title

Word Break (Medium)

## question

<a href="https://leetcode.com/problems/word-break/description" target="_blank">Word Break</a> (Medium)

Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

## answer

```py
# Time complexity: O(n^3) where n = length of s
# Space complexity: O(n + m) where m = length of wordDict
def wordBreak(s: str, wordDict: List[str]) -> bool:
    wordDict = set(wordDict)
    # Memo offset index by 1 to include base case of empty string
    memo = [False] * (len(s) + 1)
    memo[0] = True

    # Build answer starting with smallest substring
    for end in range(1, len(s) + 1):
        # Must do repeated checks because substring may be valid in multiple ways
        for start in range(0, end):
            # If the current word window exists in wordDict and the substring
            #   immediately before the current word window is valid,
            #   s[0:end + 1] is valid
            # Remember that memo[start] corresponds with s[start - 1]
            if memo[start] and s[start:end] in wordDict:
                    memo[end] = True
                    break
    return memo[-1]
```
