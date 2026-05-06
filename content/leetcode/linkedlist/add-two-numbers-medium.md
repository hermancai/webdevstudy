## title

Add Two Numbers (Medium)

## question

<a href="https://leetcode.com/problems/add-two-numbers/description" target="_blank">Add Two Numbers</a> (Medium)

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

Assume the two numbers do not contain any leading zero, except the number 0 itself.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1) excluding output
def addTwoNumbers(l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
    dummy = curr = ListNode()
    carry = 0

    while l1 or l2:
        val = (l1.val if l1 else 0) + (l2.val if l2 else 0) + carry
        carry = 1 if val > 9 else 0
        curr.next = ListNode(val % 10)
        curr = curr.next
        l1 = l1.next if l1 else None
        l2 = l2.next if l2 else None

    if carry:
        curr.next = ListNode(1)
    return dummy.next
```
