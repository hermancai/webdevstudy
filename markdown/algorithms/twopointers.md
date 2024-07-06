**question**

<a href="https://leetcode.com/problems/valid-palindrome/description" target="_blank">Valid Palindrome</a> (Easy)

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def isPalindrome(s: str) -> bool:
    start = 0
    end = len(s) - 1
    s = s.lower()
    while start < end:
        if not s[start].isalnum():
            start += 1
        elif not s[end].isalnum():
            end -= 1
        elif s[start] == s[end]:
            start += 1
            end -= 1
        else:
            return False
    return True
```

**question**

<a href="https://leetcode.com/problems/is-subsequence/description" target="_blank">Is Subsequence</a> (Easy)

Given two strings `s` and `t`, return `true` if `s` is a subsequence of `t`, or `false` otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def isSubsequence(s: str, t: str) -> bool:
    si = ti = 0

    while si < len(s) and ti < len(t):
        if s[si] == t[ti]:
            si += 1
        ti += 1

    return si == len(s)
```

**question**

<a href="https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description" target="_blank">Two Sum II - Input Array Is Sorted</a> (Medium)

Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific `target` number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 <= numbers.length`.

Return the indices of the two numbers, `index1` and `index2`, added by one as an integer array `[index1, index2]` of length 2.

Assume there is exactly one solution. Do not use the same element twice. The solution must use only constant extra space.

**answer**

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

**question**

<a href="https://leetcode.com/problems/container-with-most-water/description" target="_blank">Container With Most Water</a> (Medium)

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i`<sup>th</sup> line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

**answer**

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

**question**

<a href="https://leetcode.com/problems/3sum/description" target="_blank">3Sum</a> (Medium)

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

The solution set must not contain duplicate triplets.

**answer**

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
