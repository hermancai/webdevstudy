## title

git branch

## question

`git branch`

## answer

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
