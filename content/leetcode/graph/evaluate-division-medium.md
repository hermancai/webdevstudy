## title

Evaluate Division (Medium)

## question

<a href="https://leetcode.com/problems/evaluate-division/description" target="_blank">Evaluate Division</a> (Medium)

You are given an array of variable pairs `equations` and an array of real numbers `values`, where `equations[i] = [Ai, Bi]` and `values[i]` represent the equation `Ai / Bi = values[i]`. Each `Ai` or `Bi` is a string that represents a single variable.

You are also given some `queries`, where `queries[j] = [Cj, Dj]` represents the `j`<sup>th</sup> query where you must find the answer for `Cj / Dj = ?`.

Return the answers to all queries. If a single answer cannot be determined, return `-1.0`.

Assume the input is always valid. Evaluating the queries will not result in division by zero and there is no contradiction.

Variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.

## answer

```py
def calcEquation(equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
    # Build weighted graph using nested map
    # { val: { neighbor: weight } }
    m = {}
    for i in range(len(equations)):
        x, y = equations[i]
        if x not in m:
            m[x] = { y: values[i] }
        else:
            m[x][y] = values[i]
        # Include reciprocal as weight in opposite direction
        if y not in m:
            m[y] = { x: 1 / values[i] }
        else:
            m[y][x] = 1 / values[i]

    # Iterative depth first search
    def findPath(start, end):
        if start not in m or end not in m:
            return -1

        # Stack stores (value, product of current path)
        # If (a / b = x) and (b / c = y) then (a / c = x * y)
        visited, stack = set(), [(start, 1)]

        while stack:
            curr, product = stack.pop()
            if curr == end:
                return product

            visited.add(curr)
            for neighbor, weight in m[curr].items():
                if neighbor not in visited:
                    stack.append((neighbor, weight * product))

        return -1

    return [findPath(x, y) for x, y in queries]
```

Time: O(Q \* (V + E)), Q = queries, V = vertices, E = edges

Space: O(V + E)
