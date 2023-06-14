---
Title: Git’s Basics and Usage
Date: 06/13/2023
Author: Sulav Jung Hamal
BookAuthor: Sulav Jung Hamal
Type: Class
Class: websoftwaredevelopment
slug: gitsBasicsAndUsage
Genera: Data Science 
Status: Planning 🔗
Due_Date: 06/13/2023
Description: Git is an open source distributed VCS designed for speed and efficiency. Firstly, it was created by Linus Torvalds, the renowned creator of Linux. It is one of the most widely used VCS tools in the software development industry. Learn more!
Tag:
  - class
---


# Git 
Throughout our careers, we have encountered the term **Git** in various contexts. While we may have had a general understanding of its purpose, we often found ourselves puzzled and uncertain. Today, let's delve into this concept and ensure that we gain a clear and comprehensive understanding of what **Git** truly is. In one of the most basic sense and most broadly explained terms, **Git** is a **VCS**(Version Control System). Firstly, let's understand what **VCS** is and we will come back to what **Git** is. 

# VCS (Version Control System)
**Version Control System (VCS)** refers to a **software tool or system** that enables developers to keep track of changes made to files and folders over time. It serves as a central repository where all modifications are recorded, allowing multiple authors or developers to collaborate on a project while maintaining a history of changes. VCS not only tracks who made which changes but also provides information about why the changes were made through commit messages. 

Git is the one possible application of this concept of version control. There are other software that also provide us with a way to do similar thing which we can differentiate in two different categories. 

## Centralized VCS (Subversion, CVS):
In a centralized version control system like **Subversion (svn)** and **CVS (Concurrent Versions System)**, there is a central server that holds the master repository. All commits and changes made by developers are sent directly to the central server. The server acts as a single source of truth, maintaining the complete history and latest version of the project. Developers work on their local copies of the files, but the central server is responsible for merging and managing the changes from multiple contributors.

## Distributed VCS (Git, Mercurial):
In contrast, distributed version control systems like Git and Mercurial follow a different approach. While there is still a server that hosts the master repository, each developer has their own local copy or clone of the entire repository on their machine. This allows developers to work independently and make changes locally without the need for a constant connection to the central server. The distributed nature of these systems enables greater flexibility, offline work, and faster operations as most actions can be performed locally without relying heavily on the server.

With these concept of VCS understood, let's go back to understanding **Git as VCS**. 

# Git as VCS
Git is an **open source distributed VCS** designed for speed and efficiency. Firstly, it was created by Linus Torvalds, the renowned creator of Linux. It is one of the most widely used VCS tools in the software development industry.

Secondly, Git is highly efficient and optimized for performance. It employs advanced algorithms and data structures to ensure fast operations, even with large codebases and extensive histories. The distributed nature of Git makes it insanely fast, because most things you do happen on your local machine. The local nature of Git makes it effortless to create branches to isolate your work. This efficiency makes Git particularly suitable for managing complex projects with numerous contributors.

Thirdly, Git acts as an insurance policy against accidental mistakes and data loss. With Git, developers can easily recover deleted or modified work and track changes made to the codebase. Additionally, Git’s distributed nature ensures that each developer has a complete backup of the repository on their local machine. This redundancy mitigates the risk of data loss in case of a hard drive failure or other catastrophic events.

#  What is GitHub then?
GitHub is a web-based platform built on top of **Git** that provides hosting services for Git repositories and much more functionalities to enhance collaboration, code sharing, and project management. It provides a central server for our project from which we can have a local copy of the code base and work on them without having the fear of losing it in case of catastrophic incident to our local machine. 

Nonetheless, Git’s hosted solution is GitHub.com which is more widespread and more expensive. But there are similar solution like Bitbucket.com which is much cheaper and it integrates with Jira. 

# Git Workflow
Here is the workflow in it's barebone form. 
1. **Obtain** a repository by initializing it with `git init`, cloning it with `git clone`, or pulling changes if you already have the repository.
2. Make **edits** using your preferred text editor or IDE, as Git tracks changes to both text-based and binary files.
3. **Stage** your changes with `git add`.
4. **Commit** your work with a clear commit message using `git commit -m "message"`.
5. **Push** your changes to a remote repository using `git push remotename localbranch:remotebranch`.

