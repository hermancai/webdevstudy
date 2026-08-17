## title

Merge Intervals (Medium)

## question

<a href="https://leetcode.com/problems/merge-intervals/description" target="_blank">Merge Intervals</a> (Medium)

Given an array of `intervals` where `intervals[i] = [start<i>, end<i>]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

## answer

```py
def merge(intervals: List[List[int]]) -> List[List[int]]:
    intervals.sort()
    answer = [intervals[0]]

    for i in range(1, len(intervals)):
        if answer[-1][1] >= intervals[i][0]:
            answer[-1][1] = max(answer[-1][1], intervals[i][1])
        else:
            answer.append(intervals[i])

    return answer
```

Time: O(n log n)

Space: O(n) including output
