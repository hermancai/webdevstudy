## title

Populating Next Right Pointers in Each Node II (Medium)

## question

<a href="https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/description" target="_blank">Populating Next Right Pointers in Each Node II</a> (Medium)

Given a binary tree with nodes:

```py
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
```

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to `NULL`.

Initially, all next pointers are set to `NULL`.

## answer

```py
def connect(root: 'Node') -> 'Node':
    if not root: return root

    # Iterative breadth first traversal
    currLevel = [root]

    while currLevel:
        nextLevel = []
        for node in currLevel:
            if node.left: nextLevel.append(node.left)
            if node.right: nextLevel.append(node.right)

        for i in range(len(nextLevel) - 1):
            nextLevel[i].next = nextLevel[i + 1]

        currLevel = nextLevel

    return root
```

Time: O(n)

Space: O(n)

<br />

Follow-up: Use only constant space. Recursion using implicit stack space is fine.

```py
def connect(root: 'Node') -> 'Node':
    # Treat each level as a linked list
    curr = root
    dummy = tail = Node()

    while curr:
        # Build pointers for next level
        if curr.left:
            tail.next = curr.left
            tail = tail.next
        if curr.right:
            tail.next = curr.right
            tail = tail.next
        curr = curr.next

        # Reached end of current level. Set pointers for next level
        # dummy.next is first node of next level
        if not curr:
            curr = dummy.next
            tail = dummy
            dummy.next = None

    return root
```

Time: O(n)

Space: O(1)
