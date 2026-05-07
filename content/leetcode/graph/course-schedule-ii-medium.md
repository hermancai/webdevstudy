## title

Course Schedule II (Medium)

## question

<a href="https://leetcode.com/problems/course-schedule-ii/description" target="_blank">Course Schedule II</a> (Medium)

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.

For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.

Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

## answer

```py
# The same solution for "Course Schedule" can be used.
# Return a list that keeps track of processed nodes.
```

Alternative solution:

```py
# Time complexity: O(V + E)
# Space complexity: O(V + E)
# Topological sort with depth-first traversal
def findOrder(numCourses: int, prerequisites: List[List[int]]) -> List[int]:
    courses = [[] for _ in range(numCourses)]
    degrees = [0 for _ in range(numCourses)]
    answer = []

    for child, parent in prerequisites:
        courses[parent].append(child)
        degrees[child] += 1

    for i in range(numCourses):
        if degrees[i] == 0:
            dfs(i, courses, degrees, answer)

    if len(answer) != numCourses:
        return []
    return answer

def dfs(current, courses, degrees, answer) -> None:
    answer.append(current)
    degrees[current] -= 1
    for child in courses[current]:
        degrees[child] -= 1
        if degrees[child] == 0:
            dfs(child, courses, degrees, answer)
```
