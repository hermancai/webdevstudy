## title

Generate Parentheses (Medium)

## question

<a href="https://leetcode.com/problems/generate-parentheses/description" target="_blank">Generate Parentheses</a> (Medium)

Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

## answer

```py
# Time complexity: O(2^n)
# Space complexity: O(n)
def generateParenthesis(n: int) -> List[str]:
    answer = []
    helper(n, answer, [], 0, 0)
    return answer

def helper(n, answer, currLi, openCount, closeCount):
    # There can at most be n open parentheses,
    # and close parentheses cannot exceed open
    if openCount > n or closeCount > openCount:
        return

    if n == openCount and openCount == closeCount:
        answer.append("".join(currLi))
        return

    currLi.append("(")
    helper(n, answer, currLi, openCount + 1, closeCount)
    currLi.pop()

    currLi.append(")")
    helper(n, answer, currLi, openCount, closeCount + 1)
    currLi.pop()
```
