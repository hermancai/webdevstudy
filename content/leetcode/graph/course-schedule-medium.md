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

# Time complexity: O(V + E)
# Space complexity: O(V + E)
# Topological sort with breadth-first traversal
def canFinish(numCourses: int, prerequisites: List[List[int]]) -> bool:
    # Index refers to parent course. Nested list contains child courses
    courses = [[] for n in range(numCourses)]

    # Index refers to child course. Value counts number of parents
    degrees = [0 for _ in range(numCourses)]
    # Note that this solution can use lists because nodes are 0-indexed

    for parent, child in prerequisites:
        courses[parent].append(child)
        degrees[child] += 1

    q = deque()
    for i in range(numCourses):
        # Degree of 0 means course has no prereqs
        if degrees[i] == 0:
            q.append(i)

    while q:
        course = q.popleft()
        numCourses -= 1
        # Remove parent course as prereq from all child courses
        for child in courses[course]:
            degrees[child] -= 1
            if degrees[child] == 0:
                q.append(child)

    return numCourses == 0
```
