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

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`<sup>th</sup> day.

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

You are given an integer array `prices` where `prices[i]` is the price of a given stock on the `i`<sup>th</sup> day.

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

**question**

<a href="https://leetcode.com/problems/jump-game-ii/description" target="_blank">Jump Game II</a> (Medium)

You are given a 0-indexed array of integers `nums` of length `n`. You are initially positioned at `nums[0]`.

Each element `nums[i]` represents the maximum length of a forward jump from index `i`. In other words, if you are at `nums[i]`, you can jump to any `nums[i + j]` where `0 <= j <= nums[i]` and `i + j < n`.

Return the minimum number of jumps to reach `nums[n - 1]`. Assume there is always a way to reach `nums[n - 1]`.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def jump(nums: List[int]) -> int:
    answer = currFarthest = currEnd = 0

    # Find max jumps and track jump count
    for i in range(len(nums) - 1):
        currFarthest = max(currFarthest, nums[i] + i)
        # Loop excludes last index because if currEnd >= end,
        # this conditional will unnecessarily increment the answer
        if i == currEnd:
            answer += 1
            # currEnd becomes max distance of previous jump
            currEnd = currFarthest
    return answer
```

**question**

<a href="https://leetcode.com/problems/h-index/description" target="_blank">H-Index</a> (Medium)

Given an array of integers `citations` where `citations[i]` is the number of citations a researcher received for their `i`<sup>th</sup> paper, return the researcher's h-index.

The h-index is defined as the maximum value of `h` such that the given researcher has published at least `h` papers that have each been cited at least `h` times.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(n)
def hIndex(citations: List[int]) -> int:
    buckets = [0] * (len(citations) + 1)
    # Example: If current val = 2, increment buckets[2] by 1
    # Essentially, buckets index tracks frequency
    for val in citations:
        if val >= len(citations):
            buckets[-1] += 1
        else:
            buckets[val] += 1

    count = 0
    for i in range(len(buckets) - 1, -1, -1):
        count += buckets[i]
        # Example: count = i = 3 means at least 3 papers were cited 3 times
        if count >= i:
            return i
    return 0
```

**question**

<a href="https://leetcode.com/problems/insert-delete-getrandom-o1/description" target="_blank">Insert Delete GetRandom O(1)</a> (Medium)

Implement the `RandomizedSet` class:

-   `RandomizedSet()` Initializes the `RandomizedSet` object.
-   `bool insert(int val)` Inserts an item `val` into the set if not present. Returns `true` if the item was not present, `false` otherwise.
-   `bool remove(int val)` Removes an item `val` from the set if present. Returns `true` if the item was present, `false` otherwise.
-   `int getRandom()` Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.

Implement the functions of the class such that each function works in average `O(1)` time complexity.

**answer**

```py
import random

class RandomizedSet:
    def __init__(self):
        self.nums = []
        self.indexMap = {}

    def insert(self, val: int) -> bool:
        if val in self.indexMap:
            return False
        self.indexMap[val] = len(self.nums)
        self.nums.append(val)
        return True

    def remove(self, val: int) -> bool:
        if val not in self.indexMap:
            return False
        # Swap val with last element in nums
        valIndex = self.indexMap[val]
        if valIndex < len(self.nums) - 1:
            self.nums[valIndex] = self.nums[-1]
            self.indexMap[self.nums[-1]] = valIndex
        # Remove last element
        self.nums.pop()
        del self.indexMap[val]
        return True

    def getRandom(self) -> int:
        return random.choice(self.nums)
```

**question**

<a href="https://leetcode.com/problems/product-of-array-except-self/description" target="_blank">Product of Array Except Self</a> (Medium)

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

Write an algorithm that runs in `O(n)` time and without using the division operation.

**answer**

Solution logic:

-   The answer can be derived by creating two arrays: `prefix` and `suffix`.
-   `prefix[i]` contains the product of all elements before `i`.
-   `suffix[i]` contains the product of all elements after `i`.
-   `answer[i] = prefix[i] * suffix[i]`
-   Space can be optimized by using the `answer` array to build both `prefix` and `suffix`.
-   Iterate normally through `answer` while keeping track of a prefix total.
-   Then iterate backwards while keeping track of a suffix total.

```py
# Time complexity: O(n)
# Space complexity: O(1) excluding output
def productExceptSelf(nums: List[int]) -> List[int]:
    answer = [1 for _ in nums]

    product = 1
    for i in range(len(nums)):
        answer[i] *= product
        product *= nums[i]

    product = 1
    for i in range(len(nums) -  1, -1, -1):
        answer[i] *= product
        product *= nums[i]

    return answer
```

**question**

<a href="https://leetcode.com/problems/gas-station/description" target="_blank">Gas Station</a> (Medium)

There are `n` gas stations along a circular route, where the amount of gas at the `i`<sup>th</sup> station is `gas[i]`.

You have a car with an unlimited gas tank and it costs `cost[i]` of gas to travel from the `i`<sup>th</sup> station to its next `(i + 1)`<sup>th</sup> station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays `gas` and `cost`, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return `-1`. If there exists a solution, it is guaranteed to be unique.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def canCompleteCircuit(gas: List[int], cost: List[int]) -> int:
    if sum(gas) < sum(cost): return -1

    # An answer is guaranteed at this point
    net = idx = 0
    for i in range(len(gas)):
        net += gas[i] - cost[i]
        # If net becomes negative, the answer must be at least after i
        # Essentially looking for largest net positive subarray
        #   that includes last element
        if net < 0:
            net = 0
            idx = i + 1
    return idx
```

**question**

<a href="https://leetcode.com/problems/integer-to-roman/description" target="_blank">Integer to Roman</a> (Medium)

