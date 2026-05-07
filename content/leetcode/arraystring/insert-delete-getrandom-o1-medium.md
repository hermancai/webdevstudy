## title

Insert Delete GetRandom O(1) (Medium)

## question

<a href="https://leetcode.com/problems/insert-delete-getrandom-o1/description" target="_blank">Insert Delete GetRandom O(1)</a> (Medium)

Implement the `RandomizedSet` class:

- `RandomizedSet()` Initializes the `RandomizedSet` object.
- `bool insert(int val)` Inserts an item `val` into the set if not present. Returns `true` if the item was not present, `false` otherwise.
- `bool remove(int val)` Removes an item `val` from the set if present. Returns `true` if the item was present, `false` otherwise.
- `int getRandom()` Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.

Implement the functions of the class such that each function works in average `O(1)` time complexity.

## answer

```py
import random

class RandomizedSet:
    def __init__(self):
        self.nums = []
        self.indexMap = {}

    def insert(self, val: int) -> bool:
        if val in self.indexMap:
            return False
        self.indexMap[val] = len(self.nums)
        self.nums.append(val)
        return True

    def remove(self, val: int) -> bool:
        if val not in self.indexMap:
            return False
        # Swap val with last element in nums
        valIndex = self.indexMap[val]
        if valIndex < len(self.nums) - 1:
            self.nums[valIndex] = self.nums[-1]
            self.indexMap[self.nums[-1]] = valIndex
        # Remove last element
        self.nums.pop()
        del self.indexMap[val]
        return True

    def getRandom(self) -> int:
        return random.choice(self.nums)
```
