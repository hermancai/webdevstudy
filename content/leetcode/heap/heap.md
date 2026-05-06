## title

Heap

## question

Heap

## answer

A heap is a complete binary tree that satisfies the heap property: a parent node is always less/greater than its children. Every subtree must also be a heap. There are two types of heaps:

- Min Heap: The root contains the smallest value.
- Max Heap: The root contains the largest value.

Common heap operations:

- `heapify()`: construct heap from list. Time complexity: `O(n)`
- `heappop()`: remove root node. Time complexity: `O(log(n))`
- `heappush()`: insert node. Time complexity: `O(log(n))`

Common uses:

- Implement priority queues (max/min value stays on top).
- Heap sort: involves removing the root node from a min heap `n` times. Time complexity: `O(n * log(n))`
- For graphing algorithms (e.g. Dijkstra's algorithm)

Python:

- Python's heapq module creates a min heap.
- To implement a max heap, multiply the values by `-1`.