# Git's main concepts and Most used Commands
Now, let's talk about some of the key concepts and the command for each concepts in concise details. 
Certainly! Here is the list of key concepts in Git with each concept as an H2 heading, followed by a brief description and an example code block:

## A. Download / Create Local Repo. 
### 1. Repository(repo)
A **repository**, or repo, is a collection of files and folders and the history of those files that are tracked and managed by Git. It serves as the central storage for a project's codebase and its entire history. It can live on a local machine or on a remote server (GitHub). 
Here is how you start a repo: 
```bash
git init 
```

### 2. Clone
Cloning creates a copy of a remote repository on a local machine. It sets up a connection between the local and remote repositories, enabling collaboration and version control.
Example:
```bash
git clone <repository-url>
```

## B. Checking What's changed. 
### 1. Status
The `git status` command displays the current state of the Git repository. It provides information about the modified files, untracked files, and the status of the branch. It is commonly used to check the status of the repository before committing changes or pulling/pushing to a remote repository.
Example:
```bash
git status
```

### 2. Log
The `git log` command displays the commit history of the repository. It shows the list of commits in reverse chronological order, starting from the most recent commit. The log includes information such as the commit hash, author, date, and commit message. This command helps in reviewing the commit history and understanding the changes made to the repository.
Example:
```bash
git log
```

### 3. Diff
The `git diff` command shows the differences between different versions of files in the repository. It displays the changes made to the files that are not yet staged (changes in the working directory) or the differences between the staged changes and the last commit. This command helps in reviewing the changes before committing or understanding the modifications made to the code.
Example:
```bash
git diff                  # Show unstaged changes
git diff --staged         # Show staged changes
git diff commit1 commit2  # Show differences between two commits
```

## C. Storing Edits
### 1. Commit
A commit represents a **snapshot** of the repository at a specific point in time. It captures the changes made to files and folders, along with a commit message describing the changes. It has three pieces of information. Information about how the files changed from a previous commit, a reference to the commit that came before it and a hash code name. 
Example:
```bash
git commit -m "Initial commit"
```

### 2. Staging Area (Index)
The staging area, also known as the index, is a place where changes are prepared to be committed. It allows for selectively staging specific changes before creating a commit.
Example:
```bash
//To add a single file
git add file.txt

//To add all files at once
git add .
```

## D. Marking Important Events in History
### 1. Tag
A tag is a special type of commit as such, just like any other commit, the tag only exists locally. Tags in Git are used to mark important points in the commit history, such as releases, milestones, or significant versions of the project. They serve as stable references to specific commits and are often used for versioning and to indicate specific points in the development process.
Example:
```bash
git tag -l          # List all tags. 

git tag v1.0        # Tag the current commit as the v1.0. 

git tag -a v1.1 -m "Tagging version 1.1 with extra feature"      # Tag with a message. 
```

## E. Updating your local repo
### 1. Pull
Pulling retrieves changes from a remote repository and incorporates them into the local repository. It updates the local branch with the latest changes made by other collaborators. It will fetch and merge the changes. 
Example:
```bash
git pull origin master
```

### 2. Fetch
Fetching retrieves changes from a remote repository and incorporates them into the local repository. It updates the remote tracking branches without modifying the local branches.
Example:
```bash
git fetch origin
```

## F. Branch/History Management
### 1. Branch
A branch is an independent line of development within a repository. It allows for parallel work on different features, bug fixes, or experiments without affecting the main codebase. All commits in git live on some branch but there can be many, many branches. The main branch in a project is called the **master branch**. 
Example:
```bash
git branch feature
```

### 2. Merge
Merging combines changes from different branches into a single branch. It integrates the changes made in one branch with another, creating a unified history of the project.
Example:
```bash
git merge feature
```

