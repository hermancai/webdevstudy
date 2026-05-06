## title

H-Index (Medium)

## question

<a href="https://leetcode.com/problems/h-index/description" target="_blank">H-Index</a> (Medium)

Given an array of integers `citations` where `citations[i]` is the number of citations a researcher received for their `i`<sup>th</sup> paper, return the researcher's h-index.

The h-index is defined as the maximum value of `h` such that the given researcher has published at least `h` papers that have each been cited at least `h` times.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(n)
def hIndex(citations: List[int]) -> int:
    buckets = [0] * (len(citations) + 1)
    # Example: If current val = 2, increment buckets[2] by 1
    # Essentially, buckets index tracks frequency
    for val in citations:
        if val >= len(citations):
            buckets[-1] += 1
        else:
            buckets[val] += 1

    count = 0
    for i in range(len(buckets) - 1, -1, -1):
        count += buckets[i]
        # Example: count = i = 3 means at least 3 papers were cited 3 times
        if count >= i:
            return i
    return 0
```
