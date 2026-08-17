## title

Snakes and Ladders (Medium)

## question

<a href="https://leetcode.com/problems/snakes-and-ladders/description" target="_blank">Snakes and Ladders</a> (Medium)

You are given an `n x n` integer matrix `board` where the cells are labeled from `1` to `n^2` in a Boustrophedon style starting from the bottom left of the board (i.e. `board[n - 1][0]`) and alternating direction each row.

You start on square `1` of the board. In each move, starting from square `curr`, do the following:

- Choose a destination square `next` with a label in the range `[curr + 1, min(curr + 6, n^2)]`.
    - This choice simulates the result of a standard 6-sided die roll: i.e., there are always at most 6 destinations, regardless of the size of the board.
- If `next` has a snake or ladder, you must move to the destination of that snake or ladder. Otherwise, you move to `next`.
- The game ends when you reach the square `n^2`.

A board square on row `r` and column `c` has a snake or ladder if `board[r][c] != -1`. The destination of that snake or ladder is `board[r][c]`. Squares `1` and `n^2` do not have a snake or ladder.

Note that you only take a snake or ladder at most once per move. If the destination to a snake or ladder is the start of another snake or ladder, you do not follow the subsequent snake or ladder.

Return the least number of moves required to reach the square `n^2`. If it is not possible to reach the square, return `-1`.

## answer

```py
from collections import deque

def snakesAndLadders(board: List[List[int]]) -> int:
    end = len(board) ** 2

    # Calculate coordinates now to avoid repeated work later
    coords = [None] * (end + 1)
    for square in range(1, end + 1):
        i = square - 1
        row = len(board) - (i // len(board)) - 1
        col = i % len(board)
        if (len(board) - row - 1) % 2 != 0:
            col = len(board) - col - 1
        coords[square] = (row, col)

    visited = [False] * (end + 1)
    visited[1] = True

    queue = deque([1])
    # Track number of rolls i.e. BFS level
    moves = 0

    while queue:
        for _ in range(len(queue)):
            curr = queue.popleft()
            for i in range(1, 7):
                if curr + i > end: continue

                row, col = coords[curr + i]
                newPos = board[row][col] if board[row][col] != -1 else curr + i

                # First time reaching square is guaranteed minimum moves
                if newPos == end:
                    return moves + 1

                if not visited[newPos]:
                    queue.append(newPos)
                    visited[newPos] = True

        # Increment after looping because value applies to
        #   nodes in queue before popping
        moves += 1

    return -1
```

Time: O(n<sup>2</sup>)

Space: O(n<sup>2</sup>)
