**question**

<a href="https://leetcode.com/problems/merge-sorted-array/description" target="_blank">Merge Sorted Array</a> (Easy)

You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def merge(nums1: List[int], m: int, nums2: List[int], n: int) -> None:
    i = m + n - 1
    i1 = m - 1
    i2 = n - 1

    # Merge backwards in nums1 until nums2 is empty
    while i2 >= 0:
        if i1 >= 0 and nums1[i1] > nums2[i2]:
            nums1[i] = nums1[i1]
            i1 -= 1
        else:
            nums1[i] = nums2[i2]
            i2 -= 1
        i -= 1
```

**question**

<a href="https://leetcode.com/problems/remove-element/description" target="_blank">Remove Element</a> (Easy)

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` in-place. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def removeElement(nums: List[int], val: int) -> int:
    nonValIndex = 0

    # Swap values until all instances of target are at back of list
    for i in range(len(nums)):
        if nums[i] != val:
            nums[i], nums[nonValIndex] = nums[nonValIndex], nums[i]
            nonValIndex += 1
    return nonValIndex
```

**question**

<a href="https://leetcode.com/problems/remove-duplicates-from-sorted-array/description" target="_blank">Remove Duplicates from Sorted Array</a> (Easy)

Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in `nums`.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def removeDuplicates(nums: List[int]) -> int:
    finalIndex = 1

    for i in range(1, len(nums)):
        # If not duplicate, place current integer at nums[finalIndex]
        if nums[i] > nums[i - 1]:
            nums[finalIndex] = nums[i]
            finalIndex += 1
    return finalIndex
```

**question**

<a href="https://leetcode.com/problems/majority-element/description" target="_blank">Majority Element</a> (Easy)

Given an array `nums` of size `n`, return the majority element.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

**answer**

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

**question**

<a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description" target="_blank">Best Time to Buy and Sell Stock</a> (Easy)

You are given an array `prices` where `prices[i]` is the price of a given stock on the i<sup>th</sup> day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def maxProfit(prices: List[int]) -> int:
    profit = 0
    minPrice = prices[0]

    for i in range(1, len(prices)):
        profit = max(profit, prices[i] - minPrice)
        minPrice = min(minPrice, prices[i])

    return profit
```

This problem is similar to finding a maximum subarray.

```py
# Kadane's algorithm
# Time complexity: O(n)
# Space complexity: O(1)
def maxSubarray(nums: List[int]) -> int:
    bestSum = currentSum = 0

    for x in nums:
        # If x is low enough to make the current sum negative,
        # expanding the current subarray is useless.
        # Reset to 0 for new subarray.
        currentSum = max(0, currentSum + x)
        bestSum = max(bestSum, currentSum)

    return bestSum
```

**question**

<a href="https://leetcode.com/problems/roman-to-integer/description" target="_blank">Roman to Integer</a> (Easy)

Roman numerals are represented by seven different symbols: I (1), V (5), X (10), L (50), C (100), D (500), and M (1000).

I can be placed before V (5) and X (10) to make 4 and 9.

X can be placed before L (50) and C (100) to make 40 and 90.

C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def romanToInt(s: str) -> int:
    m = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    answer = 0
    end = len(s) - 1

    # If current char is 'less' than next char,
    # current char must be decremented from answer
    for i in range(len(s)):
        if i < end and m[s[i]] < m[s[i + 1]]:
            answer -= m[s[i]]
        else:
            answer += m[s[i]]
    return answer
```

**question**

<a href="https://leetcode.com/problems/length-of-last-word/description" target="_blank">Length of Last Word</a> (Easy)

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def lengthOfLastWord(s: str) -> int:
    i = len(s) - 1
    while s[i] == " ":
        i -= 1

    count = 0
    while i >= 0 and s[i] != " ":
        i -= 1
        count += 1

    return count
```

**question**

<a href="https://leetcode.com/problems/longest-common-prefix/description" target="_blank">Longest Common Prefix</a> (Easy)

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

**answer**

```py
# Time complexity: O(n*m) where m is length of shortest word
# Space complexity: O(1)
def longestCommonPrefix(strs: List[str]) -> str:
    answer = []

    # Find shortest word, which will contain answer
    shortestWord = strs[0]
    for word in strs:
        if len(word) < len(shortestWord):
            shortestWord = word

    for i in range(len(shortestWord)):
        for word in strs:
            if word[i] != shortestWord[i]:
                return "".join(answer)
        answer.append(shortestWord[i])

    return shortestWord
```

**question**

<a href="https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description" target="_blank">Find the Index of the First Occurrence in a String</a> (Easy)

Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def strStr(haystack: str, needle: str) -> int:
    i = 0
    matchCount = 0

    while i < len(haystack):
        if haystack[i] == needle[matchCount]:
            matchCount += 1
        else: # Reset search
            i -= matchCount
            matchCount = 0

        if matchCount == len(needle):
            return i - len(needle) + 1
        i += 1

    return -1
```

**question**

<a href="https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description" target="_blank">Remove Duplicates from Sorted Array II</a> (Medium)

Given an integer array `nums` sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

If there are `k` elements after removing the duplicates, then the first `k` elements of `nums` should hold the final result. It does not matter what you leave beyond the first `k` elements.

Return `k` after placing the final result in the first `k` slots of `nums`.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def removeDuplicates(nums: List[int]) -> int:
    i = 0

    # Ignore first two elements
    # i essentially tracks the next duplicate for replacing
    # If current integer is valid, place in nums[i]
    for n in range(len(nums)):
        if i < 2 or nums[n] > nums[i - 2]:
            nums[i] = nums[n]
            i += 1
    return i
```

**question**

<a href="https://leetcode.com/problems/rotate-array/description" target="_blank">Rotate Array</a> (Medium)

Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def rotate(nums: List[int], k: int) -> None:
    k = k % len(nums)
    reverseList(nums, 0, len(nums) - 1)
    reverseList(nums, 0, k - 1)
    reverseList(nums, k, len(nums) - 1)

def reverseList(li: List[int], start: int, end: int) -> None:
    while start < end:
        li[start], li[end] = li[end], li[start]
        start += 1
        end -= 1
```

**question**

<a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description" target="_blank">Best Time to Buy and Sell Stock II</a> (Medium)

You are given an integer array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def maxProfit(prices: List[int]) -> int:
    answer = 0
    i = 1

    while i < len(prices):
        # Buy at valley
        while i < len(prices) and prices[i] <= prices[i - 1]:
            i += 1
        buy = prices[i - 1]
        # Sell at peak
        while i < len(prices) and prices[i] >= prices[i - 1]:
            i += 1
        sell = prices[i - 1]
        answer += sell - buy

    return answer
```

**question**

<a href="https://leetcode.com/problems/jump-game/description" target="_blank">Jump Game</a> (Medium)

You are given an integer array `nums`. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return `true` if you can reach the last index, or `false` otherwise.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def canJump(nums: List[int]) -> bool:
    if len(nums) <= 1:
        return True

    farthest = 0
    target = len(nums) - 1

    # From start, update farthest possible index
    for i in range(len(nums)):
        if nums[i] == 0 and i == farthest:
            return False
        farthest = max(farthest, i + nums[i])
        if farthest >= target:
            return True

    return farthest >= target
```
