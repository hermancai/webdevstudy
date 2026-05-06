## title

Linked List

## question

Linked List

## answer

```py
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
```

Strategies:

- Use a dummy head node
- Use a slow (increment one) and fast (increment two) pointer
- Use two pointers `k` steps apart to reach `k`<sup>th</sup> node from end of list
- Create a cycle
- Use a doubly linked list if possible
