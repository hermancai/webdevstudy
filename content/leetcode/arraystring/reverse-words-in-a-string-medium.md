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
def reverseWords(s: str) -> str:
    answer = []
    left = right = len(s) - 1

    # Loop backwards with two pointers. Find words, skip spaces
    while left >= 0:
        while left >= 0 and s[left] == " ":
            left -= 1
        right = left

        if left < 0:
            break

        while left >= 0 and s[left] != " ":
            left -= 1

        answer.append(s[left + 1: right + 1])
        right = left

    return " ".join(answer)
```

Time: O(n)

Space: O(n)
