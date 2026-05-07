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
