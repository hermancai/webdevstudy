## title

Partition List (Medium)

## question

<a href="https://leetcode.com/problems/partition-list/description" target="_blank">Partition List</a> (Medium)

Given the `head` of a linked list and a value `x`, partition it such that all nodes less than `x` come before nodes greater than or equal to `x`.

Preserve the original relative order of the nodes in each of the two partitions.

## answer

```py
def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
    loDummy = loTail = ListNode()
    hiDummy = hiTail = ListNode()

    while head:
        if head.val < x:
            loTail.next = head
            loTail = loTail.next
        else:
            hiTail.next = head
            hiTail = hiTail.next
        head = head.next

    hiTail.next = None
    loTail.next = hiDummy.next
    return loDummy.next
```

Time: O(n)

Space: O(1)
