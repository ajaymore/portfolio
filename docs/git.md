---
id: git
title: Git
sidebar_label: Git
---

**HEAD is a reference to the last commit in the currently checked-out branch.**

_The command git remote add origin git@github.com:peter/first_app.git creates a new remote called origin located at git@github.com:peter/first_app.git. Once you do this, in your push commands, you can push to origin instead of typing out the whole URL._

Sets the name, email you want attached to your commit transactions

```
git config --global user.name "[name]"
git config --global user.email "[email address]"
```

Create repositories

```bash
# Clone existing repository
git clone https://xxx

# Create local repository
git init

# Add remote origin to local repository
git remote add origin https://xxx

# List all currently configured remotes
git remote -v

# Download changes and merge into HEAD
git pull <remote> <branch>

# Remote git
rm -rf .git
```

Create and manage branches

```bash
# List all existing branches
git branch -av

# Switch HEAD branch
git checkout <branch>

# Creates MyFeature branch off dev.
git checkout -b myFeature dev

# Now merge your changes to dev without a fast-forward
git checkout dev
git merge --no-ff myFeature

# Create a new branch based on your current HEAD
git branch <new-branch>

# Delete a local branch
git branch -d <branch>

# Delete remote branch
git branch -d <remote/branch>
```

Managing and pushing code

```bash
# Changed files in working directory
git status

# Changes to tracked files
git diff

# Add all changed files
git add --all

# Add some changes in <file> to the commit
git add -p <file>

# Commit all the files added
git commit -m "Commit message"

# Set default push branch
git push --set-upstream origin docs

# Push the changes
git push <remote> <branch>
```

Get info

```bash
git log
git log -p <file>
git blame <file>
```

Undo

```bash
git reset --hard HEAD
git checkout -- yarn.lock
```
