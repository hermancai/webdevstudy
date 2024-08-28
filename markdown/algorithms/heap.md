**question**

Heap

**answer**

A heap is a complete binary tree that satisfies the heap property: a parent node is always less/greater than its children. Every subtree must also be a heap. There are two types of heaps:

-   Min Heap: The root contains the smallest value.
-   Max Heap: The root contains the largest value.

Common heap operations:

-   `heapify()`: construct heap from list. Time complexity: `O(n)`
-   `heappop()`: remove root node. Time complexity: `O(log(n))`
-   `heappush()`: insert node. Time complexity: `O(log(n))`

Common uses:

-   Implement priority queues (max/min value stays on top).
-   Heap sort: involves removing the root node from a min heap `n` times. Time complexity: `O(n * log(n))`
-   For graphing algorithms (e.g. Dijkstra's algorithm)

Python:

-   Python's heapq module creates a min heap.
-   To implement a max heap, multiply the values by `-1`.

**question**

<a href="https://leetcode.com/problems/kth-largest-element-in-an-array/description" target="_blank">Kth Largest Element in an Array</a> (Medium)

Given an integer array `nums` and an integer `k`, return the `k`<sup>th</sup> largest element in the array.

Note that it is the `k`<sup>th</sup> largest element in the sorted order, not the `k`<sup>th</sup> distinct element.

Solve the problem without sorting.

**answer**

```py
# Time complexity: O(n * log(k))
# Space complexity: O(k)
def findKthLargest(nums: List[int], k: int) -> int:
    # Create a min heap containing at most k nodes
    heap = nums[:k]
    heapq.heapify(heap)

    # After looping, the heap will contain the k largest values in nums
    for i in range(k, len(nums)):
        if nums[i] > heap[0]:
            heapq.heappop(heap)
            heapq.heappush(heap, nums[i])
    return heap[0]
```

**question**

<a href="https://leetcode.com/problems/find-k-pairs-with-smallest-sums/description" target="_blank">Find K Pairs with Smallest Sums</a> (Medium)

You are given two integer arrays `nums1` and `nums2` sorted in non-decreasing order and an integer `k`.

Define a pair `(u, v)` which consists of one element from the first array and one element from the second array.

Assume `k <= nums1.length * nums2.length`.

Return the `k` pairs `(u1, v1), (u2, v2), ..., (uk, vk)` with the smallest sums.

**answer**

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
