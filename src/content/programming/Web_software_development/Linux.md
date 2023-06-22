---
Title: Linux
Date: 06/07/2023
Author: Sulav Jung Hamal
BookAuthor: Sulav Jung Hamal
Type: Class
Class: websoftwaredevelopment
slug: linux
Genera: Data Science 
Status: Planning 🔗
Due_Date: 06/07/2023
Description: Unleash the power of Linux, the open-source operating system, for enhanced productivity and reliability. 
Tag:
  - class
---

# Linux Kernel

The Linux kernel is an open-source operating system that serves as a Unix-like monolithic kernel. It should not be confused with Linux distributions, as the kernel is just one component of a complete Linux operating system. At its core, the Linux kernel is responsible for managing a computer's hardware, including user management, resource management, process scheduling, hardware drivers, and more. In its minimalist form, a Linux operating system can consist of the Linux kernel, C libraries, toolchain, and basic system utilities such as a shell and login process.

# History

Before Linux, there was Unix, which originated from the Multics project. In 1969, a filesystem design led to the development of Unix, initially implemented on PDP-7 and later on PDP-11. In 1973, Unix was rewritten in C, marking a significant milestone. Unix's distribution outside of Bell Laboratories led to further development by organizations like Berkeley's Software Division (BSD). BSD versions were released with new features, such as csh, vi, virtual memory, job control, and TCP/IP.

In 1991, Linus Torvalds, a student at the University of Helsinki, implemented the first version of the Linux kernel. Linux gained popularity among developers due to its open-source nature and attracted a collaborative community that contributed new features and improved the codebase. This collaborative effort also led to the development of Git, a version control system designed to handle the Linux source code. Today, the Linux kernel is a full-fledged operating system that can run on various hardware, from everyday devices to supercomputers.

# Basic Blocks of Linux Kernel

The Linux kernel encompasses essential components for managing a computer's hardware. These components include modules for memory management, process scheduling, user management, virtual file system management, network management, security, hardware device drivers, and other kernel services. Linux distributions build upon this kernel, adding a windowing system, package management, and other software chosen by the distribution maintainers.

---

# Linux Permissions

Like most operating systems, Linux has control systems in place to manage access to files and directories. Understanding Linux permissions can initially seem complicated, but it can be simplified.

## Command to Show Permissions

To view permissions of a file or directory, you can use the following command:

```bash
ls -l
```

## Permissions Breakdown

Linux permissions are divided into three groups:

1. User permissions: Apply only to the owner of the file or directory.
2. Group permissions: Apply only to the assigned group of the file or directory.
3. Other user permissions: Apply to all other users on the system.

## Basic Permission Types

There are three basic permission types:

1. Read: Allows users to view the contents of a file.
2. Write: Enables users to modify or create files and directories.
3. Execute: Determines if users can execute a file or access the contents of a directory.

## Permission Representation

Permissions are represented in a structured format. Taking two examples:

- For a directory:
```bash
drwxr-xr-x 2 sulav sulav 4.0K Jan 23 20:53 Videos
```

- For a file:
```bash
-rw-r--r-- 1 sulav sulav 360K Aug 10 23:26 Photos
```

## Modifying Permissions

Permissions can be modified using the `chmod` command, while file ownership can be changed using the `chown` command. The permissions are defined using the permission groups and types.

#### Permission Groups:
- `u`: Owner
- `g`: Group
- `o`: Other
- `a`: All users

#### Permission Types:
- `r`: Read
- `w`: Write
- `x`: Execute

## Octal Representation

Linux uses octal (base-8) representation to represent permission bits. Here's a table for easy reference:

```bash
Octal Digit | Binary Representation (rwx) | Permission
------------|----------------------------|-----------
0           | 000                        | none
1           | 001                        | execute only
2           | 010                        | write only
3           | 011                        | write and execute
4           | 100                        | read only
5           | 101                        | read and execute
6           | 110                        | read and write
7           | 111                        | read, write, and execute (full permissions)
```

Remembering the octal values can help in setting permissions efficiently.

```bash
Read (r)   -> 4
Write (w)  -> 2
Execute (x)-> 1
```

For example, to grant a user read, write, and execute permissions, the value would be 4+2+1 = 7.

