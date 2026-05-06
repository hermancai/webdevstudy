## title

3Sum (Medium)

## question

<a href="https://leetcode.com/problems/3sum/description" target="_blank">3Sum</a> (Medium)

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

The solution set must not contain duplicate triplets.

## answer

```py
# Time complexity: O(n^2)
# Space complexity: O(n)
def threeSum(nums: List[int]) -> List[List[int]]:
    answer = set()
    nums.sort()
    i = 0

    # Essentially 2Sum with an extra loop and dynamic target
    while i < len(nums):
        target = -1 * nums[i]
        start, end = i + 1, len(nums) - 1

        while start < end:
            currSum = nums[start] + nums[end]
            if currSum > target:
                end -= 1
            elif currSum < target:
                start += 1
            else:
                triplet = tuple(sorted([nums[i], nums[start], nums[end]]))
                answer.add(triplet)
                # Skip duplicates from front and back
                while start < end and nums[start] == triplet[1]:
                    start += 1
                while start < end and nums[end] == triplet[2]:
                    end -= 1

        # Skip duplicates of current integer
        while i + 1 < len(nums) and nums[i + 1] == nums[i]:
            i += 1
        i += 1
    return answer
```
