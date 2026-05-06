## title

Two Sum II - Input Array Is Sorted (Medium)

## question

<a href="https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description" target="_blank">Two Sum II - Input Array Is Sorted</a> (Medium)

Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific `target` number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 <= numbers.length`.

Return the indices of the two numbers, `index1` and `index2`, added by one as an integer array `[index1, index2]` of length 2.

Assume there is exactly one solution. Do not use the same element twice. The solution must use only constant extra space.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1)
def twoSum(numbers: List[int], target: int) -> List[int]:
    start, end = 0, len(numbers) - 1
    while start < end:
        currSum = numbers[start] + numbers[end]
        if currSum == target:
            return [start + 1, end + 1]
        if currSum < target:
            start += 1
        else:
            end -= 1
```
