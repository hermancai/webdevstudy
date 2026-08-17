## title

Longest Consecutive Sequence (Medium)

## question

<a href="https://leetcode.com/problems/longest-consecutive-sequence/description" target="_blank">Longest Consecutive Sequence</a> (Medium)

Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.

Write an algorithm that runs in `O(n)` time.

## answer

```py
def longestConsecutive(nums: List[int]) -> int:
    s = set(nums) # Remove duplicates and have O(1) lookup
    answer = 0

    for num in nums:
        # Only check sequence if num is lowest value (start of new sequence)
        if num - 1 not in s:
            end = num + 1
            while end in s:
                end += 1
            answer = max(answer, end - num)

    return answer
```

Time: O(n)

Space: O(n)

<br />

Alternative solution:

```py
def longestConsecutive(nums: List[int]) -> int:
    nums = set(nums)
    # Key: num
    # Val: length of sequence using num as upper/lower bound
    answer, m = 0, {}

    for num in nums:
        lower = m.get(num - 1, 0)
        upper = m.get(num + 1, 0)

        # Merge intervals
        total = lower + upper + 1
        m[num - lower] = total
        m[num + upper] = total

        answer = max(answer, total)

    return answer
```

Time: O(n)

Space: O(n)
