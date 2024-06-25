**question**

<a href="https://leetcode.com/problems/valid-parentheses/description" target="_blank">Valid Parentheses</a> (Easy)

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

-   Open brackets must be closed by the same type of brackets.
-   Open brackets must be closed in the correct order.
-   Every close bracket has a corresponding open bracket of the same type.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(n)
def isValid(s: str) -> bool:
    m = {
            "(": ")",
            "{": "}",
            "[": "]"
        }
    stack = []

    for c in s:
        if c in m:
            stack.append(c)
        else:
            if not stack:
                return False
            pair = stack.pop()
            if m[pair] != c:
                return False
    return len(stack) == 0
```
