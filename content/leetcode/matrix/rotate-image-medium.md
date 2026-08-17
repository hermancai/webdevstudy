## title

Rotate Image (Medium)

## question

<a href="https://leetcode.com/problems/rotate-image/description" target="_blank">Rotate Image</a> (Medium)

You are given an `n x n` 2D `matrix` representing an image, rotate the image by 90 degrees (clockwise).

Rotate the image in-place.

## answer

```py
def rotate(matrix: List[List[int]]) -> None:
    """
    Do not return anything, modify matrix in-place instead.
    """
    # To rotate clockwise, reverse list, then flip diagonal symmetry
    # 1 2 3     7 8 9     7 4 1
    # 4 5 6  => 4 5 6  => 8 5 2
    # 7 8 9     1 2 3     9 6 3
    matrix.reverse()

    for row in range(len(matrix)):
        for col in range(row + 1, len(matrix)):
            matrix[row][col], matrix[col][row] = matrix[col][row], matrix[row][col]
```

Time: O(n \* n)

Space: O(1)
