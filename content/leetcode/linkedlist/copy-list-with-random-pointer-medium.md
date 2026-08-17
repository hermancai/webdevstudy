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
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random

def copyRandomList(head: 'Optional[Node]') -> 'Optional[Node]':
    m, curr = {}, head

    # Key: original node; Value: new node
    while curr:
        m[curr] = Node(curr.val)
        curr = curr.next

    # Populate next and random pointers in new nodes
    curr = head
    while curr:
        newNode = m[curr]
        newNode.next = m[curr.next] if curr.next else None
        newNode.random = m[curr.random] if curr.random else None
        curr = curr.next

    return m[head] if head else None
```

Time: O(n)

Space: O(n)

<br />

Alternative solution:

```py
def copyRandomList(head: 'Optional[Node]') -> 'Optional[Node]':
    if not head:
        return None

    # Insert new nodes: old1 -> new1 -> old2 -> new2 ...
    curr = head
    while curr:
        curr.next = Node(curr.val, curr.next)
        curr = curr.next.next

    # Assign random pointers
    curr = head
    while curr:
        curr.next.random = curr.random.next if curr.random else None
        curr = curr.next.next

    # Remove old nodes
    curr = head.next
    while curr.next:
        curr.next = curr.next.next
        curr = curr.next

    return head.next
```

Time: O(n)

Space: O(n) including output
