## title

Rotate List (Medium)

## question

<a href="https://leetcode.com/problems/rotate-list/description" target="_blank">Rotate List</a> (Medium)

Given the `head` of a linked list, rotate the list to the right by `k` places.

## answer

```py
def rotateRight(head: Optional[ListNode], k: int) -> Optional[ListNode]:
    if not head:
        return head

    # Get list length and tail pointer
    length, tail = 1, head
    while tail.next:
        length += 1
        tail = tail.next

    k %= length

    # Create cycle
    tail.next = head

    # Traverse to rotated list tail
    for _ in range(length - k):
        tail = tail.next

    newHead = tail.next
    tail.next = None
    return newHead
```

Time: O(n)

Space: O(1)