### 3. Rebase
Rebasing is the process of moving or combining a sequence of commits to a new base commit. It allows for a cleaner commit history and smoother integration of changes.
Example:
```bash
git rebase main
```

### 4. Checkout
The `git checkout` command is a versatile and powerful command in Git that allows you to switch between different branches, restore files from previous commits, and create new branches. Its primary purpose is to update the working directory and the state of the repository based on the target you specify.

Here are some common use cases of `git checkout`:

1. **Switching Branches:**
   ```bash
   git checkout <branch-name>
   ```
   This command allows you to switch to an existing branch within the repository. It updates the working directory to reflect the state of the chosen branch, including the files and commit history specific to that branch.

2. **Creating and Switching to a New Branch:**
   ```bash
   git checkout -b <new-branch-name>
   ```
   This command creates a new branch with the specified name and immediately switches to that branch. It is a convenient way to create and start working on a new branch without explicitly using separate commands for branch creation and checkout.

3. **Discarding Local Changes:**
   ```bash
   git checkout -- <file-name>
   ```
   The `--` in the command is used to separate the `<file-name>` argument from the branch or commit name. This form of `git checkout` discards the local changes made to the specified file and reverts it to the state of the last commit. It is useful when you want to discard your changes and restore the file to its previous state.

4. **Checking Out Specific Commit:**
   ```bash
   git checkout <commit-hash>
   ```
   By providing a commit hash, you can check out a specific commit. This puts the repository in a "detached HEAD" state, meaning you are no longer on any branch but directly on the commit you checked out. It allows you to review and work with the repository at a specific point in its history.

## G. Storing changes offsite/off box
### 1. Push
Pushing sends local commits to a remote repository. It updates the remote branch with the latest changes made locally, allowing other team members to access the new commits.
Example:
```bash
git push
git push origin main     # To push main to the origin. 

git push origin --tags   # To push the tags to the origin. 
```

## H. Reverting / Undoing commits
### 1. Reset
Reset allows you to move the current branch to a specific commit, discarding subsequent commits. It is used to undo changes and reset the branch to a previous state.
Example:
```bash
git reset <commit-hash>
```

### 2. Revert
Revert creates a new commit that undoes the changes made in a specific commit. It is a safe way to undo commits while preserving the commit history.
Example:
```bash
git revert <commit-hash>
```

## I. Few other handy commands
### 1. Remote
A remote is a link to another repository that is typically hosted on a remote server. It allows for collaboration and enables pushing and pulling changes between local and remote repositories.
Example:
```bash
git remote add origin <remote-url>
```

### 2. Conflict
A conflict occurs when Git is unable to automatically merge changes from different branches. It requires manual intervention to resolve conflicting changes.
Example:
```bash
<<<<<<< HEAD
// Code in the current branch
=======
// Code in the incoming branch
>>>>>>> incoming_branch
```

### 3. Cherry-pick
Cherry-picking allows you to apply specific commits from one branch to another. It enables you to select and include specific changes without merging entire branches.
Example:
```bash
git cherry-pick <commit-hash>
```

### 4. Gitignore
A .gitignore file specifies intentionally untracked files and directories that Git should ignore. It is used to exclude files from being tracked in the repository.
Example:
```bash
# Ignore compiled files
*.class

# Ignore log files
*.log

# Ignore a directory
logs/
```

### 5. Git Reflog
Git reflog is a log of all reference updates, including commits, branch creations, and branch checkouts. It helps track and recover lost or deleted commits.
Example:
```bash
git reflog
```

### 6. Submodule
A submodule is a separate Git repository embedded within another repository. It allows for managing and versioning external dependencies as separate entities.
Example:
```bash
git submodule add <repository-url>
```

### 7. Remote Branch
A remote branch represents a branch in a remote repository. It allows for collaboration and tracking changes made by others in the shared repository.
Example:
```bash
git push origin main
```

### 8. Fork
Forking creates a personal copy of a repository under a user's GitHub account. It allows for independent development and contribution without affecting the original repository.
Example:
```bash
git fork
```

> I’m working on a cheat sheet for the Git commands. If you are into that, check out the website at later times. 

