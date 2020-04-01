---
id: cloud-server
title: Cloud Server Setup
sidebar_label: Cloud Server
---

## Get SSH public Key

```bash
ssh-keygen -t rsa -C "abc@xyz.com"
```

## First time login after creating the server

```bash
ssh -i ~/.ssh/id_rsa root@ip_address

adduser sammy
usermod -aG sudo sammy

sudo nano /etc/ssh/sshd_config
PermitRootLogin no
PasswordAuthentication no

su - sammy
mkdir ~/.ssh
chmod 700 ~/.ssh
nano ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys # Copy public key into this file
sudo systemctl reload sshd.service

## Important check access before exiting from your local terminal
ssh -i ~/.ssh/id_rsa sammy@ip_address
```

## Future logins

```
ssh -i ~/.ssh/id_rsa sammy@ip_address
```

## Firewall

```bash
sudo apt-get install ufw
sudo ufw status

sudo nano /etc/default/ufw
set > IPV6=yes

sudo ufw disable
sudo ufw enable
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 22/tcp
sudo ufw allow www

# Specific port
sudo ufw allow 3306
```

## TimeZone

```bash
date
sudo dpkg-reconfigure tzdata
```

## Base packages

```
sudo apt update && sudo apt dist-upgrade && sudo apt autoremove
sudo apt -y install gcc make linux-headers-$(uname -r) dkms
sudo apt install -y build-essential autoconf automake python-dev curl
```

## Docker Installation

https://docs.docker.com/install/linux/docker-ce/ubuntu/

```
sudo groupadd docker
sudo usermod -aG docker $USER
su ${USER}
id -nG
```

## Docker Compose

https://docs.docker.com/compose/install/

## Run applications with docker

```
# Simple HTTP Server
docker run --name http-server -p 80:80 -d nginx

# MySQL Database
docker run --name mysql-db -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 --restart always -d mysql:5.7.29
docker run --name phpmyadmin -d --link mysql-db:db -p 4444:80 phpmyadmin/phpmyadmin

# Install Wordpress
docker run --name wordpress-site \
 --link mysql-db \
 -p 80:80 \
 -e WORDPRESS_DB_HOST=mysql-db \
 -e WORDPRESS_DB_USER=root \
 -e WORDPRESS_DB_PASSWORD=my-secret-pw \
 -e WORDPRESS_DB_NAME=wordpress \
 -e WORDPRESS_TABLE_PREFIX=wp_ \
 -d wordpress
```

## File Copying TO & FROM the server

```
# Local file TO the server
scp -i ~/.ssh/test_cloud_rsa $PWD/christiann-koepke-EkL50nhEEoc-unsplash.jpg ubuntu@server-ip:/home/ubuntu/

# Local file FROM the server
scp -i ~/.ssh/test_cloud_rsa ubuntu@server-ip:/home/ubuntu/christiann-koepke-EkL50nhEEoc-unsplash.jpg $PWD/copy.jpg

# Local folder TO the server
scp -i ~/.ssh/test_cloud_rsa -r $PWD/image-folder ubuntu@server-ip:/home/ubuntu/image-folder

# Local folder FROM the server
scp -i ~/.ssh/test_cloud_rsa -r ubuntu@server-ip:/home/ubuntu/image-folder $PWD/image-folder-copy
```
