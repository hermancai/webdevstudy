## title

Generate Parentheses (Medium)

## question

<a href="https://leetcode.com/problems/generate-parentheses/description" target="_blank">Generate Parentheses</a> (Medium)

Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

## answer

```py
def generateParenthesis(n: int) -> List[str]:
    answer, li = [], []

    def dfs(openCount, closeCount):
        if openCount == closeCount == n:
            answer.append("".join(li))
            return

        if openCount < n:
            li.append("(")
            dfs(openCount + 1, closeCount)
            li.pop()

        if closeCount < openCount:
            li.append(")")
            dfs(openCount, closeCount + 1)
            li.pop()

    dfs(0, 0)
    return answer
```

Time: O(2<sup>n</sup>)

Space: O(n)
