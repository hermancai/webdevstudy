## title

Triangle (Medium)

## question

<a href="https://leetcode.com/problems/triangle/description" target="_blank">Triangle</a> (Medium)

Given a `triangle` array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index `i` on the current row, you may move to either index `i` or index `i + 1` on the next row.

```py
# Example: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
#    2
#   3 4
#  6 5 7
# 4 1 8 3
# Output = 11
```

## answer

```py
def minimumTotal(triangle: List[List[int]]) -> int:
    # Bottom-up DP, modify triangle in-place instead of memoizing
    # Find path starting from bottom row up to root
    # Starting from root is also possible, but must handle boundaries
    for row in range(len(triangle) - 1, 0, -1):
        # Current row index is used to loop through upper row
        # Each element in upper row can choose from two elements in current row
        for col in range(row):
            triangle[row - 1][col] += min(triangle[row][col], triangle[row][col + 1])

    return triangle[0][0]
```

Time: O(n<sup>2</sup>)

Space: O(1)

<br />

Follow-up: Solve using O(n) space, n = len(triangle)

```py
def minimumTotal(triangle: List[List[int]]) -> int:
    # Bottom-up DP, storing path sums in 1D array
    # Can also just modify triangle in-place
    memo = triangle[-1][:]

    for row in range(len(triangle) - 2, -1, -1):
        for col in range(len(triangle[row])):
            memo[col] = triangle[row][col] + min(memo[col], memo[col + 1])
        # The last element in memo is discarded as rows move up
        # This pop is unnecessary, but illustrates how memo is used
        memo.pop()

    return memo[0]
```

Time: O(n<sup>2</sup>)

Space: O(n)
