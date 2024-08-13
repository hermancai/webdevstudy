**question**

<a href="https://leetcode.com/problems/letter-combinations-of-a-phone-number/description" target="_blank">Letter Combinations of a Phone Number</a> (Medium)

Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

```py
# 1(---)   2(abc)   3(def)
# 4(ghi)   5(jkl)   6(mno)
# 7(pqrs)  8(tuv)   9(wxyz)
```

**answer**

```py
# Time complexity: O(N * 4^N) where N = length of digits
# Space complexity: O(N * 4^N)
#   The extra N is due to string contatenation.
def letterCombinations(digits: str) -> List[str]:
    if not digits:
        return []

    chars = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    answer = []
    dfs(digits, chars, answer, "")
    return answer

def dfs(digits, chars, answer, currStr) -> None:
    if len(currStr) >= len(digits):
        answer.append(currStr)
        return

    # len(currStr) corresponds with current index of digits
    for c in chars[digits[len(currStr)]]:
        dfs(digits, chars, answer, currStr + c)
```

Alternative solution:

```py
from collections import deque

# Time complexity: O(N * 4^N) where N = length of digits
# Space complexity: O(N * 4^N)
def letterCombinations(digits: str) -> List[str]:
    if not digits:
        return []

    chars = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    q = deque()
    q.append("")

    # Incrementally add chars to each string in q
    # Loop until q only contains strings with equal length to digits
    while len(q[0]) != len(digits):
        currStr = q.popleft()
        # Length of currStr corresponds with current index of digits
        # E.g. currStr = "d"; digits = "357" -> loop through chars[5]
        for c in chars[digits[len(currStr)]]:
            q.append(currStr + c)

    return q
```

**question**

<a href="https://leetcode.com/problems/combinations/description" target="_blank">Combinations</a> (Medium)

Given two integers `n` and `k`, return all possible combinations of `k` numbers chosen from the range `[1, n]`.

You may return the answer in any order.

Note that combinations are unordered, i.e., `[1,2]` and `[2,1]` are considered to be the same combination.

**answer**

```py
# Time complexity: O(c(n, k) * k)
# Space complexity: O(c(n, k) * k)
def combine(n: int, k: int) -> List[List[int]]:
    answer = []
    helper(n, k, answer, [], 1)
    return answer

def helper(n, k, answer, currLi, currVal) -> None:
    if len(currLi) == k:
        # Need copy of list due to passing by reference
        answer.append(currLi[:])
        return

    # Faster loop compared to range(currVal, n + 1)
    # Suppose n = 10, k = 5, currLi = []
    # If i = 7, the largest possible currLi will be [7, 8, 9, 10],
    #   which is not a valid answer.
    # (n - (k - len(currLi)) + 2) cuts off unnecessary recursion.
    for i in range(currVal, n - (k - len(currLi)) + 2):
        currLi.append(i)
        helper(n, k, answer, currLi, i + 1)
        currLi.pop()
```

**question**

<a href="https://leetcode.com/problems/permutations/description" target="_blank">Permutations</a> (Medium)

Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.

**answer**

```py
# Time complexity: O(n * n!)
# Space complexity: O(n * n!)
def permute(nums: List[int]) -> List[List[int]]:
    answer = []
    helper(nums, answer, [], set())
    return answer

def helper(nums, answer, currLi, currSet) -> None:
    if len(currLi) == len(nums):
        answer.append(currLi[:])
        return

    for i in range(len(nums)):
        # Loop through every element that isn't in currLi
        if nums[i] not in currSet:
            currLi.append(nums[i])
            currSet.add(nums[i])
            helper(nums, answer, currLi, currSet)
            currLi.pop()
            currSet.remove(nums[i])
```

**question**

<a href="https://leetcode.com/problems/combination-sum/description" target="_blank">Combination Sum</a> (Medium)

Given an array of distinct integers `candidates` and a target integer `target`, return a list of all unique combinations of candidates where the chosen numbers sum to `target`. You may return the combinations in any order.

The same number may be chosen from `candidates` an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

**answer**

```py
# Time complexity: O(N * 2^(M)) where N = length of currLi; M = sum of (target / candidate[i]) for all candidates
# Space complexity: O(K) where K = length of longest combination
def combinationSum(candidates: List[int], target: int) -> List[List[int]]:
    answer = []
    helper(candidates, target, answer, [], 0, 0)
    return answer

def helper(candidates, target, answer, currLi, currSum, index):
    if currSum > target:
        return

    if currSum == target:
        answer.append(currLi[:])
        return

    # All solutions containing elements before index have been checked
    for i in range(index, len(candidates)):
        currLi.append(candidates[i])
        # Recurse with same index because answer allows duplicates
        helper(candidates, target, answer, currLi, currSum + candidates[i], i)
        currLi.pop()
```
