## title

git reset

## question

`git reset`

## answer

`git reset <commit-hash>` will always move HEAD and the branch reference to point to the specified commit.

There are three main options that affect the "three trees" differently:

- `--hard`: All commits and pending local changes made after the specified commit will be deleted from the branch. That is, the staging area will be wiped and the working directory will be reset to reflect the specified commit. Be careful using this option.
- `--mixed`: The default option. The staging area will be wiped, and all changes will unstaged/retained in the working directory.
- `--soft`: Only performs the movement of the HEAD and branch reference to the specificed commit. The working directory and staging area are untouched.

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
