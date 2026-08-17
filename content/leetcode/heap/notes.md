## title

Notes

## question

Notes

## answer

A heap is a complete binary tree that satisfies the heap property: a parent node is always less/greater than its children. Every subtree must also be a heap. There are two types of heaps:

- Min Heap: The root contains the smallest value.
- Max Heap: The root contains the largest value.

Common heap operations:

```py
li = [1, 2, 3]

heapq.heapify(li) # Construct heap from list. Time: O(n)
heapq.heappush(li, 4) # Insert node. Time: O(log n)
heapq.heappop(li) # Remove root node. Time: O(log n)
```

- Python's heapq module creates a min heap.
- To implement a max heap, multiply the values by `-1`. (Newer versions of Python have a native max heap.)

Common uses:

- Implement priority queues (max/min value stays on top).
- Heap sort: involves removing the root node from a min heap `n` times. Time: O(n \* log n)
- For graphing algorithms (e.g. Dijkstra's algorithm)
