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

Configure Git credentials

**answer**

```bash
git config --global user.name "your name"
git config --global user.email "your email"
```

**question**

Create or clone a repository

**answer**

```bash
# Create a repository
git init <directory>

# Create a repository in the current directory
git init .

# Clone a repository
git clone <url> <directory>
```

**question**

Stage and commit changes

**answer**

```bash
# Check current state of repository
git status

# Stage all changes in a file
git add <file>

# Cancel staged change
git restore --staged <file>

# Stage all changes in a directory
git add <directory>

# Commit staged changes with message
git commit -m "message"
```

**question**

Create a new branch

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

Sync branch with remote repository

**answer**

```bash
# Get updates from remote branch
git fetch

# Merge remote updates into current branch
git pull

# Update remote repository with local commits
git push
```

**question**

Switch to another branch

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

Merge branches

**answer**

```bash
# Merge some branch into current branch
git merge <branch>

# Cancel merge
git merge --abort
```

**question**

Insert commits into current branch

**answer**

```bash
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

Get commit history of repository

**answer**

```bash
# Default display
git log

# Simplified one line per commit
git log --oneline

# Formatting options
git log --pretty=format:"%h %ad | %s%d [%an]" --date=short
```

[More Options](https://git-scm.com/docs/git-log)

**question**

Reset changes

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

Revert a commit

**answer**

`git revert` takes a commit and attempts to create a new commit that cancels the changes of the specified commit. This is useful for preserving commit history.

```bash
# Revert
git revert <commit-hash>
```
