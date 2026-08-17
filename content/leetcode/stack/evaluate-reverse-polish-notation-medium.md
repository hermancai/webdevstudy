## title

Evaluate Reverse Polish Notation (Medium)

## question

<a href="https://leetcode.com/problems/evaluate-reverse-polish-notation/description" target="_blank">Evaluate Reverse Polish Notation</a> (Medium)

You are given an array of strings `tokens` that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

- The valid operators are `'+'`, `'-'`, `'*'`, and `'/'`.
- Each operand may be an integer or another expression.
- The division between two integers always truncates toward zero.
- There will not be any division by zero.
- The input represents a valid arithmetic expression in a reverse polish notation.
- The answer and all the intermediate calculations can be represented in a 32-bit integer.

## answer

```py
def evalRPN(tokens: List[str]) -> int:
    operators = {"+", "-", "*", "/"}
    stack = []

    for c in tokens:
        if c not in operators:
            stack.append(int(c))
            continue

        y = stack.pop()
        x = stack.pop()
        if c == "+":
            stack.append(x + y)
        elif c == "-":
            stack.append(x - y)
        elif c == "*":
            stack.append(x * y)
        else:
            stack.append(int(x / y))

    return stack[-1]
```

Time: O(n)

Space: O(n)
