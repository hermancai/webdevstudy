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
# Time complexity: O(n)
# Space complexity: O(n)
def convert(s: str, numRows: int) -> str:
    if numRows == 1 or numRows >= len(s):
        return s

    # 2D matrix representing zigzag
    answer = [[] for _ in range(numRows)]

    # Sequentially place characters into the appropriate row
    i = 0
    while i < len(s):
        # Filling in columns
        for idx in range(numRows):
            if i >= len(s):
                break
            answer[idx].append(s[i])
            i += 1
        # Filling in diagonals
        for idx in range(numRows - 2, 0, -1):
            if i >= len(s):
                break
            answer[idx].append(s[i])
            i += 1

    return "".join(["".join(row) for row in answer])
```

Alternative solution:

- This solution relies on finding the numerical pattern between indices per row.
- To see the pattern, create the expected output and zigzag for cases `numRows = 3, 4, and 5`.

```py
# Time complexity: O(n)
# Space complexity: O(n)
def convert(s: str, numRows: int) -> str:
    if numRows == 1 or numRows >= len(s):
        return s

    answer = []
    # Index difference between columns in the same row
    offset = numRows * 2 - 2

    # Handle first row
    i = 0
    while i < len(s):
        answer.append(s[i])
        i += offset

    for i in range(1, numRows - 1):
        # Middle rows will have alternating index differences
        flip = False
        offset1 = (numRows - i - 1) * 2
        offset2 = offset - offset1
        idx = i
        while idx < len(s):
            answer.append(s[idx])
            idx += offset2 if flip else offset1
            flip = not flip

    # Handle last row
    i = numRows - 1
    while i < len(s):
        answer.append(s[i])
        i += offset

    return "".join(answer)
```
