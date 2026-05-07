## title

Rotate List (Medium)

## question

<a href="https://leetcode.com/problems/rotate-list/description" target="_blank">Rotate List</a> (Medium)

Given the `head` of a linked list, rotate the list to the right by `k` places.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1)
def rotateRight(head: Optional[ListNode], k: int) -> Optional[ListNode]:
    if not head: return head

    # Get list size and pointer to list tail
    count = 1
    tail = head
    while tail.next:
        count += 1
        tail = tail.next

    # Create cycle
    tail.next = head

    # Move to tail of final list
    k %= count
    for _ in range(count - k):
        tail = tail.next

    # Break cycle
    newHead = tail.next
    tail.next = None
    return newHead
```