Seven different symbols represent Roman numerals with the following values:

I -> 1, V -> 5, X -> 10, L -> 50, C -> 100, D -> 500, M -> 1000

Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

-   If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
-   If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
-   Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.

Given an integer, convert it to a Roman numeral.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def intToRoman(num: int) -> str:
    pairs = [
        (1000, "M"),
        (900, "CM"),
        (500, "D"),
        (400, "CD"),
        (100, "C"),
        (90, "XC"),
        (50, "L"),
        (40, "XL"),
        (10, "X"),
        (9, "IX"),
        (5, "V"),
        (4, "IV"),
        (1, "I")
    ]
    answer = []

    for pair in pairs:
        while num >= pair[0]:
            answer.append(pair[1])
            num -= pair[0]

    return "".join(answer)
```

**question**

<a href="https://leetcode.com/problems/reverse-words-in-a-string/description" target="_blank">Reverse Words in a String</a> (Medium)

Given an input string `s`, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in `s` will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that `s` may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(n)
def reverseWords(s: str) -> str:
    answer = []
    start = end = len(s) - 1

    while start >= 0:
        # Skip whitespace
        while s[start] == " ":
            start -= 1
            end -= 1
        # In case string starts with whitespace
        if start < 0:
            break
        # Find next word
        while start >= 1 and s[start - 1] != " ":
            start -= 1
        answer.append(s[start:end + 1])
        start -= 1
        end = start

    return " ".join(answer)
```

**question**

<a href="https://leetcode.com/problems/zigzag-conversion/description" target="_blank">Zigzag Conversion</a> (Medium)

The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this:

```py
# P   A   H   N
# A P L S I I G
# Y   I   R
```

And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number of rows.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(n)
def convert(s: str, numRows: int) -> str:
    if numRows == 1 or numRows >= len(s):
        return s

    # 2D matrix representing zigzag
    answer = [[] for _ in range(numRows)]

    # Sequentially place characters into the appropriate row
    i = 0
    while i < len(s):
        # Filling in columns
        for idx in range(numRows):
            if i >= len(s):
                break
            answer[idx].append(s[i])
            i += 1
        # Filling in diagonals
        for idx in range(numRows - 2, 0, -1):
            if i >= len(s):
                break
            answer[idx].append(s[i])
            i += 1

    return "".join(["".join(row) for row in answer])
```

Alternative solution:

-   This solution relies on finding the numerical pattern between indices per row.
-   To see the pattern, create the expected output and zigzag for cases `numRows = 3, 4, and 5`.

```py
# Time complexity: O(n)
# Space complexity: O(n)
def convert(s: str, numRows: int) -> str:
    if numRows == 1 or numRows >= len(s):
        return s

    answer = []
    # Index difference between columns in the same row
    offset = numRows * 2 - 2

    # Handle first row
    i = 0
    while i < len(s):
        answer.append(s[i])
        i += offset

    for i in range(1, numRows - 1):
        # Middle rows will have alternating index differences
        flip = False
        offset1 = (numRows - i - 1) * 2
        offset2 = offset - offset1
        idx = i
        while idx < len(s):
            answer.append(s[idx])
            idx += offset2 if flip else offset1
            flip = not flip

    # Handle last row
    i = numRows - 1
    while i < len(s):
        answer.append(s[i])
        i += offset

    return "".join(answer)
```

**question**

<a href="https://leetcode.com/problems/maximum-subarray/description" target="_blank">Maximum Subarray</a> (Medium)

Given an integer array `nums`, find the subarray with the largest sum, and return its sum.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def maxSubArray(nums: List[int]) -> int:
    answer = float("-inf")
    currSum = 0

    for n in nums:
        # If new value does not lead to larger currSum,
        #   reset currSum and start new subarray
        currSum = max(n, currSum + n)
        answer = max(answer, currSum)
    return answer
```

**question**

<a href="https://leetcode.com/problems/maximum-sum-circular-subarray/description" target="_blank">Maximum Sum Circular Subarray</a> (Medium)

Given a circular integer array `nums` of length `n`, return the maximum possible sum of a non-empty subarray of `nums`.

A circular array means the end of the array connects to the beginning of the array. Formally, the next element of `nums[i]` is `nums[(i + 1) % n]` and the previous element of `nums[i]` is `nums[(i - 1 + n) % n]`.

A subarray may only include each element of the fixed buffer `nums` at most once. Formally, for a subarray `nums[i], nums[i + 1], ..., nums[j]`, there does not exist `i <= k1`, `k2 <= j` with `k1 % n == k2 % n`.

**answer**

Solution logic:

-   The maximum sum subarray is either contiguous or wraps around the circular array.
-   Find the potentially contiguous subarray using Kadane's algorithm.
-   To find the wrapping subarray, get the contiguous minimum sum and subtract from the array total sum.
    -   total = min array + max array --> max array = total - min array
-   Note that only computing (total - min array) is not enough to find the maximum sum subarray. If the maximum sum subarray is contiguous, the minimum sum subarray wraps and will not be found by Kadane's algorithm.

```py
# Time complexity: O(n)
# Space complexity: O(1)
def maxSubarraySumCircular(nums: List[int]) -> int:
    total = 0
    maxSum = minSum = nums[0]
    currMax = currMin = 0

    # Use Kadane's algorithm to get both minimum and maximum sum subarrays
    for n in nums:
        total += n

        currMax = max(n, currMax + n)
        maxSum = max(maxSum, currMax)

        currMin = min(n, currMin + n)
        minSum = min(minSum, currMin)

    # Edge case: If all ints are negative, (total - minSum) == 0
    #   and maxSum will be negative, resulting in a return of 0
    if maxSum <= 0:
        return maxSum
    return max(maxSum, total - minSum)
```
