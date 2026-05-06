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

Write a solution that uses constant space. Recursion using implicit stack space is fine.

## answer

Solution logic:

- You are essentially trying to create a linked list for each level in the binary tree using the custom nodes.
- After building a linked list for one level, that list can be used to build a list for the next level, and so on.

```py
# Time complexity: O(n)
# Space complexity: O(1)
def connect(root: 'Node') -> 'Node':
    # levelDummy will be the head of each level's linked list
    levelDummy = curr = Node()
    originalRoot = root

    while root:
        # Build list for next level, using completed previous level list
        if root.left:
            curr.next = root.left
            curr = curr.next
        if root.right:
            curr.next = root.right
            curr = curr.next
        root = root.next

        # Reached end of previous level list
        if not root:
            # Move on to next level
            # levelDummy.next points to head of newly completed list
            root = levelDummy.next
            # Reset dummy pointers
            curr = levelDummy
            levelDummy.next = None

    return originalRoot
```
