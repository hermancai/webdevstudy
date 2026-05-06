## title

Letter Combinations of a Phone Number (Medium)

## question

<a href="https://leetcode.com/problems/letter-combinations-of-a-phone-number/description" target="_blank">Letter Combinations of a Phone Number</a> (Medium)

Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

```py
# 1(---)   2(abc)   3(def)
# 4(ghi)   5(jkl)   6(mno)
# 7(pqrs)  8(tuv)   9(wxyz)
```

## answer

```py
# Time complexity: O(N * 4^N) where N = length of digits
# Space complexity: O(N * 4^N)
#   The extra N is due to string contatenation.
def letterCombinations(digits: str) -> List[str]:
    if not digits:
        return []

    chars = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    answer = []
    dfs(digits, chars, answer, "")
    return answer

def dfs(digits, chars, answer, currStr) -> None:
    if len(currStr) >= len(digits):
        answer.append(currStr)
        return

    # len(currStr) corresponds with current index of digits
    for c in chars[digits[len(currStr)]]:
        dfs(digits, chars, answer, currStr + c)
```

Alternative solution:

```py
from collections import deque

# Time complexity: O(N * 4^N) where N = length of digits
# Space complexity: O(N * 4^N)
def letterCombinations(digits: str) -> List[str]:
    if not digits:
        return []

    chars = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    q = deque()
    q.append("")

    # Incrementally add chars to each string in q
    # Loop until q only contains strings with equal length to digits
    while len(q[0]) != len(digits):
        currStr = q.popleft()
        # Length of currStr corresponds with current index of digits
        # E.g. currStr = "d"; digits = "357" -> loop through chars[5]
        for c in chars[digits[len(currStr)]]:
            q.append(currStr + c)

    return q
```
