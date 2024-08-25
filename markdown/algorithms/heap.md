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
