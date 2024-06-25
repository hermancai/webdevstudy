**question**

Linked List

**answer**

```py
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
```

Strategies:

-   Use a dummy head node
-   Use a slow (increment one) and fast (increment two) pointer

**question**

<a href="https://leetcode.com/problems/linked-list-cycle/description" target="_blank">Linked List Cycle</a> (Easy)

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer.

Return `true` if there is a cycle in the linked list. Otherwise, return `false`.

**answer**

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

**question**

<a href="https://leetcode.com/problems/linked-list-cycle/description" target="_blank">Merge Two Sorted Lists</a> (Easy)

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

**answer**

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
