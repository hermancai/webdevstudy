## title

Course Schedule II (Medium)

## question

<a href="https://leetcode.com/problems/course-schedule-ii/description" target="_blank">Course Schedule II</a> (Medium)

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.

For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.

Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

## answer

```py
def findOrder(numCourses: int, prerequisites: List[List[int]]) -> List[int]:
    # Breadth first topological sort
    neighbors = defaultdict(list)
    indegree = {i: 0 for i in range(numCourses)}

    for course, prereq in prerequisites:
        indegree[course] += 1
        neighbors[prereq].append(course)

    queue = deque([c for c in range(numCourses) if indegree[c] == 0])
    result = []

    while queue:
        prereq = queue.popleft()
        result.append(prereq)

        for course in neighbors[prereq]:
            indegree[course] -= 1
            if indegree[course] == 0:
                queue.append(course)

    return result if len(result) == numCourses else []
```

Time: O(V + E), V = nodes, E = edges

Space: O(V + E)
