## title

Game of Life (Medium)

## question

<a href="https://leetcode.com/problems/game-of-life/description" target="_blank">Game of Life</a> (Medium)

"The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an `m x n` grid of cells, where each cell has an initial state: live (represented by a `1`) or dead (represented by a `0`). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules:

- Any live cell with fewer than two live neighbors dies as if caused by under-population.
- Any live cell with two or three live neighbors lives on to the next generation.
- Any live cell with more than three live neighbors dies, as if by over-population.
- Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the `m x n` grid `board`, return the next state.

## answer

```py
# Time complexity: O(n * m)
# Space complexity: O(1)
def gameOfLife(self, board: List[List[int]]) -> None:
    neighbors = [(-1, -1), (-1, 0), (-1, 1), (0, 1), (1, 1), (1, 0), (1, -1), (0, -1)]

    for row in range(len(board)):
        for col in range(len(board[0])):
            # Count live neighbors
            count = 0
            for coord in neighbors:
                newRow = row + coord[0]
                newCol = col + coord[1]
                if newRow >= 0 and newRow < len(board) and newCol >= 0 and newCol < len(board[0]):
                    if board[newRow][newCol] == 1 or board[newRow][newCol] == 2:
                        count += 1

            # 2 = currently live, will die
            # 3 = currently dead, will live
            if board[row][col] == 1:
                if count < 2 or count > 3:
                    board[row][col] = 2
            elif board[row][col] == 0:
                if count == 3:
                    board[row][col] = 3

    # Convert 2 -> 0, 3 -> 1
    for row in range(len(board)):
        for col in range(len(board[0])):
            board[row][col] %= 2
```
