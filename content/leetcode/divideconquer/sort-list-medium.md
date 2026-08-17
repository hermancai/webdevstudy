## title

Sort List (Medium)

## question

<a href="https://leetcode.com/problems/sort-list/description" target="_blank">Sort List</a> (Medium)

Given the `head` of a linked list, return the list after sorting it in ascending order.

```py
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
```

## answer

```py
def sortList(head: Optional[ListNode]) -> Optional[ListNode]:
    def mergeSorted(head1, head2):
        dummy = curr = ListNode()
        while head1 and head2:
            if head1.val <= head2.val:
                curr.next = head1
                head1 = head1.next
            else:
                curr.next = head2
                head2 = head2.next
            curr = curr.next
        curr.next = head1 or head2
        return dummy.next

    if not head or not head.next:
        return head

    # Split list in middle
    prev = slow = fast = head
    while fast and fast.next:
        prev = slow
        slow = slow.next
        fast = fast.next.next
    prev.next = None

    # Recurse until len(list) == 1 i.e. sorted
    left = sortList(head)
    right = sortList(slow)
    return mergeSorted(left, right)
```

Time: O(n \* log n)

Space: O(log n)

<br />

Follow-up: Sort the list in O(n \* log n) time and O(1) space.

```py
def sortList(head: Optional[ListNode]) -> Optional[ListNode]:
    # Cut off list after step nodes. Return head of remaining list
    def split(head, step: int):
        curr = head
        for _ in range(step - 1):
            if curr:
                curr = curr.next

        if not curr: return None

        newHead = curr.next
        curr.next = None
        return newHead

    # Merge sorted lists. Return tail of merged list
    def merge(l1, l2, head):
        curr = head
        while l1 and l2:
            if l1.val <= l2.val:
                curr.next = l1
                l1 = l1.next
            else:
                curr.next = l2
                l2 = l2.next
            curr = curr.next
        curr.next = l1 or l2

        while curr.next:
            curr = curr.next
        return curr

    # Get list size
    size, curr = 0, head
    while curr:
        size += 1
        curr = curr.next

    # Split into lists of step length, then merge
    # Example:
    #   list = 4 -> 2 -> 1 -> 3; step = 1
    #   left = 4; right = 2. Merge into 2 -> 4
    #   left = 1; right = 3. Merge into 1 -> 3
    #   Reached end of list. Increase step
    #   list = 2 -> 4 -> 1 -> 3; step = 2
    #   left = 2 -> 4; right = 1 -> 3. Merge into 1 -> 2 -> 3 -> 4
    dummy = ListNode(0, head)
    step = 1
    while size > step:
        unsortedHead, sortedTail = dummy.next, dummy
        while unsortedHead:
            # split() twice to create three lists. Merge first two lists
            # split() returns head of new list
            left = unsortedHead
            right = split(left, step)
            unsortedHead = split(right, step)
            sortedTail = merge(left, right, sortedTail)
        step *= 2
    return dummy.next
```

Time: O(n \* log n)

Space: O(1)
