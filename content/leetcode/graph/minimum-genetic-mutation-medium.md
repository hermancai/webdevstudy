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

# Time complexity: O(N^2 * M * K) where N = string length, M = mutations, K = bank size
# Space complexity: O(N^2 * M * K)
def minMutation(startGene: str, endGene: str, bank: List[str]) -> int:
    bank = set(bank)
    if endGene not in bank:
        return -1

    mutations = ["A", "C", "G", "T"]
    # Track number of mutations to reach each string
    visited = {startGene: 0}
    q = deque()
    q.append(startGene)

    while q:
        curr = q.popleft()
        # Try swapping every character with every mutation
        for i in range(len(curr)):
            for m in mutations:
                newM = list(curr)
                newM[i] = m
                newM = "".join(newM)
                if newM == endGene:
                    return visited[curr] + 1
                if newM in bank and newM not in visited:
                    q.append(newM)
                    visited[newM] = visited[curr] + 1
    return -1
```
