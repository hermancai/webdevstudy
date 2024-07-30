**question**

About Git

**answer**

Git is a source code management (SCM) tool (aka version control).

<br/>

Git tracks the state of a project by using a model called the "three trees", which are three data structures that keep a timeline of file changes:

-   Working Directory (or Working Tree): Represents changes in local files.
-   Staging Area (or Index): Represents changes that are flagged by `git add` and will be included in the next commit.
-   Repository (or Commit History): Represents a complete record of all commits to the project.

HEAD is a pointer that can refer to a branch or a commit, depending on the `checkout` command.

```bash
git checkout main
# Commits in main branch: A -> B -> C
# HEAD -> main -> C
```

-   When checking out a branch called main, HEAD will point to 'main', which is a branch reference that in turn points to the latest commit C.
-   Suppose the branch receives a new commit D. The reference 'main' will update to point to D, while HEAD continues to point to 'main'.

```bash
git checkout <commit-hash-for-C>
# Commits: A -> B -> C
# HEAD -> C
```

-   When checking out a specific commit, HEAD will point directly to that commit without a branch reference. This is called a "detached HEAD" state.
-   Suppose a new commit D is made. HEAD will point to D. However, there is no associated branch. To save the commit, a new branch must be created or an existing branch must be updated to include D.

Given commits A -> B -> C, if C is HEAD, then B is HEAD\~1 and C is HEAD\~2.

**question**

`git config`

**answer**

```bash
# Configure Git credentials
git config --global user.name "your name"
git config --global user.email "your email"
```

**question**

`git init`

**answer**

```bash
# Create a repository
git init <directory>

# Create a repository in the current directory
git init .
```

**question**

`git clone`

**answer**

```bash
# Clone a repository in the given directory
git clone <url> <directory>

# Clone a repository in the current empty directory
git clone <url> .
```

**question**

`git status`

**answer**

```bash
# Check current state of repository
git status
```

**question**

`git add`

**answer**

```bash
# Stage all changes in a file
git add <file>

# Stage all changes in a directory
git add <directory>

# Stage part of a file
# Git automatically breaks the file's changes into parts
git add --patch <file>
git add -p <file>
```

**question**

`git restore`

**answer**

```bash
# Cancel staged change
git restore --staged <file>
```

**question**

`git commit`

**answer**

```bash
# Commit staged changes with message
git commit -m "message"
```

**question**

`git branch`

**answer**

```bash
# New branch based on current checked out (HEAD) branch
git branch <new-branch>

# New branch based on existing branch
git branch <new-branch> <base-branch>

# New branch based on specific commit
git branch <new-branch> <commit-hash>

# New branch based on remote branch
git branch --track <new-branch> origin/<base-branch>
```

**question**

`git fetch`

**answer**

```bash
# Get updates from remote branch
git fetch
```

**question**

`git pull`

**answer**

```bash
# Merge remote updates into current branch
git pull
```

**question**

`git push`

**answer**

```bash
# Update remote repository with local commits
git push
```

**question**

`git switch`

`git checkout`

**answer**

```bash
# Switch branch
git switch <branch>

# Switch branch using checkout
# switch was created to separate the functions of checkout
git checkout <branch>

# Checkout a specific commit
# This will be a detached HEAD with no associated branch
git checkout <commit-hash>
```

**question**

`git merge`

**answer**

```bash
# Merge some branch into current branch
git merge <branch>

# Cancel merge
git merge --abort
```

**question**

`git rebase`

**answer**

```bash
# Insert commits into current branch
# In this example, commits F and G are inserted
#
#        A---B---C current
#       /
#  D---E---F---G main
#
# After rebase:
#                A'--B'--C' current
#               /
#  D---E---F---G main
git rebase main current
```

**question**

`git log`

**answer**

```bash
# Show commit history
# Default display
git log

# Simplified one line per commit
git log --oneline

# Formatting options
git log --pretty=format:"%h %ad | %s%d [%an]" --date=short
```

<a href="https://git-scm.com/docs/git-log" target="_blank">More Options</a>

**question**

`git reset`

**answer**

`git reset <commit-hash>` will always move HEAD and the branch reference to point to the specified commit.

There are three main options that affect the "three trees" differently:

-   `--hard`: All commits and pending local changes made after the specified commit will be deleted from the branch. That is, the staging area will be wiped and the working directory will be reset to reflect the specified commit. Be careful using this option.
-   `--mixed`: The default option. The staging area will be wiped, and all changes will unstaged/retained in the working directory.
-   `--soft`: Only performs the movement of the HEAD and branch reference to the specificed commit. The working directory and staging area are untouched.

```bash
# A -> B -> C
# git reset --mixed HEAD
git reset

# Switch to previous commit while keeping current changes
# Changes in C will be uncommited and moved to working directory
git reset --mixed B

# Remove all changes since a commit
git reset --hard B
```

**question**

`git revert`

**answer**

`git revert` takes a commit and attempts to create a new commit that cancels the changes of the specified commit. This is useful for preserving commit history.

```bash
# Revert
git revert <commit-hash>
```
