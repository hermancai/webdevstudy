## title

Word Search (Medium)

## question

<a href="https://leetcode.com/problems/word-search/description" target="_blank">Word Search</a> (Medium)

Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

## answer

```py
# Time complexity: O(n * m * 4^k) where n, m = board dimensions; k = length of word
# Space complexity: O(k)
def exist(board: List[List[str]], word: str) -> bool:
    for r in range(len(board)):
        for c in range(len(board[0])):
            if board[r][c] != word[0]:
                continue
            if helper(board, word, 0, r, c):
                return True
    return False

def helper(board, word, index, row, col) -> bool:
    if row < 0 or row >= len(board) or col < 0 or col >= len(board[0]):
        return False
    if board[row][col] != word[index]:
        return False

    if index == len(word) - 1:
        return True

    board[row][col] = ""  # Mark as visited
    found = (
        helper(board, word, index + 1, row - 1, col) or
        helper(board, word, index + 1, row, col + 1) or
        helper(board, word, index + 1, row + 1, col) or
        helper(board, word, index + 1, row, col - 1)
    )
    board[row][col] = word[index]  # Revert visited
    return found
```
