## title

Rotate Image (Medium)

## question

<a href="https://leetcode.com/problems/rotate-image/description" target="_blank">Rotate Image</a> (Medium)

You are given an `n x n` 2D `matrix` representing an image, rotate the image by 90 degrees (clockwise).

Rotate the image in-place.

## answer

```py
# Time complexity: O(n * n)
# Space complexity: O(1)
def rotate(matrix: List[List[int]]) -> None:
    """
    Do not return anything, modify matrix in-place instead.
    """
    matrix.reverse()

    # Transpose matrix
    for i in range(len(matrix)):
        for j in range(i + 1, len(matrix)):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

# Transpose means to swap rows and columns:
# 1 2 3      1 4 7
# 4 5 6  ->  2 5 8
# 7 8 9      3 6 9
```

To rotate counterclockwise, reverse each nested list, then transpose.
