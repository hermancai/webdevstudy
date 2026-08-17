## title

Notes

## question

Notes

## answer

```py
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseList(head: ListNode) -> ListNode:
    prev = None  # prev points to head of reversed list
    curr = head  # curr points to head of not yet reversed list

    while curr:
        tempNext = curr.next    # Save next node
        curr.next = prev        # Reverse the pointer
        prev = curr             # Move prev forward
        curr = tempNext         # Move curr forward

    return prev  # prev points to new head of reversed list
```

Strategies:

- Use a dummy head node

- Use a slow (increment once) and fast (increment twice) pointer

- Use two pointers `k` steps apart to reach `k`<sup>th</sup> node from end of list

- Create a cycle

- Use a doubly linked list if possible
