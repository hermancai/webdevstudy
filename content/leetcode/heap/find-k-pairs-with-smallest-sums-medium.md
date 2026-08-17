## title

Find K Pairs with Smallest Sums (Medium)

## question

<a href="https://leetcode.com/problems/find-k-pairs-with-smallest-sums/description" target="_blank">Find K Pairs with Smallest Sums</a> (Medium)

You are given two integer arrays `nums1` and `nums2` sorted in non-decreasing order and an integer `k`.

Define a pair `(u, v)` which consists of one element from the first array and one element from the second array.

Assume `k <= nums1.length * nums2.length`.

Return the `k` pairs `(u1, v1), (u2, v2), ..., (uk, vk)` with the smallest sums.

## answer

```py
# nums1 = [1, 2, 4], nums2 = [1, 3, 5]
# Visualize the pair sums in a matrix
#               nums2
#            1    3    5
# nums1  1  [2]  [4]  [6]
#        2  [3]  [5]  [7]
#        4  [5]  [7]  [9]
#
# Each row in the matrix is a sorted list
# The goal is to merge every row into one sorted list, keeping the first k elements

def kSmallestPairs(nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
    # Min heap holding tuples: (sum, index1, index2)
    heap, answer = [], []

    # Add the first element of every row (up to k) in the sum matrix
    # If k < len(nums1), remainder of nums1 can be ignored because
    #   the values will never be part of the answer
    # This only works because nums1 and nums2 are sorted
    for i in range(min(k, len(nums1))):
        heapq.heappush(heap, (nums1[i] + nums2[0], i, 0))

    while len(answer) < k:
        _, i1, i2 = heapq.heappop(heap)

        answer.append([nums1[i1], nums2[i2]])

        # When element in a matrix row is processed, add next element in row
        if i2 + 1 < len(nums2):
            heapq.heappush(heap, (nums1[i1] + nums2[i2 + 1], i1, i2 + 1))

    return answer
```

Time: O(k \* log k)

Space: O(k)
