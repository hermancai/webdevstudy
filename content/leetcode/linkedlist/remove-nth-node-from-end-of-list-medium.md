## title

Remove Nth Node From End of List (Medium)

## question

<a href="https://leetcode.com/problems/remove-nth-node-from-end-of-list/description" target="_blank">Remove Nth Node From End of List</a> (Medium)

Given the `head` of a linked list, remove the `n`<sup>th</sup> node from the end of the list and return its head.

## answer

```py
def removeNthFromEnd(head: Optional[ListNode], n: int) -> Optional[ListNode]:
    slow = fast = head
    # Loop runs one extra time so that slow points to node before nth node
    for _ in range(n):
        fast = fast.next

    # Reaching end of list means "nth node from end of list" = head
    if not fast:
        return head.next

    while fast.next:
        slow = slow.next
        fast = fast.next

    slow.next = slow.next.next
    return head
```

Time: O(n)

Space: O(1)
