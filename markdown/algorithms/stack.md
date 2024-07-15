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

**question**

<a href="https://leetcode.com/problems/simplify-path/description" target="_blank">Simplify Path</a> (Medium)

Given an absolute path for a Unix-style file system, which begins with a slash `'/'`, transform this path into its simplified canonical path.

In Unix-style file system context, a single period `'.'` signifies the current directory, a double period `".."` denotes moving up one directory level, and multiple slashes such as `"//"` are interpreted as a single slash. In this problem, treat sequences of periods not covered by the previous rules (like `"..."`) as valid names for files or directories.

The simplified canonical path should adhere to the following rules:

-   It must start with a single slash `'/'`.
-   Directories within the path should be separated by only one slash `'/'`.
-   It should not end with a slash `'/'`, unless it's the root directory.
-   It should exclude any single or double periods used to denote current or parent directories.

Return the new path.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(n)
def simplifyPath(path: str) -> str:
    path = path.split("/")
    final = []

    for s in path:
        # path may contain empty strings after split()
        if not s or s == ".":
            continue
        if s == "..":
            if final:
                final.pop()
        else:
            final.append(s)

    return "/" + "/".join(final)
```

**question**

<a href="https://leetcode.com/problems/min-stack/description" target="_blank">Min Stack</a> (Medium)

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:

-   `MinStack()` initializes the stack object.
-   `void push(int val)` pushes the element val onto the stack.
-   `void pop()` removes the element on the top of the stack.
-   `int top()` gets the top element of the stack.
-   `int getMin()` retrieves the minimum element in the stack.

Assume methods `pop`, `top` and `getMin` will always be called on non-empty stacks.

**answer**

```py
class MinStack:
    def __init__(self):
        self.stack = []

    def push(self, val: int) -> None:
        if not self.stack:
            self.stack.append((val, val))
        else:
            self.stack.append((val, min(val, self.stack[-1][1])))

    def pop(self) -> None:
        self.stack.pop()

    def top(self) -> int:
        return self.stack[-1][0]

    def getMin(self) -> int:
        return self.stack[-1][1]
```

**question**

<a href="https://leetcode.com/problems/evaluate-reverse-polish-notation/description" target="_blank">Evaluate Reverse Polish Notation</a> (Medium)

You are given an array of strings `tokens` that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

-   The valid operators are `'+'`, `'-'`, `'*'`, and `'/'`.
-   Each operand may be an integer or another expression.
-   The division between two integers always truncates toward zero.
-   There will not be any division by zero.
-   The input represents a valid arithmetic expression in a reverse polish notation.
-   The answer and all the intermediate calculations can be represented in a 32-bit integer.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(n)
def evalRPN(tokens: List[str]) -> int:
    operator = set(["+", "-", "*", "/"])
    s = []

    for t in tokens:
        if t not in operator:
            s.append(int(t))
        else:
            second = s.pop()
            first = s.pop()
            if t == "+":
                s.append(first + second)
            elif t == "-":
                s.append(first - second)
            elif t == "*":
                s.append(first * second)
            else:
                s.append(int(first / second))
    return s[0]
```
