## title

Remove Duplicates from Sorted List II (Medium)

## question

<a href="https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description" target="_blank">Remove Duplicates from Sorted List II</a> (Medium)

Given the `head` of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1)
def deleteDuplicates(head: Optional[ListNode]) -> Optional[ListNode]:
    if not head or not head.next:
        return head

    dummy = prev = ListNode(0, head)
    curr = head

    while curr:
        val = curr.val
        # Found duplicate. Remove all nodes with current value
        if curr.next and curr.next.val == val:
            while curr and curr.val == val:
                prev.next = prev.next.next
                curr = prev.next
        else:
            prev = curr
            curr = curr.next

    return dummy.next
```
