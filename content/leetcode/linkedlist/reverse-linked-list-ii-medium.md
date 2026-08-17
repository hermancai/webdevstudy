## title

Reverse Linked List II (Medium)

## question

<a href="https://leetcode.com/problems/reverse-linked-list-ii/description" target="_blank">Reverse Linked List II</a> (Medium)

Given the `head` of a singly linked list and two integers `left` and `right` where `left <= right`, reverse the nodes of the list from position `left` to position `right`, and return the reversed list.

Assume `1 <= left <= right <= n` where `n` is the length of the linked list.

## answer

```py
def reverseBetween(head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
    if not head.next or left == right:
        return head

    # Get to node before start of sublist
    dummy = before = ListNode(0, head)
    for _ in range(1, left):
        before = before.next

    # start points to first node of sublist i.e. end of reversed sublist
    start = before.next

    # Reverse sublist
    prev = None
    curr = start
    for _ in range(right - left + 1):
        nextTemp = curr.next
        curr.next = prev
        prev = curr
        curr = nextTemp

    before.next = prev # before is node before sublist. prev is start of sublist
    start.next = curr # start is end of sublist. curr is node after sublist

    return dummy.next
```

Time: O(n)

Space: O(1)
