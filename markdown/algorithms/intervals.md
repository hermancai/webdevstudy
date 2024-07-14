**question**

<a href="https://leetcode.com/problems/summary-ranges/description" target="_blank">Summary Ranges</a> (Easy)

You are given a sorted unique integer array `nums`.

A range `[a,b]` is the set of all integers from `a` to `b` (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of `nums` is covered by exactly one of the ranges, and there is no integer `x` such that `x` is in one of the ranges but not in `nums`.

Each range [a,b] in the list should be output as:

-   `"a->b"` if `a != b`
-   `"a"` if `a == b`

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1) excluding output
def summaryRanges(nums: List[int]) -> List[str]:
    result = []
    i = 0

    while i < len(nums):
        # Get consecutive range
        end = i
        while end + 1 < len(nums) and nums[end] + 1 == nums[end + 1]:
            end += 1
        # If equal, range did not expand
        if end > i:
            result.append(str(nums[i]) + "->" + str(nums[end]))
        else:
            result.append(str(nums[i]))
        i = end + 1

    return result
```

**question**

<a href="https://leetcode.com/problems/merge-intervals/description" target="_blank">Merge Intervals</a> (Medium)

Given an array of `intervals` where `intervals[i] = [start<i>, end<i>]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

**answer**

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

**question**

<a href="https://leetcode.com/problems/insert-interval/description" target="_blank">Insert Interval</a> (Medium)

You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [start<i>, end<i>]` represent the start and the end of the `i`<sup>th</sup> interval and `intervals` is sorted in ascending order by `start`. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.

Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by `start<i>` and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return `intervals` after the insertion.

Note that you don't need to modify `intervals` in-place. You can make a new array and return it.

**answer**

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

**question**

<a href="https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description" target="_blank">Minimum Number of Arrows to Burst Balloons</a> (Medium)

There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array `points` where `points[i] = [x<start>, x<end>]` denotes a balloon whose horizontal diameter stretches between `x<start>` and `x<end>`. You do not know the exact y-coordinates of the balloons.

Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with `x<start>` and `x<end>` is burst by an arrow shot at `x` if `x<start> <= x <= x<end>`. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

Given the array `points`, return the minimum number of arrows that must be shot to burst all balloons.

**answer**

```py
# Time complexity: O(n * log(n))
# Space complexity: O(1)
def findMinArrowShots(self, points: List[List[int]]) -> int:
    # Sort by x<end>
    points.sort(key=lambda x: x[1])
    count = 1
    currIdx = 0

    # Shoot arrow at end of leftmost unpopped balloon
    for i in range(1, len(points)):
        # Skip all balloons that will be popped by current arrow
        if points[i][0] <= points[currIdx][1]:
            continue
        count += 1
        currIdx = i

    return count
```
