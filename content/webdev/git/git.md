## title

Git

## question

Git

## answer

Git is a source code management (SCM) tool (aka version control).

<br/>

Git tracks the state of a project by using a model called the "three trees", which are three data structures that keep a timeline of file changes:

- Working Directory (or Working Tree): Represents changes in local files.
- Staging Area (or Index): Represents changes that are flagged by `git add` and will be included in the next commit.
- Repository (or Commit History): Represents a complete record of all commits to the project.

HEAD is a pointer that can refer to a branch or a commit, depending on the `checkout` command.

```bash
git checkout main
# Commits in main branch: A -> B -> C
# HEAD -> main -> C
```

- When checking out a branch called main, HEAD will point to 'main', which is a branch reference that in turn points to the latest commit C.
- Suppose the branch receives a new commit D. The reference 'main' will update to point to D, while HEAD continues to point to 'main'.

```bash
git checkout <commit-hash-for-C>
# Commits: A -> B -> C
# HEAD -> C
```

- When checking out a specific commit, HEAD will point directly to that commit without a branch reference. This is called a "detached HEAD" state.
- Suppose a new commit D is made. HEAD will point to D. However, there is no associated branch. To save the commit, a new branch must be created or an existing branch must be updated to include D.

Given commits A -> B -> C, if C is HEAD, then B is HEAD\~1 and C is HEAD\~2.
