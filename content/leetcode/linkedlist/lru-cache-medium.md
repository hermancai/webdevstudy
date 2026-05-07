## title

LRU Cache (Medium)

## question

<a href="https://leetcode.com/problems/lru-cache/description" target="_blank">LRU Cache</a> (Medium)

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the `LRUCache` class:

- `LRUCache(int capacity)` Initialize the LRU cache with positive size `capacity`.
- `int get(int key)` Return the value of the key if the `key` exists, otherwise return `-1`.
- `void put(int key, int value)` Update the value of the `key` if the `key` exists. Otherwise, add the `key-value` pair to the cache. If the number of keys exceeds the `capacity` from this operation, evict the least recently used key.

The functions `get` and `put` must each run in `O(1)` average time complexity.

## answer

```py
# Doubly linked list nodes
class ListNode:
    def __init__(self, key=0, val=0, prev=None, next=None):
        self.key = key
        self.val = val
        self.prev = prev
        self.next = next

class LRUCache:
    def __init__(self, capacity: int):
        # Key = key; Value = Node pointer
        self.m = {}
        self.capacity = capacity
        # MRU at dummy head, LRU at dummy tail
        self.head = ListNode()
        self.tail = ListNode()
        self.head.next = self.tail
        self.tail.prev = self.head

    def get(self, key: int) -> int:
        if key not in self.m:
            return -1
        self.removeNode(self.m[key])
        self.moveToHead(self.m[key])
        return self.m[key].val

    def put(self, key: int, value: int) -> None:
        if key in self.m:
            self.removeNode(self.m[key])
            self.moveToHead(self.m[key])
            self.m[key].val = value
        else:
            if len(self.m) >= self.capacity:
                del self.m[self.tail.prev.key]
                self.removeNode(self.tail.prev)
            newNode = ListNode(key, value)
            self.moveToHead(newNode)
            self.m[key] = newNode

    def removeNode(self, node: ListNode) -> None:
        node.prev.next = node.next
        node.next.prev = node.prev

    def moveToHead(self, node: ListNode) -> None:
        node.prev = self.head
        node.next = self.head.next
        self.head.next.prev = node
        self.head.next = node
```
