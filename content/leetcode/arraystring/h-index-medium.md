## title

H-Index (Medium)

## question

<a href="https://leetcode.com/problems/h-index/description" target="_blank">H-Index</a> (Medium)

Given an array of integers `citations` where `citations[i]` is the number of citations a researcher received for their `i`<sup>th</sup> paper, return the researcher's h-index.

The h-index is defined as the maximum value of `h` such that the given researcher has published at least `h` papers that have each been cited at least `h` times.

## answer

```py
def hIndex(citations: List[int]) -> int:
    citations.sort(reverse = True)

    h = 0
    for i in range(len(citations)):
        if citations[i] >= i + 1:
            h += 1
        else:
            return h

    return h
```

Time: O(n log n)

Space: O(1) or O(n) due to python built-in sort()

<br />

Alternative solution

```py
def hIndex(citations: List[int]) -> int:
    # Get frequency
    buckets = [0] * (len(citations) + 1)
    for count in citations:
        if count >= len(citations):
            buckets[-1] += 1
        else:
            buckets[count] += 1

    count = 0
    for i in range(len(buckets) - 1, -1, -1):
        count += buckets[i]

        # Ex: count == i == 3 means at least 3 papers were cited 3 times
        if count >= i:
            return i

    return 0
```

Time: O(n)

Space: O(n)
