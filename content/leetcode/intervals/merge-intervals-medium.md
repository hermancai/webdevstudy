## title

Merge Intervals (Medium)

## question

<a href="https://leetcode.com/problems/merge-intervals/description" target="_blank">Merge Intervals</a> (Medium)

Given an array of `intervals` where `intervals[i] = [start<i>, end<i>]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

## answer

```py
# Time complexity: O(n * log(n))
# Space complexity: O(1) excluding output
def merge(intervals: List[List[int]]) -> List[List[int]]:
    intervals.sort()
    answer = []
    curr = intervals[0]

    for pair in intervals:
        if pair[0] <= curr[1]:
            curr[1] = max(pair[1], curr[1])
        else:
            answer.append(curr)
            curr = pair
    answer.append(curr)
    return answer
```
