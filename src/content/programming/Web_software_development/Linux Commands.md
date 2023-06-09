---
Title: Linux Most Commonly Used Commands.
Date: 06/07/2023
Author: Sulav Jung Hamal
BookAuthor: Sulav Jung Hamal
Type: Class
Class: websoftwaredevelopment
slug: linuxcommands
Genera: Data Science 
Status: Planning 🔗
Due_Date: 06/07/2023
Description: Best linux commands cheat sheet in the world. Our comprehensive guide covers file and directory operations, user management, networking, process management, system information, and more. Learn how to streamline your Linux experience with these commands.  
Tag:
  - class
---

# Linux  Most Commonly Used Commands
This page provides a comprehensive overview of the most commonly used commands in Linux. It covers a wide range of commands that are essential for navigating the Linux operating system, managing files and directories, working with users and permissions, networking, process management, system information, and more.

The article is structured into sections, making it easy to locate commands based on their respective categories. Each command is presented with a brief description of its functionality and usage. The commands are accompanied by examples and explanations, enabling readers to understand how they can be applied in practical scenarios.

## File and Directory Operations
File and directory operations involve various commands that allow you to interact with files and directories in Linux. Here is a brief description of some common file and directory operations:

| Command | Description |
|---------|-------------|
| `ls` | Lists all files and directories in the present working directory |
| `ls -R` | Lists files in sub-directories as well |
| `ls -a` | Lists hidden files as well |
| `ls -al` | Lists files and directories with detailed information like permissions, size, owner, etc. |
| `cd` or `cd ~` | Navigate to HOME directory |
| `cd ..` | Move one level up |
| `cd` | To change to a particular directory |
| `cd /` | Move to the root directory |
| `cat > filename` | Creates a new file and then allow you to add on the file. `Ctrl D` to get out of it. |
| `cat filename` | Displays the file content |
| `cat file1 file2 > file3` | Joins two files (file1, file2) and stores the output in a new file (file3) |
| `mv file "new file path"` | Moves the files to the new location |
| `mv filename new_file_name` | Renames the file to a new filename |
| `rm filename` | Deletes a file |
| `mkdir directoryname` | Creates a new directory in the present working directory or at the specified path |
| `rmdir` | Deletes an empty directory |
| `mv` | Renames or moves a file or directory |

## User and Permissions Management
User and permissions management commands help you manage users and control access to files and directories. Some common commands in this category include `chown` for changing ownership of files and directories, `chmod` for modifying file permissions, `adduser` for adding new users, `passwd` for changing user passwords, and `userdel` for removing users.

| Command | Description |
|---------|-------------|
| `chown user filename` | Changes the ownership of a file/directory |
| `chown user:group filename` | Changes the user and group for a file or directory |
| `sudo adduser username` | Adds a new user |
| `sudo passwd -l 'username'` | Changes the password of a user |
| `sudo userdel -r 'username'` | Removes a user and their home directory |
| `sudo usermod -a -G GROUPNAME USERNAME` | Adds a user to a group |
| `sudo deluser USER GROUPNAME` | Removes a user from a group |
| `chmod` | Changes the permissions of a file or directory |
| `chmod +x filename` | Grants execute permission to a file |
| `chmod u+rwx filename` | Grants read, write, and execute permissions to the owner |

## Text Editing
Text editing commands are used to create, modify, and view text files in Linux. The most commonly used text editor in Linux is `vi` or `vim`. Commands like `i`, `a`, and `o` are used to insert text in vi, while `dd` and `dw` are used to delete text. Other commands like `y`, `p`, and `:wq` are used for copying, pasting, and saving changes, respectively.

| Command | Description |
|---------|-------------|
| `vi` | Opens the vi text editor |
| `i` | Inserts at the cursor position (goes into insert mode) |
| `a` | Writes after the cursor (goes into insert mode) |
| `A` | Writes at the end of the line (goes into insert mode) |
| `ESC` | Terminates insert mode |
| `u` | Undoes the last change |
| `U` | Undoes all changes to the entire line |
| `o` | Opens a new line (goes into insert mode) |
| `dd` | Deletes a line |
| `3dd` | Deletes 3 lines |
| `D` | Deletes contents of the line after the cursor |
| `C` | Deletes contents of a line after the cursor and inserts new text |
| `dw` | Deletes a word |
| `4dw` | Deletes 4 words |
| `cw` | Changes a word |
| `x` | Deletes a character at the cursor |
| `r` | Replaces a character |
| `R` | Overwrites characters from the cursor onward |
| `s` | Substitutes one character under the cursor and continues to insert |
| `S` | Substitutes the entire line and begins to insert at the beginning of the line |
| `~` | Changes the case of an individual character |

## Networking
Networking commands in Linux help you manage network connections and troubleshoot network-related issues. Commands like `ping` are used to check network connectivity, `ifconfig` displays network interface configuration, `ssh` allows remote login to another machine, and `scp` is used for secure file transfer between hosts.

| Command | Description |
|---------|-------------|
| `ssh username@ip-address or hostname` | Logs into a remote Linux machine using SSH |
| `ping hostname` | Pings and analyzes network and host connections |
| `scp file username@hostname:destination` | Copies a file securely to a remote server |
| `ssh-keygen` | Generates SSH key pairs |
| `ifconfig` | Displays network interface configuration |
| `netstat` | Displays network connections and statistics |

## Process Management
Process management commands are used to monitor and control running processes in Linux. `ps` displays information about running processes, `kill` terminates processes, `top` provides real-time monitoring of processes, and `bg` and `fg` are used to manage processes in the background and foreground, respectively.

| Command | Description |
|---------|-------------|
| `ps` | Gives the status of processes running for a user |
| `ps PID` | Gives the status of a particular process |
| `pidof` | Gives the Process ID (PID) of a process |
| `kill PID` | Terminates a process |
| `top` | Details on all active processes |
| `bg` | Sends a process to the background |
| `fg` | Runs a stopped process in the foreground |

## System Information
System information commands provide information about the system's hardware and software. Commands like `date` display the current date and time, `uptime` shows system uptime, `who` lists the currently logged-in users, and `df` provides information about disk space usage.

| Command | Description |
|---------|-------------|
| `date` | Displays the current date and time |
| `cal` | Displays a calendar |
| `uptime` | Displays system uptime |
| `who` | Lists users currently logged in |
| `df` | Gives free hard disk space on your system |
| `free` | Gives free RAM on your system |

## Other Useful Commands
There are various other useful commands in Linux that perform different tasks. Some examples include `history` for displaying command history, `clear` for clearing the terminal screen, and `exit` for exiting the current shell or terminal session. These commands help enhance productivity and perform routine tasks efficiently.

| Command | Description |
|---------|-------------|
| `history` | Displays a list of previously executed commands |
| `clear` | Clears the terminal screen |
| `exit` | Exits the current shell or terminal session |

---
