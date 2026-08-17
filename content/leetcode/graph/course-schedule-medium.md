## title

Course Schedule (Medium)

## question

<a href="https://leetcode.com/problems/course-schedule/description" target="_blank">Course Schedule</a> (Medium)

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.

For example, the pair `[0, 1]` indicates that to take course `0` you have to first take course `1`.

Return `true` if you can finish all courses. Otherwise, return `false`.

## answer

```py
from collections import deque

def canFinish(numCourses: int, prerequisites: List[List[int]]) -> bool:
    # { prereq: [courses with prereq] }
    neighbors = defaultdict(list)
    # Track how many prereqs a course has
    indegree = {i: 0 for i in range(numCourses)}

    for node, prereq in prerequisites:
        indegree[node] += 1
        neighbors[prereq].append(node)

    # Breadth first topological sort
    queue = deque([c for c in range(numCourses) if indegree[c] == 0])
    completed = 0

    while queue:
        course = queue.popleft()
        completed += 1

        for neighbor in neighbors[course]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    return completed == numCourses
```

Time: O(V + E), V = nodes, E = edges

Space: O(V + E)
