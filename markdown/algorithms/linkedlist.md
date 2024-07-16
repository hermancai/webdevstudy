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

**question**

<a href="https://leetcode.com/problems/add-two-numbers/description" target="_blank">Add Two Numbers</a> (Medium)

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

Assume the two numbers do not contain any leading zero, except the number 0 itself.

**answer**

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

**question**

<a href="https://leetcode.com/problems/copy-list-with-random-pointer/description" target="_blank">Copy List with Random Pointer</a> (Medium)

A linked list of length `n` is given such that each node contains an additional random pointer, which could point to any node in the list, or `null`.

Construct a deep copy of the list. The deep copy should consist of exactly `n` brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the `next` and `random` pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes `X` and `Y` in the original list, where `X.random --> Y`, then for the corresponding two nodes `x` and `y` in the copied list, `x.random --> y`.

Return the head of the copied linked list.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(n)
def copyRandomList(head: 'Optional[Node]') -> 'Optional[Node]':
    # Key = original node; Value = new copy node
    m = {}

    # First loop to create map and new nodes
    curr = head
    while curr:
        m[curr] = Node(curr.val)
        curr = curr.next

    # Second loop to create new list
    dummy = curr = Node(0)
    while head:
        curr.next = m[head]
        curr.next.random = m[head.random] if head.random else None

        head = head.next
        curr = curr.next

    return dummy.next
```

Alternative solution:

```py
# Time complexity: O(n)
# Space complexity: O(1) excluding output
def copyRandomList(head: 'Optional[Node]') -> 'Optional[Node]':
    # Insert duplicate nodes into original list
    # old1 -> new1 -> old2 -> new2 ...
    curr = head
    while curr:
        newNode = Node(curr.val, curr.next)
        curr.next = newNode
        curr = curr.next.next

    # Assign random pointer to new nodes
    curr = head
    while curr:
        if curr.random:
            curr.next.random = curr.random.next
        curr = curr.next.next

    # Extract new nodes
    dummy = curr = Node(0)
    while head:
        curr.next = head.next
        curr = curr.next
        head = head.next.next

    return dummy.next
```
