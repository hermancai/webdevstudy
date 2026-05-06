## title

Majority Element (Easy)

## question

<a href="https://leetcode.com/problems/majority-element/description" target="_blank">Majority Element</a> (Easy)

Given an array `nums` of size `n`, return the majority element.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1)
def majorityElement(nums: List[int]) -> int:
    answer = nums[0]
    count = 0

    # If an answer always exists, its count will always be
    # greater than the total count of all other values
    for num in nums:
        if num == answer:
            count += 1
        else:
            count -= 1
            if count == 0:
                answer = num
                count = 1

    return answer
```
