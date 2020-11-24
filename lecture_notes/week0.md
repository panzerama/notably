# Week 0
This week we'll be talking about setting up the React and Express development and running both applications for development. We'll also cover what your workflow should be as an individual contributor to your group project.

## Using this Repo
Throughout the course I will refer to this repository as an example for different parts of the lecture. For instance, the snapshot of this repo that we'll focus on this week is an unmerged branch called `lecture_notes_0`, also referred to as tag `w0`. 

If these terms sound unfamiliar to you, review git lesson
Viewing, editing markdown

## The Development Environment for our Class
In the interest of making things simple for you, I'm going to dictate the tools you use
* IDE: VSCode. It's lightweight, easy to use, and free. 
* Git Client: I would highly recommend using the [git client built into VSCode](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support). If you're using macOS or Linux, you can realy on git (`brew install git` for macOS, it should be built in on most Linux distros). You'll need to install Git for Windows to use either the built-in or command line in Windows. See the instructions below.
* Github for your team project.
* Tech Stack: React, Express, PostgreSQL (an open source SQL RDBMS)
* **Javascript** Coffeescript, Typescript, etc are great fun (I'm a fan of typescript myself) but we'll stick to ES2019-ish Javascript.
* If you choose to write tests, please use jest. **Writing tests is optional** and I will award **extra credit** to any team demonstrating at least 33% test coverage by the end of the quarter. 

### First Steps {For Windows Users}
1. Download [VSCode](https://code.visualstudio.com/)
2. If you are on Windows, download [Git for Windows](https://gitforwindows.org/). 
3. This is an excellent guide to installing and configuring VSCode with Git for Windows. You can stop once you get to the section titled "Setting up GitLab Key".
4. Create an SSH key to [use with GitHub](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/connecting-to-github-with-ssh). 

### First Steps {For Mac Users}

### First Steps {For Linux Users}

### The Rest of It
4. Create your personal project folder. 
5. In that folder directory, initialize a git repository. [VSCode Docs](https://code.visualstudio.com/docs/editor/versioncontrol)
6. Make your first git commit.
7. Go to [GitHub](https://github.com/) and [create a new repository](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-new-repository). Make sure that the repository is **completely empty when you create it**
8. Copy the address for the repository. We have an SSH key attached to our GitHub profile, so we can use the SSH URL for our repo.
9. Add that repo as a remote to your local Git repo by using `git remote add {remote_name} {remote_url}`.
10. Push your repo to GitHub with the command `git push {remote_name} head`.


Workflow
Basic application stack setup
