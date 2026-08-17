## title

Linked List Cycle (Easy)

## question

<a href="https://leetcode.com/problems/linked-list-cycle/description" target="_blank">Linked List Cycle</a> (Easy)

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer.

Return `true` if there is a cycle in the linked list. Otherwise, return `false`.

## answer

```py
def hasCycle(head: ListNode) -> bool:
    slow = fast = head

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

        # In a cycle, fast will always reach slow
        if slow == fast:
            return True

    return False
```

Time: O(n)

Space: O(1)
