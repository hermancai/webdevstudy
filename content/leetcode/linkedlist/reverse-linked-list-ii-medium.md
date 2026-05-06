## title

Reverse Linked List II (Medium)

## question

<a href="https://leetcode.com/problems/reverse-linked-list-ii/description" target="_blank">Reverse Linked List II</a> (Medium)

Given the `head` of a singly linked list and two integers `left` and `right` where `left <= right`, reverse the nodes of the list from position `left` to position `right`, and return the reversed list.

Assume `1 <= left <= right <= n` where `n` is the length of the linked list.

## answer

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
