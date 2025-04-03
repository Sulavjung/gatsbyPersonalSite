---
Type: Activity
slug: exploring-http-basics
Title: Re-learning HTTP, but in depth this time
tags:
  - Networking
  - HTTP
  - TCP
  - UDP
  - Security
Description: A personal dive into how HTTP works with TCP, plus answers to new questions about UDP, TCP security, and making HTTP secure.
Author: Sulav Jung Hamal
Date: 2025/04/02
Research_Field: Networking
---

I’ve been poking around how HTTP works lately, and it’s been a fun ride figuring out the nuts and bolts. Here’s what I’ve learned so far, plus some new questions I chased down.

## What I Learned About HTTP
So, HTTP—the magic behind webpages—runs on TCP, and here’s the gist of it:
- **TCP Connection**: The client (like my browser) kicks off a TCP connection to a server with this cool three-step handshake thing: SYN, SYN-ACK, ACK.
- **Server Response**: The server’s like, “Alright, I’m here!” and accepts the connection.
- **HTTP Messages**: The client sends an HTTP request (“Hey, send me that page!”), and the server shoots back HTTP messages—like the code for this site.
- **Wrap-Up**: Once it’s done, the TCP connection closes with a FIN and ACK swap.

It’s all about making sure stuff gets there in order, no chaos. Pretty neat setup!

## New Questions, New Finds
As I was messing with this, some questions popped up that sent me digging deeper. Here’s what I uncovered:

### 1. Can HTTP Work with UDP Instead of TCP?
- **Surprise!**: Yep, it totally can! I stumbled on **HTTP/3**, the newest HTTP flavor, which swaps TCP for **QUIC** over UDP. 
- **Why UDP?**: It’s speedy—no handshake delays—but raw UDP skips reliability. QUIC patches that up, adding order and security on top, perfect for fast stuff like streaming. Older HTTP (1.1, 2) sticks to TCP, but HTTP/3 is next-level!

### 2. TCP Isn’t Secure—Huh?
- **The Deal**: TCP’s awesome at delivery, but it’s not locking the door. It sends data plaintext, so snoopers could peek at my requests—like passwords if I’m sloppy. That’s a wake-up call!

### 3. How Do I Secure My HTTP Stuff?
- **HTTPS FTW**: Found **HTTPS**—HTTP wrapped in **TLS** (or old-school SSL). It encrypts the whole deal, so:
  - No eavesdropping (confidentiality).
  - No messing with my data (integrity).
  - I can trust the server’s real (authentication with certificates).
- **Game Plan**: Grab a TLS certificate (Let’s Encrypt is free!), tweak my server (say, Nginx) for port 443, and switch to `https://my-site.com`. 
- **Bonus**: Add **HSTS** to force HTTPS and toss in some secure headers to dodge tricks like XSS. Locked down tight!

## My Take
Getting the hang of HTTP on TCP was a solid start—reliable and orderly, love that. But HTTP/3 on UDP blew my mind—speed with smarts! And spotting TCP’s security gap pushed me to HTTPS, which feels like a must for anything I’d whip up now. Figuring this out on my own showed me HTTP’s got layers (pun intended), and securing it is where the real fun’s at. What’s your take—any HTTP hacks you’ve picked up?

*Next Up: Maybe I’ll play with QUIC or set up HTTPS for real. Catch you later!*

## 🍀 Resources
- [Computer Networking: A Top-Down Approach, 8th Edition by Kurose and Ross](https://github.com/bookyue/my_books/blob/master/computer_network/Computer%20Networking%20A%20Top-Down%20Approach%20Global%20Edition%208th%20Edition%20by%20Kurose%2C%20James%2C%20Ross%2C%20Keith.pdf)
- [Business Data Networks and Security, Eleventh Edition](https://www.pearson.com/en-us/subject-catalog/p/business-data-networks-and-security/P200000001617/9780137515165)

