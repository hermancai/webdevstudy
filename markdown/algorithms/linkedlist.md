**question**

Linked list node class

**answer**

```py
class Node:
    def __init__(self, x):
        self.val = x
        self.next = None
```

**question**

Linked list strategies

**answer**

-   Use a dummy head node
-   Use a slow (increment one) and fast (increment two) pointer

**question**

Check if a linked list has a cycle

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def hasCycle(head: Node) -> bool:
    if not head:
        return False

    slow = fast = head
    while fast.next and fast.next.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
```

<a href="https://leetcode.com/problems/linked-list-cycle/description" target="_blank">141. Linked List Cycle</a>
