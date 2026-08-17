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
def maxArea(height: List[int]) -> int:
    left, right = 0, len(height) - 1
    answer = 0

    # Track max area while shrinking two pointers
    while left < right:
        answer = max(answer, min(height[left], height[right]) * (right - left))

        if height[left] < height[right]:
            left += 1
        else:
            right -= 1

    return answer
```

Time: O(n)

Space: O(1)
