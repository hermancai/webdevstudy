**question**

Linked List

**answer**

```py
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
```

Strategies:

-   Use a dummy head node
-   Use a slow (increment one) and fast (increment two) pointer
-   Use two pointers `k` steps apart to reach `k`<sup>th</sup> node from end of list
-   Create a cycle
-   Use a doubly linked list if possible

**question**

<a href="https://leetcode.com/problems/linked-list-cycle/description" target="_blank">Linked List Cycle</a> (Easy)

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer.

Return `true` if there is a cycle in the linked list. Otherwise, return `false`.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def hasCycle(head: ListNode) -> bool:
    if not head:
        return False

    slow = fast = head
    # In a cycle, fast will always reach slow
    while fast.next and fast.next.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
```

**question**

<a href="https://leetcode.com/problems/linked-list-cycle/description" target="_blank">Merge Two Sorted Lists</a> (Easy)

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def mergeTwoLists(list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
    dummy = curr = ListNode()

    while list1 and list2:
        if list1.val < list2.val:
            curr.next = list1
            list1 = list1.next
        else:
            curr.next = list2
            list2 = list2.next
        curr = curr.next

    curr.next = list1 or list2
    return dummy.next
```

**question**

<a href="https://leetcode.com/problems/add-two-numbers/description" target="_blank">Add Two Numbers</a> (Medium)

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

