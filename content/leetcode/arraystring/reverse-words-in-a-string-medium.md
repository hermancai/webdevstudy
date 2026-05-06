## title

Reverse Words in a String (Medium)

## question

<a href="https://leetcode.com/problems/reverse-words-in-a-string/description" target="_blank">Reverse Words in a String</a> (Medium)

Given an input string `s`, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in `s` will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that `s` may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(n)
def reverseWords(s: str) -> str:
    answer = []
    start = end = len(s) - 1

    while start >= 0:
        # Skip whitespace
        while s[start] == " ":
            start -= 1
            end -= 1
        # In case string starts with whitespace
        if start < 0:
            break
        # Find next word
        while start >= 1 and s[start - 1] != " ":
            start -= 1
        answer.append(s[start:end + 1])
        start -= 1
        end = start

    return " ".join(answer)
```
