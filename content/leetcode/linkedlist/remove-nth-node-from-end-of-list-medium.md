## title

Remove Nth Node From End of List (Medium)

## question

<a href="https://leetcode.com/problems/remove-nth-node-from-end-of-list/description" target="_blank">Remove Nth Node From End of List</a> (Medium)

Given the `head` of a linked list, remove the `n`<sup>th</sup> node from the end of the list and return its head.

## answer

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
