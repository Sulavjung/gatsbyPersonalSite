---
Title: How to Install Nginx and configure it in Ubuntu server?
Date: 2024/02/24
Author: Sulav Jung Hamal
BookAuthor: Sulav Jung Hamal
Type: Blog
slug: howtoinstallnginxandconfigureitinubuntuserver
Genera: Tech Tutorial
Status: Completed
Cover_Image: https://source.unsplash.com/an-abstract-image-of-a-sphere-on-a-black-background-grH6lq1PXbo/1320x400
Description: Learn how to install and configure Nginx on your Ubuntu server to effectively serve web content and deploy web applications.
tags:
  - Nginx
  - Ubuntu
  - Web
  - Server
  - Configuration
  - Tutorial
---

## **Introduction:**

Nginx is a powerful web server and reverse proxy that is widely used for hosting websites and web applications. In this tutorial, we'll guide you through the process of installing Nginx on an Ubuntu server and configuring it to serve web content.

## **Step 1: Update Package Index**

Before installing any new software, it's a good practice to update the local package index to ensure you have the latest information about available packages. Open a terminal and run the following command:

```bash
sudo apt update
```

## **Step 2: Install Nginx**

Once the package index is updated, you can install Nginx by running the following command:

```bash
sudo apt install nginx
```

This command will download and install Nginx and its dependencies.

## **Step 3: Start Nginx**

After the installation is complete, Nginx should start automatically. You can verify its status by running:

```bash
sudo systemctl status nginx
```

If Nginx is running, you should see output indicating that it's active and running.

If not, you can always start the Nginx by:

```bash
sudo systemctl start nginx
```

## **Step 4: Verify Installation**

You can now verify that Nginx is installed and running correctly by opening your web browser and navigating to your server's public IP address. You should see the default Nginx welcome page, indicating that Nginx is functioning properly.

```bash
http://ip-address-of-the-ubuntuServer
```

## **Step 5: Serve your web app**

Now that Nginx is installed and running on your Ubuntu server, you can serve your web application using Nginx.

By default, Nginx serves files from the `/var/www/html` directory. You can place your website files in this directory to serve them through Nginx. You should now go ahead and create a folder in this location `/var/www/` with the name of your application. You can use such commands to do that.

```bash
sudo mv /path/to/the/build/folder /var/www/todotoday

#Check if all the files exist there.
cd /var/www/todotoday
```

## **Step 6: Configure Nginx sites-enabled**

Now, go ahead and configure Nginx to serve different websites by creating server blocks in the `/etc/nginx/sites-enabled/` directory.

```bash
#Create a new todotoday file in that location.
sudo vi /etc/nginx/sites-enabled/todotoday
```

Now, have these information inside that file.

```bash
# Don't forget to delete all the comment.
server {
      listen 80;				#Port that is open from the AWS.
      listen [::]:80;

      server_name publicIpOfUbuntuServer;  #Public IP from the AWS

      root /var/www/todotoday;  #Location to the build folder.
      index index.html;		#Name of the index file.

      location / {
              try_files $uri $uri/ =404;
      }
}
```

Or, here is that without the comment:

```bash
server {
      listen 80;
      listen [::]:80;

      server_name publicIpOfUbuntuServer;

      root /var/www/todotoday;
      index index.html;

      location / {
              try_files $uri $uri/ =404;
      }
}
```

## Step 7: Stop the nginx server, start it and check the status.

Since the server is already running. Stop it using this command.

```bash
sudo systemctl stop nginx
```

Now, the server is stopped, you want to start it again.

```bash
sudo systemctl start nginx
```

Just to be sure, check the server status.

```bash
sudo systemctl status nginx
```

After that, you can just go ahead to the browser and go to your ip address. It should be same as the `publicIpOfUbuntuServer` that you used above.

If you did everything as outlined above, you should be able to see your web page.

> Note:
>
> 1. I recommend you to use the basic html file for hosting initially to get an idea of it.
> 2. Also, make sure that you are using `http://` but not `https://` if you haven't yet configured the SSL certificate.

## **Conclusion:**

Congratulations! You've successfully installed Nginx on your Ubuntu server and configured it to serve web content. You can now deploy your websites and web applications using Nginx as the web server. If you encounter any issues or have specific requirements, refer to the Nginx documentation or seek further assistance from the community.
