## title

Word Search (Medium)

## question

<a href="https://leetcode.com/problems/word-search/description" target="_blank">Word Search</a> (Medium)

Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

## answer

```py
def exist(board: List[List[str]], word: str) -> bool:
    ROWS, COLS = len(board), len(board[0])
    directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]

    # Can optimize by preprocessing input
    # Create frequency map of board and word, compare and exit early

    def dfs(index, row, col):
        if not 0 <= row < ROWS or not 0 <= col < COLS or board[row][col] != word[index]:
            return False

        if index == len(word) - 1:
            return True

        # Mark as visited
        char = board[row][col]
        board[row][col] = ""

        for r, c in directions:
            if dfs(index + 1, row + r, col + c):
                return True

        board[row][col] = char
        return False

    for row in range(len(board)):
        for col in range(len(board[0])):
            if board[row][col] == word[0] and dfs(0, row, col):
                return True

    return False
```

Time: O(m _ n _ 3<sup>L</sup>), L = word length

Space: O(L)
