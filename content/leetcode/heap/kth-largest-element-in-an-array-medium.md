## title

Kth Largest Element in an Array (Medium)

## question

<a href="https://leetcode.com/problems/kth-largest-element-in-an-array/description" target="_blank">Kth Largest Element in an Array</a> (Medium)

Given an integer array `nums` and an integer `k`, return the `k`<sup>th</sup> largest element in the array.

Note that it is the `k`<sup>th</sup> largest element in the sorted order, not the `k`<sup>th</sup> distinct element.

Solve the problem without sorting.

## answer

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
