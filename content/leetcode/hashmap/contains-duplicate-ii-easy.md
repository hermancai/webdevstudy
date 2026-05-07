## title

Contains Duplicate II (Easy)

## question

<a href="https://leetcode.com/problems/contains-duplicate-ii/description" target="_blank">Contains Duplicate II</a> (Easy)

Given an integer array `nums` and an integer `k`, return `true` if there are two distinct indices `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(n)
def containsNearbyDuplicate(nums: List[int], k: int) -> bool:
    m = {}
    for i in range(len(nums)):
        if nums[i] not in m:
            m[nums[i]] = i
        else:
            if abs(i - m[nums[i]]) <= k:
                return True
            m[nums[i]] = i
    return False
```
