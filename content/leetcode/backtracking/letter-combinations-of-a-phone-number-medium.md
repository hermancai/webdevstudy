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
def letterCombinations(digits: str) -> List[str]:
    m = {
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

    def dfs(i, currStrList):
        if i == len(digits):
            answer.append("".join(currStrList))
            return

        for char in m[digits[i]]:
            currStrList.append(char)
            dfs(i + 1, currStrList)
            currStrList.pop()

    dfs(0, [])
    return answer
```

Time: O(n \* 4<sup>n</sup>), n = digits length

Space: O(n \* 4<sup>n</sup>) or O(n) excluding output

<br />

Alternative solution:

```py
from collections import deque

def letterCombinations(digits: str) -> List[str]:
    if not digits:
        return []

    m = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    queue = deque([""])

    # BFS, building strings until matching string length
    while len(queue[0]) != len(digits):
        curr = queue.popleft()
        for char in m[digits[len(curr)]]:
            queue.append(curr + char)

    return list(queue)
```

Time: O(n \* 4<sup>n</sup>)

Space: O(n \* 4<sup>n</sup>)
