## title

Spiral Matrix (Medium)

## question

<a href="https://leetcode.com/problems/spiral-matrix/description" target="_blank">Spiral Matrix</a> (Medium)

Given an `m x n` `matrix`, return all elements of the `matrix` in spiral order.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(n)
def spiralOrder(matrix: List[List[int]]) -> List[int]:
    answer = []
    rowStart, rowEnd = 0, len(matrix) - 1
    colStart, colEnd = 0, len(matrix[0]) - 1

    while rowStart <= rowEnd and colStart <= colEnd:
        # Top row
        for j in range(colStart, colEnd + 1):
            answer.append(matrix[rowStart][j])
        rowStart += 1

        # Right column
        for j in range(rowStart, rowEnd + 1):
            answer.append(matrix[j][colEnd])
        colEnd -= 1

        # Bottom row, might be same as top row
        if rowStart <= rowEnd:
            for j in range(colEnd, colStart - 1, -1):
                answer.append(matrix[rowEnd][j])
        rowEnd -= 1

        # Left column, might be same as right column
        if colStart <= colEnd:
            for j in range(rowEnd, rowStart - 1, -1):
                answer.append(matrix[j][colStart])
        colStart += 1

    return answer
```