Using this table and understanding octal representation can enhance your understanding of Linux permissions.

---

# Linux File System - Important Directories

Linux follows the Filesystem Hierarchy Standard (FHS) to define its directory structure. Let's explore the important folders and files in Linux in a simplified manner:

## 1. / (Root Directory)
- The top-level directory in the Linux file structure.
- All other folders and subfolders extend from here.
- Only the root user has permission to modify this directory.
- The home directory for the root user is /root.

## 2. /boot (Boot Directory)
- Stores files related to system booting.
- Includes kernel images, kernel config files, initrd images, Grub bootloader, and its config files.

## 3. /bin (Binary Directory)
- Contains essential executables required for basic system functionality.
- Commands in this folder are accessible to all users.
- Examples include cat, chmod, chgrp, chown, date, dir, dd, df, ln, mv, and various compression tools.

## 4. /sbin (System Binary Directory)
- Contains commands needed for system-level tasks, such as disk management and network management.
- Normal users can access this folder, but they cannot execute the commands within.
- These commands/scripts are typically run by the root user.
- Elevated access through SUDO or Powerbroker is necessary for non-root users.

## 5. /usr (User Directory)
- Secondary hierarchy for read-only user data, including utilities and applications.
- Contains subdirectories such as /usr/bin (binary files for user programs) and /usr/sbin (binary files for system administrators).
- /usr/lib stores libraries for /usr/bin and /usr/sbin.
- /usr/local contains user programs installed from source.
- /usr/src holds Linux kernel sources, header files, and documentation.

## 6. /dev (Device Directory)
- Stores files for devices such as terminals, USB devices, CD-ROMs, HDDs, and mounted images.
- Noteworthy: /dev/null is a special file that discards everything written into it, useful for suppressing program output.

## 7. /etc (Configuration Directory)
- Stores system-wide configuration files.
- Generally restricted to configuration files and does not store binaries.
- Examples include configuration files for webservers (Apache, Nginx), package manager (APT), sudoers (users with sudo access), and default values for bashrc.
- Man pages are available for most entries, e.g., `man 5 passwd` for the passwd file.

## 8. /home (Home Directory)
- Directory where user-specific files and folders are stored.
- Typically, there is a folder for each user, although it's not required.

## 9. /lib (Library Directory)
- Stores library files used by applications.
- Other lib folders exist in various directories, but the one in the root (/) also stores kernel modules.
- Kernel modules are essential for the system to work, including drivers for network, video cards, printers, sound cards, and virtualization (e.g., VirtualBox).

## 10. /media (Media Directory)
- Automatically mounts external storage devices (e.g., CD-ROMs, USB drives, external HDD/SSDs) when plugged in.

## 11. /mnt (Mount Directory)
- Used for manually mounting storage devices or partitions.
- Not widely used nowadays, but it can be helpful for fixing file system issues.
- Temporary mount points should be used here.

## 12. /opt (Optional Directory)
- Reserved for installing add-on application software packages.
- Programs like IntelliJ or Chrome may be stored here, as well as VirtualBox Guest Editions.

## 13. /srv (Service Directory)
- Contains site-specific data served by the system.
- Helps users locate the data files for a specific service (e.g., webserver under

 /srv/html or an FTP site under /srv/ftp).

## 14. /var (Variable Directory)
- Stores files whose contents change during system operation.
- Specific to each computer and not shared over a network.
- Subdirectories include /var/log (system and application log files), /var/cache (cached data from applications), /var/lock (lock files created by programs), and /var/lib (dynamic data libraries and files).

## 15. /tmp (Temporary Directory)
- Used for programs that require temporary files.
- Programs or services store temporary files in /tmp.
- It's recommended to delete files and directories in /tmp on every system boot.

## 16. /proc (Process Directory)
- A virtual (pseudo) filesystem providing process and kernel information as files.
- Automatically generated and populated by the system.
- Some system utilities read from this directory in a more user-friendly format.
- For example, `lsmod` can be replaced by `cat /proc/modules`.

## 17. /sys (System Directory)
- Similar to /proc, /sys is a virtual filesystem for displaying system information.
- Some files in /sys (and /proc) can be written to change system properties.
- For example, changing the brightness of the monitor by modifying `/sys/class/backlight/acpi_video0/brightness`.
