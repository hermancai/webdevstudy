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
# Space complexity: O(1) if excluding result
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
