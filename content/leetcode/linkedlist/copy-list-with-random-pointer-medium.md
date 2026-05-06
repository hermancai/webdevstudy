## title

Copy List with Random Pointer (Medium)

## question

<a href="https://leetcode.com/problems/copy-list-with-random-pointer/description" target="_blank">Copy List with Random Pointer</a> (Medium)

A linked list of length `n` is given such that each node contains an additional random pointer, which could point to any node in the list, or `null`.

Construct a deep copy of the list. The deep copy should consist of exactly `n` brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the `next` and `random` pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes `X` and `Y` in the original list, where `X.random --> Y`, then for the corresponding two nodes `x` and `y` in the copied list, `x.random --> y`.

Return the head of the copied linked list.

## answer

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