Assume the two numbers do not contain any leading zero, except the number 0 itself.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1) excluding output
def addTwoNumbers(l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
    dummy = curr = ListNode()
    carry = 0

    while l1 or l2:
        val = (l1.val if l1 else 0) + (l2.val if l2 else 0) + carry
        carry = 1 if val > 9 else 0
        curr.next = ListNode(val % 10)
        curr = curr.next
        l1 = l1.next if l1 else None
        l2 = l2.next if l2 else None

    if carry:
        curr.next = ListNode(1)
    return dummy.next
```

**question**

<a href="https://leetcode.com/problems/copy-list-with-random-pointer/description" target="_blank">Copy List with Random Pointer</a> (Medium)

A linked list of length `n` is given such that each node contains an additional random pointer, which could point to any node in the list, or `null`.

Construct a deep copy of the list. The deep copy should consist of exactly `n` brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the `next` and `random` pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes `X` and `Y` in the original list, where `X.random --> Y`, then for the corresponding two nodes `x` and `y` in the copied list, `x.random --> y`.

Return the head of the copied linked list.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(n)
def copyRandomList(head: 'Optional[Node]') -> 'Optional[Node]':
    # Key = original node; Value = new copy node
    m = {}

    # First loop to create map and new nodes
    curr = head
    while curr:
        m[curr] = Node(curr.val)
        curr = curr.next

    # Second loop to create new list
    dummy = curr = Node(0)
    while head:
        curr.next = m[head]
        curr.next.random = m[head.random] if head.random else None

        head = head.next
        curr = curr.next

    return dummy.next
```

Alternative solution:

```py
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random

# Time complexity: O(n)
# Space complexity: O(1) excluding output
def copyRandomList(head: 'Optional[Node]') -> 'Optional[Node]':
    # Insert duplicate nodes into original list
    # old1 -> new1 -> old2 -> new2 ...
    curr = head
    while curr:
        newNode = Node(curr.val, curr.next)
        curr.next = newNode
        curr = curr.next.next

    # Assign random pointer to new nodes
    curr = head
    while curr:
        if curr.random:
            curr.next.random = curr.random.next
        curr = curr.next.next

    # Extract new nodes
    dummy = curr = Node(0)
    while head:
        curr.next = head.next
        curr = curr.next
        head = head.next.next

    return dummy.next
```

**question**

<a href="https://leetcode.com/problems/reverse-linked-list-ii/description" target="_blank">Reverse Linked List II</a> (Medium)

Given the `head` of a singly linked list and two integers `left` and `right` where `left <= right`, reverse the nodes of the list from position `left` to position `right`, and return the reversed list.

Assume `1 <= left <= right <= n` where `n` is the length of the linked list.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def reverseBetween(head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
    if not head.next or left == right:
        return head

    # Go to node before start of swaps
    dummy = beforeReverse = ListNode(0, head)
    for _ in range(1, left):
        beforeReverse = beforeReverse.next

    # Reverse list
    tail = beforeReverse.next
    for _ in range(right - left):
        # Save head of currently reversed list
        temp = beforeReverse.next

        # Move node after tail to front
        beforeReverse.next = tail.next

        # Skip pointer of moved node
        tail.next = tail.next.next

        # Attach saved head to moved node (new head)
        beforeReverse.next.next = temp

    return dummy.next
```

**question**

<a href="https://leetcode.com/problems/remove-nth-node-from-end-of-list/description" target="_blank">Remove Nth Node From End of List</a> (Medium)

Given the `head` of a linked list, remove the `n`<sup>th</sup> node from the end of the list and return its head.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def removeNthFromEnd(head: Optional[ListNode], n: int) -> Optional[ListNode]:
    # Delay slow pointer by n steps
    slow = fast = head
    for _ in range(n):
        fast = fast.next

    # Reaching end of list means n points to head
    if not fast:
        return head.next

    # Checking fast.next means loop ends one node before
    #   actual node to be removed (i.e. previous node)
    while fast.next:
        slow = slow.next
        fast = fast.next

    slow.next = slow.next.next
    return head
```

**question**

<a href="https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description" target="_blank">Remove Duplicates from Sorted List II</a> (Medium)

Given the `head` of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def deleteDuplicates(head: Optional[ListNode]) -> Optional[ListNode]:
    if not head or not head.next:
        return head

    dummy = prev = ListNode(0, head)
    curr = head

    while curr:
        val = curr.val
        # Found duplicate. Remove all nodes with current value
        if curr.next and curr.next.val == val:
            while curr and curr.val == val:
                prev.next = prev.next.next
                curr = prev.next
        else:
            prev = curr
            curr = curr.next

    return dummy.next
```

**question**

<a href="https://leetcode.com/problems/rotate-list/description" target="_blank">Rotate List</a> (Medium)

Given the `head` of a linked list, rotate the list to the right by `k` places.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def rotateRight(head: Optional[ListNode], k: int) -> Optional[ListNode]:
    if not head: return head

    # Get list size and pointer to list tail
    count = 1
    tail = head
    while tail.next:
        count += 1
        tail = tail.next

    # Create cycle
    tail.next = head

    # Move to tail of final list
    k %= count
    for _ in range(count - k):
        tail = tail.next

    # Break cycle
    newHead = tail.next
    tail.next = None
    return newHead
```

**question**

<a href="https://leetcode.com/problems/partition-list/description" target="_blank">Partition List</a> (Medium)

Given the `head` of a linked list and a value `x`, partition it such that all nodes less than `x` come before nodes greater than or equal to `x`.

Preserve the original relative order of the nodes in each of the two partitions.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
    # Use two lists to separate nodes
    leftDummy = leftCurr = ListNode()
    rightDummy = rightCurr = ListNode()

    while head:
        if head.val < x:
            leftCurr.next = head
            leftCurr = leftCurr.next
        else:
            rightCurr.next = head
            rightCurr = rightCurr.next
        head = head.next

    # Merge lists
    rightCurr.next = None
    leftCurr.next = rightDummy.next
    return leftDummy.next
```

**question**

<a href="https://leetcode.com/problems/lru-cache/description" target="_blank">LRU Cache</a> (Medium)

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the `LRUCache` class:

-   `LRUCache(int capacity)` Initialize the LRU cache with positive size `capacity`.
-   `int get(int key)` Return the value of the key if the `key` exists, otherwise return `-1`.
-   `void put(int key, int value)` Update the value of the `key` if the `key` exists. Otherwise, add the `key-value` pair to the cache. If the number of keys exceeds the `capacity` from this operation, evict the least recently used key.

The functions `get` and `put` must each run in `O(1)` average time complexity.

**answer**

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
