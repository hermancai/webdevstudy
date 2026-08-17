## title

3Sum (Medium)

## question

<a href="https://leetcode.com/problems/3sum/description" target="_blank">3Sum</a> (Medium)

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

The solution set must not contain duplicate triplets.

## answer

```py
def threeSum(nums: List[int]) -> List[List[int]]:
    nums.sort()
    answer = []

    # Similar to 2Sum. Use sorted list and skip duplicates
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue

        left, right = i + 1, len(nums) - 1
        while left < right:
            tripleSum = nums[i] + nums[left] + nums[right]
            if tripleSum > 0:
                right -= 1
            elif tripleSum < 0:
                left += 1
            else:
                answer.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                right -= 1
                left += 1

    return answer
```

Time: O(n<sup>2</sup>)

Space: O(1)
