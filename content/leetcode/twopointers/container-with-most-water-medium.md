## title

Container With Most Water (Medium)

## question

<a href="https://leetcode.com/problems/container-with-most-water/description" target="_blank">Container With Most Water</a> (Medium)

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i`<sup>th</sup> line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1)
def maxArea(height: List[int]) -> int:
    start, end = 0, len(height) - 1
    answer = 0

    while start < end:
        answer = max(answer, (end - start) * min(height[start], height[end]))
        # Keep the pointer with a greater value
        if height[start] < height[end]:
            start += 1
        # In the case of height[start] == height[end],
        #   the pointer to move does not matter because
        #   regardless of the next pointer's value,
        #   the calculated area will never be greater.
        else:
            end -= 1
    return answer
```
