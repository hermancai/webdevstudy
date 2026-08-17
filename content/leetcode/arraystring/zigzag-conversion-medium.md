## title

Zigzag Conversion (Medium)

## question

<a href="https://leetcode.com/problems/zigzag-conversion/description" target="_blank">Zigzag Conversion</a> (Medium)

The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this:

```py
# P   A   H   N
# A P L S I I G
# Y   I   R
```

And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number of rows.

## answer

```py
def convert(s: str, numRows: int) -> str:
    if numRows == 1 or numRows == len(s):
        return s

    # Create buckets per row and add chars in order
    answer = [""] * numRows
    row = 0
    direction = -1

    for char in s:
        answer[row] += char

        if row == 0 or row == numRows - 1:
            direction *= -1

        row += direction

    return "".join(answer)
```

Time: O(n)

Space: O(n)

<br />

Alternative solution:

```py
# Draw outputs to find the pattern per row
# rows = 3; gap = 4     rows = 4; gap = 6       rows = 5; gap = 8
# 0   4   8    12       0     6       12        0       8
# 1 3 5 7 9 11 13       1   5 7    11 13        1     7 9
# 2   6   10            2 4   8 10              2   6   10
#                       3     9                 3 5     11 13
#                                               4       12
def convert(s: str, numRows: int) -> str:
    if numRows == 1 or numRows >= len(s):
        return s

    # Add chars per row
    answer = []
    gap = 2 * numRows - 2

    # First row
    i = 0
    while i < len(s):
        answer.append(s[i])
        i += gap

    # Middle rows have alternating index offsets
    for i in range(1, numRows - 1):
        currI = i
        frontOffset = gap - i * 2
        backOffset = gap - frontOffset
        while currI < len(s):
            answer.append(s[currI])
            currI += frontOffset
            if currI < len(s):
                answer.append(s[currI])
                currI += backOffset

    # Last row
    i = numRows - 1
    while i < len(s):
        answer.append(s[i])
        i += gap

    return "".join(answer)
```

Time: O(n)

Space: O(n)
