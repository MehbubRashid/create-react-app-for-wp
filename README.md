# Useful git Commands
```
git push -am "message"
```
Add+commit at once. No need to ```git add .``` first.


```
git branch
```
List all local git branches


```
git branch -a
```
List all local+remote branches


```
git log --oneline
```
Display all commits with commit hashes.


```
git revert --no-commit HEAD~3..
```
Revert till a specific commit.(in this case, last 3 commits) (The specified commit will be erased too) 

After that, we need to use ```git commit``` to commit the revert.



```
git checkout -b branch-name
```
Create a new branch called branch-name and checkout to that branch.


```
git fetch origin anybranch:anybranch
```
Copy origin/anybranch into local/anybranch by creating anybranch in local.
Upstream is not set by default in this method. So only writing ```git push``` won't work.


```
git tag v1.0.0
```
Create a new tag without any annotations. This type of tags are AKA lightweight tags. In this case, the last commit message is used as tag annotation.


```
git tag v1.6 -m "tag message"
```
Create a new tag with an annotation.


```
git push origin v1.6
```
Push v1.6 of local to the remote v1.6.

**Note:** Tags are updatable and deletable.
[Git Delete Tag and Git Update Tag](https://www.toolsqa.com/git/git-delete-tag/)



# git push Guide

```bash
git push origin master
```
This command will push your master branch to the remote master branch, no matter which branch you are currently on.

```bash
git push origin my-branch
```
Similarly, this command will push your my-branch to the remote my-branch, no matter which branch you are currently on.

**Note:** If my-branch does not exist in remote, it will create it in remote.
But if my-branch does not exist in local, it will throw an error saying

```bash
error: src refspec my-branch does not match any
```

## What is git push -u origin master

The -u flag refers to 'set upstream'. Which means the remote master branch will be set as upstream for our local master branch.
So that, we can just use git push,git pull without specifying the remote name and branch name.

This command is usually run only first time.


```bash
git push -u origin branch-name
```

Similarly, this will set upstream remote/branch-name for local/branch-name and then git pull, git push can be directly called.

**Alternative Approach:** [How can I tell a local branch to track a remote branch?](https://www.git-tower.com/learn/git/faq/track-remote-upstream-branch)


# git merge Guide

```
git merge branch-name
``` 
This will merge the branch-name with currently logged-in branch.

```
git merge
```
This will merge the corresponding remote branch with current logged-in branch.
Here, upstream must be set previously using ```git push -u origin branch-name``` command.


## How to review and test the codes of a github pull request locally and merge the pull request

First we have to create a local branch using that pull request. This branch will be representing how it will look if we merge the PR.

```
git fetch origin pull/37/head:new-branch-name
```

37 is the id number of the pull request in github. This will fetch the output of that PR and save it in our local new-branch-name

Now we can checkout to new-branch-name and test our code.

After we are done testing and checking, we are finally good to merge the PR. We will do it locally too. First we need to merge this new-branch-name with our local master branch. It is always a good idea to ```git pull``` everytime before merging anything to local master.


```
git checkout master
git pull
git merge new-branch-name
```

Now that we have the PR merged in our local master, we will now push it to the remote master.

```
git push origin master
```

Or

```
git push
```

We can now check on github, the PR is merged there too!




## Merge commits VS Merge squash VS Rebase

![](https://i.stack.imgur.com/3GuQE.png)
![](https://i.stack.imgur.com/Lh9LK.png)
**Rebase:**
![](https://i.stack.imgur.com/1tGHe.png)


# How to go back to previous commit and start working there

First we will create a backup branch of the working branch(master)

```
git branch backupbranch
```
Then we can hard reset the current working branch to any specific commit

```
git reset --hard commithash
```

Now we can again start working after that commit hash. Next we can use ```git cherry-pick commithash``` to again bring specific commit from our previous backup branch to our current working branch.
