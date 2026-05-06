## title

Linked List Cycle (Easy)

## question

<a href="https://leetcode.com/problems/linked-list-cycle/description" target="_blank">Linked List Cycle</a> (Easy)

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer.

Return `true` if there is a cycle in the linked list. Otherwise, return `false`.

## answer

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
