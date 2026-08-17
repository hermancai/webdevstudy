## title

Valid Parentheses (Easy)

## question

<a href="https://leetcode.com/problems/valid-parentheses/description" target="_blank">Valid Parentheses</a> (Easy)

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

## answer

```py
def isValid(s: str) -> bool:
    pairs = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

    stack = []
    for char in s:
        if char in pairs:
            stack.append(char)
        else:
            if not stack:
                return False
            pair = stack.pop()
            if pairs[pair] != char:
                return False

    return len(stack) == 0
```

Time: O(n)

Space: O(n)
