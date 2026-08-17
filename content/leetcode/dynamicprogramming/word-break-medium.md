## title

Word Break (Medium)

## question

<a href="https://leetcode.com/problems/word-break/description" target="_blank">Word Break</a> (Medium)

Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

## answer

```py
def wordBreak(s: str, wordDict: List[str]) -> bool:
    wordDict = set(wordDict)
    memo = [False] * (len(s) + 1)
    memo[0] = True  # Base case: empty string

    for i in range(1, len(s) + 1):
        # Nested loop to check current substring
        for prevChar in range(i):
            # s[i] corresponds with memo[i + 1]
            if memo[prevChar] and s[prevChar:i] in wordDict:
                memo[i] = True
                break

    return memo[-1]
```

Time: O(n<sup>3</sup>), n = len(s)

Space: O(n + m), m = wordDict size
