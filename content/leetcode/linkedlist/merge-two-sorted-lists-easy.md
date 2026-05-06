## title

Merge Two Sorted Lists (Easy)

## question

<a href="https://leetcode.com/problems/linked-list-cycle/description" target="_blank">Merge Two Sorted Lists</a> (Easy)

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1)
def mergeTwoLists(list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
    dummy = curr = ListNode()

    while list1 and list2:
        if list1.val < list2.val:
            curr.next = list1
            list1 = list1.next
        else:
            curr.next = list2
            list2 = list2.next
        curr = curr.next

    curr.next = list1 or list2
    return dummy.next
```
