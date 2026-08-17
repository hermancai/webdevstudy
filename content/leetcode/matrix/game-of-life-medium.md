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
def gameOfLife(self, board: List[List[int]]) -> None:
    directions = [(-1, -1), (-1, 0), (-1, 1), (0, 1), (1, 1), (1, 0), (1, -1), (0, -1)]

    # 2 = is dead, will live; 3 = is live, will die
    for row in range(len(board)):
        for col in range(len(board[0])):
            # Count live neighbors of current cell
            liveNeighbors = 0
            for d in directions:
                r = row + d[0]
                c = col + d[1]
                if not 0 <= r < len(board) or not 0 <= c < len(board[0]):
                    continue
                if board[r][c] == 1 or board[r][c] == 3:
                    liveNeighbors += 1

            # Apply rules to get next state without overwriting current state
            if board[row][col] == 0:
                board[row][col] = 2 if liveNeighbors == 3 else 0
            else:
                if liveNeighbors != 2 and liveNeighbors != 3:
                    board[row][col] = 3

    # 2 -> 1; 3 -> 0
    for row in range(len(board)):
        for col in range(len(board[0])):
            if board[row][col] == 2:
                board[row][col] = 1
            elif board[row][col] == 3:
                board[row][col] = 0
```

Time: O(n \* m)

Space: O(1)
