## title

Roman to Integer (Easy)

## question

<a href="https://leetcode.com/problems/roman-to-integer/description" target="_blank">Roman to Integer</a> (Easy)

Roman numerals are represented by seven different symbols: I (1), V (5), X (10), L (50), C (100), D (500), and M (1000).

I can be placed before V (5) and X (10) to make 4 and 9.

X can be placed before L (50) and C (100) to make 40 and 90.

C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

## answer

```py
def romanToInt(s: str) -> int:
    m = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    answer = 0

    # If the next char is greater than current char, subtract instead of add
    for i in range(len(s) - 1):
        if m[s[i]] < m[s[i + 1]]:
            answer -= m[s[i]]
        else:
            answer += m[s[i]]

    answer += m[s[-1]]
    return answer
```

Time: O(n)

Space: O(1)
