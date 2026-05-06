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
# Time complexity: O(k * log(k))
# Space complexity: O(k)
def kSmallestPairs(nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
    heap = []  # min heap, holds tuples (sum, index1, index2)

    # Add initial potential solution pairs to heap
    #   using all of nums1 and first element in nums2
    for i in range(min(k, len(nums1))):
        heapq.heappush(heap, (nums1[i] + nums2[0], i, 0))

    answer = []
    # Add pairs to answer
    # If nums2 has more elements after current index, add to heap
    # All pairs are accounted for and lowest sum pairs are added first
    # The next pair popped from the heap is always the lowest current sum
    # The heap already contains all/k elements from nums1 due to the first loop
    # The second loop incrementally considers all elements from nums2 per element in nums1
    for _ in range(k):
        val, i1, i2 = heapq.heappop(heap)
        answer.append([nums1[i1], nums2[i2]])
        if i2 + 1 < len(nums2):
            heapq.heappush(heap, (nums1[i1] + nums2[i2 + 1], i1, i2 + 1))

    return answer
```
