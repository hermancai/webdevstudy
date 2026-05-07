## title

git rebase

## question

`git rebase`

## answer

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
