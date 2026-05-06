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

# Time complexity: O(n^2)
# Space complexity: O(n^2)
def snakesAndLadders(board: List[List[int]]) -> int:
    goal = len(board) * len(board)
    steps = {1: 0}  # Track steps to current square. Also tracks if visited
    q = deque()
    q.append(1)

    while q:
        step = q.popleft()
        # Looping backwards from +6 to +1 is an optimization
        # If square +6 is -1, squares +1 to +5 do not need to be checked
        #   if that square is also -1
        skipStep = False
        for i in range(min(goal, step + 6), step, -1):
            # Convert step to indices on board
            row = (i - 1) // len(board)
            col = (i - 1) % len(board)
            # ~ means invert bits (e.g. ~3 -> -4; 011 -> 100)
            # Used to get index from right. (~i) = -(i + 1)
            nextStep = board[~row][col if row % 2 == 0 else ~col]

            # Found snake/ladder
            if nextStep > 0:
                i = nextStep

            if i == goal:
                return steps[step] + 1

            # Found normal square. Can ignore lower normal squares
            if nextStep < 0:
                if skipStep:
                    continue
                skipStep = True

            if i not in steps:
                steps[i] = steps[step] + 1
                q.append(i)
    return -1
```
