## title

Partition List (Medium)

## question

<a href="https://leetcode.com/problems/partition-list/description" target="_blank">Partition List</a> (Medium)

Given the `head` of a linked list and a value `x`, partition it such that all nodes less than `x` come before nodes greater than or equal to `x`.

Preserve the original relative order of the nodes in each of the two partitions.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1)
def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
    # Use two lists to separate nodes
    leftDummy = leftCurr = ListNode()
    rightDummy = rightCurr = ListNode()

    while head:
        if head.val < x:
            leftCurr.next = head
            leftCurr = leftCurr.next
        else:
            rightCurr.next = head
            rightCurr = rightCurr.next
        head = head.next

    # Merge lists
    rightCurr.next = None
    leftCurr.next = rightDummy.next
    return leftDummy.next
```
