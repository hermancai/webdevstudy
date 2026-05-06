## title

Insert Interval (Medium)

## question

<a href="https://leetcode.com/problems/insert-interval/description" target="_blank">Insert Interval</a> (Medium)

You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [start<i>, end<i>]` represent the start and the end of the `i`<sup>th</sup> interval and `intervals` is sorted in ascending order by `start`. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.

Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by `start<i>` and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return `intervals` after the insertion.

Note that you don't need to modify `intervals` in-place. You can make a new array and return it.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1) excluding output
def insert(intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
    answer = []

    # Add non-overlapping intervals
    i = 0
    while i < len(intervals) and intervals[i][1] < newInterval[0]:
        answer.append(intervals[i])
        i += 1

    # Merge overlapping intervals
    while i < len(intervals) and intervals[i][0] <= newInterval[1]:
        newInterval[0] = min(newInterval[0], intervals[i][0])
        newInterval[1] = max(newInterval[1], intervals[i][1])
        i += 1
    answer.append(newInterval)

    # Add remaining intervals
    while i < len(intervals):
        answer.append(intervals[i])
        i += 1

    return answer
```
