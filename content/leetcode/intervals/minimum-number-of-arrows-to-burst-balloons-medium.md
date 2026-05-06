## title

Minimum Number of Arrows to Burst Balloons (Medium)

## question

<a href="https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description" target="_blank">Minimum Number of Arrows to Burst Balloons</a> (Medium)

There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array `points` where `points[i] = [x<start>, x<end>]` denotes a balloon whose horizontal diameter stretches between `x<start>` and `x<end>`. You do not know the exact y-coordinates of the balloons.

Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with `x<start>` and `x<end>` is burst by an arrow shot at `x` if `x<start> <= x <= x<end>`. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

Given the array `points`, return the minimum number of arrows that must be shot to burst all balloons.

## answer

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
