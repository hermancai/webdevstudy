## title

Construct Quad Tree (Medium)

## question

<a href="https://leetcode.com/problems/construct-quad-tree/description" target="_blank">Construct Quad Tree</a> (Medium)

Given a `n * n` matrix `grid` of `0's` and `1's` only, represent `grid` with a Quad-Tree.

Return the root of the Quad-Tree representing `grid`.

A Quad-Tree is a tree data structure in which each internal node has exactly four children. Each node has two attributes:

- `val`: `True` if the node represents a grid of `1's` or `False` if the node represents a grid of `0's`.
- `isLeaf`: `True` if the node is a leaf node on the tree or `False` if the node has four children.

```py
# Definition for a QuadTree node.
class Node:
    def __init__(self, val, isLeaf, topLeft, topRight, bottomLeft, bottomRight):
        self.val = val
        self.isLeaf = isLeaf
        self.topLeft = topLeft
        self.topRight = topRight
        self.bottomLeft = bottomLeft
        self.bottomRight = bottomRight
```

Construct a Quad-Tree from a two-dimensional area using the following steps:

- If the current grid has the same value (i.e all `1's` or all `0's`), set `isLeaf` `True` and set `val` to the value of the grid and set the four children to `Null` and stop.
- If the current grid has different values, set `isLeaf` to `False` and set `val` to any value and divide the current grid into four sub-grids.
- Recurse for each of the children with the proper sub-grid.

## answer

```py
def construct(grid: List[List[int]]) -> 'Node':
    def helper(rowStart, rowEnd, colStart, colEnd):
        # Split grid into quadrants until base case of single square
        if rowStart == rowEnd:
            return Node(grid[rowStart][colStart], True)

        rowMid = (rowStart + rowEnd) // 2
        colMid = (colStart + colEnd) // 2

        topLeft = helper(rowStart, rowMid, colStart, colMid)
        topRight = helper(rowStart, rowMid, colMid + 1, colEnd)
        bottomLeft = helper(rowMid + 1, rowEnd, colStart, colMid)
        bottomRight = helper(rowMid + 1, rowEnd, colMid + 1, colEnd)

        # isLeaf condition: all children are leaves and have same val
        if topLeft.isLeaf and topRight.isLeaf and bottomLeft.isLeaf and bottomRight.isLeaf:
            if topLeft.val == topRight.val == bottomLeft.val == bottomRight.val:
                return Node(topLeft.val, True)
        return Node(False, False, topLeft, topRight, bottomLeft, bottomRight)

    return helper(0, len(grid) - 1, 0, len(grid) - 1)
```

Time: O(n<sup>2</sup>)

Space: O(n<sup>2</sup>)
