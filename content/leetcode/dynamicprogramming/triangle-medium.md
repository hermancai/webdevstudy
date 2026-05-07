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
# Time complexity: O(n^2)
# Space complexity: O(1)
def minimumTotal(triangle: List[List[int]]) -> int:
    # Bottom-up DP
    # Space optimization: modify triangle in-place instead of memoization

    # Start from last row in triangle, which is inherently already solved
    for currRow in range(len(triangle) - 1, 0, -1):
        # In the upper row, each value is a parent to two values in the current row
        #   The lower of those two values is used to create a potential min path
        upperRow = currRow - 1
        for i in range(currRow):
            triangle[upperRow][i] += min(triangle[currRow][i], triangle[currRow][i + 1])
    return triangle[0][0]
```

Alternative solution:

```py
# Time complexity: O(n^2)
# Space complexity: O(1)
def minimumTotal(triangle: List[List[int]]) -> int:
    # Top-down DP
    # Space optimization: modify triangle in-place instead of memoization

    # Starting from second row, building from root
    for currRow in range(1, len(triangle)):
        # Modify the current row using the upper row
        upperRow = currRow - 1
        for i in range(len(triangle[currRow])):
            # The first and last values in a row only have one path choice
            if i == 0:
                triangle[currRow][i] += triangle[upperRow][i]
            elif i == currRow:
                triangle[currRow][i] += triangle[upperRow][i - 1]
            else:
                triangle[currRow][i] += min(triangle[upperRow][i], triangle[upperRow][i - 1])
    return min(triangle[-1])
```
