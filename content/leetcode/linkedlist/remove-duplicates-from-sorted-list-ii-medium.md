## title

Remove Duplicates from Sorted List II (Medium)

## question

<a href="https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description" target="_blank">Remove Duplicates from Sorted List II</a> (Medium)

Given the `head` of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

## answer

```py
def deleteDuplicates(head: Optional[ListNode]) -> Optional[ListNode]:
    dummy = ListNode(0, head)
    prev, curr = dummy, head

    while curr:
        # Move forward only if duplicate value found
        while curr.next and curr.val == curr.next.val:
            curr = curr.next

        # If curr did not move forward i.e. not duplicate value
        if prev.next == curr:
            prev = curr
            curr = curr.next
        else:
            prev.next = curr.next
            curr = curr.next

    return dummy.next
```

Time: O(n)

Space: O(1)
