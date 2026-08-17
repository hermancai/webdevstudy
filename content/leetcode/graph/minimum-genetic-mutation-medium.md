## title

Minimum Genetic Mutation (Medium)

## question

<a href="https://leetcode.com/problems/minimum-genetic-mutation/description" target="_blank">Minimum Genetic Mutation</a> (Medium)

A gene string can be represented by an 8-character long string, with choices from `'A'`, `'C'`, `'G'`, and `'T'`.

Suppose we need to investigate a mutation from a gene string `startGene` to a gene string `endGene` where one mutation is defined as one single character changed in the gene string.

For example, `"AACCGGTT" --> "AACCGGTA"` is one mutation.

There is also a gene bank `bank` that records all the valid gene mutations. A gene must be in `bank` to make it a valid gene string.

Given the two gene strings `startGene` and `endGene` and the gene bank `bank`, return the minimum number of mutations needed to mutate from `startGene` to `endGene`. If there is no such a mutation, return `-1`.

Note that the starting point is assumed to be valid, so it might not be included in the bank.

## answer

```py
from collections import deque

def minMutation(startGene: str, endGene: str, bank: List[str]) -> int:
    bank, visited, choices = set(bank), set(), ["A", "C", "G", "T"]
    queue = deque([startGene])
    mutations = 0

    # Breadth first search
    while queue:
        for _ in range(len(queue)):
            curr = queue.popleft()

            for i in range(8):
                for choice in choices:
                    newGene = curr[:i] + choice + curr[i + 1:]

                    if newGene not in bank:
                        continue
                    if newGene == endGene:
                        return mutations + 1

                    if newGene not in visited:
                        queue.append(newGene)
                        visited.add(newGene)
        mutations += 1

    return -1
```

Time: O(N \* L<sup>2</sup>) or O(N), N = bank size, L = string length = 8

Space: O(NL) or O(N)
