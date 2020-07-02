---
id: ubuntu
title: Ubuntu
sidebar_label: Ubuntu
---

> OS is installed through live CD

## Packages

### Base packages

- `sudo apt update && sudo apt dist-upgrade && sudo apt autoremove`
- `sudo apt -y install gcc make linux-headers-$(uname -r) dkms`
- `sudo apt install -y exfat-fuse exfat-utils build-essential autoconf automake python-dev youtube-dl curl net-tools vim lib64stdc++6:i386 mesa-utils libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 libbz2-1.0:i386`

### Applications

- Install chrome, vscode, telegram, robomongo

### Development Environment

#### Editors

- [Sublime](https://www.sublimetext.com/docs/3/linux_repositories.html)
- VSCode

```
# install consolas font
sudo apt install -y font-manager cabextract
wget https://github.com/kakkoyun/linux.files/raw/master/fonts/Consolas.ttf
>> Install using font manager
# VS Code - prettier, python, kary-light
{
  "javascript.validate.enable": false,
  "editor.formatOnSave": true,
  "[yaml]": {
    "editor.formatOnSave": false
  },
  "window.zoomLevel": 0,
  "prettier.eslintIntegration": true,
  "prettier.singleQuote": true,
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/dist": true
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "explorer.confirmDragAndDrop": false,
  "files.associations": {
    "*.ejs": "html"
  }
}
```

#### Nodejs

- [Nodejs](https://nodejs.org/en/download/package-manager/)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [Watchman `./configure --enable-lenient`](https://facebook.github.io/watchman/docs/install.html)

```
echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_watches  && echo 999999 | sudo tee -a  /proc/sys/fs/inotify/max_queued_events && echo 999999 | sudo tee  -a /proc/sys/fs/inotify/max_user_instances && watchman  shutdown-server
watchman watch-del-all
watchman shutdown-server
sudo lsof -i :8081
kill -9 23583
```

- Packages

```
npm install express-generator graphcool nodemon babel-cli -g
```

#### Docker

- [Docker](https://gist.github.com/levsthings/0a49bfe20b25eeadd61ff0e204f50088)
- Docker-compose

```
sudo curl -L https://github.com/docker/compose/releases/download/1.18.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

- [Post docker installation](https://docs.docker.com/engine/installation/linux/linux-postinstall/)
- [Virtualbox](https://www.virtualbox.org/wiki/Linux_Downloads)

```
sudo sh -c 'echo "deb http://download.virtualbox.org/virtualbox/debian $(lsb_release -sc) contrib" >> /etc/apt/sources.list'
sudo apt-key add oracle_vbox_2016.asc
sudo apt-key add oracle_vbox.asc
sudo apt update
sudo apt install -y virtualbox-5.2
VBoxManage -v
```

#### Android

- [Jdk](https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-get-on-ubuntu-16-04)
- [Android Studio](https://developer.android.com/studio/index.html)
- [Emulation](https://developer.android.com/studio/run/emulator-acceleration.html?utm_source=android-studio#vm-linux)

```
vim ~/.bashrc
ADD export ANDROID_EMULATOR_USE_SYSTEM_LIBS=1
source ~/.bashrc
cd ~/Android/Sdk/tools/lib/
ln -s /usr/lib64/libstdc++.so.6  libstdc++
```

### Raspbian emulation

[Instructions](https://blog.agchapman.com/using-qemu-to-emulate-a-raspberry-pi/)

```
sudo apt install qemu
git clone https://github.com/dhruvvyas90/qemu-rpi-kernel.git
qemu-img convert -f raw -O qcow2 2017-08-16-raspbian-stretch-lite.img raspbian-stretch-lite.qcow
qemu-img resize raspbian-stretch-lite.qcow +6G

sudo qemu-system-arm \
-kernel ./kernel-qemu-4.4.34-jessie \
-append "root=/dev/sda2 panic=1 rootfstype=ext4 rw" \
-hda raspbian-stretch-lite.qcow \
-cpu arm1176 -m 256 \
-machine versatilepb \
-no-reboot \
-serial stdio \
-net nic -net user \
-net tap,ifname=vnet0,script=no,downscript=no

#login pi/raspberry
sudo raspi-config
sudo apt install lightmd
```

#### React Native

- [Setup](https://facebook.github.io/react-native/docs/getting-started.html)

```
sudo yarn global add ngork --modules-folder /usr/lib/node_modules
sudo yarn global add exp --modules-folder /usr/lib/node_modules
sudo npm install -g create-react-native-app react-native-cli
```

## Installation cleanup, errors

```
sudo apt update
sudo apt clean
sudo apt autoremove
sudo apt --fix-broken install
sudo add-apt-repository -r ppa:<ppa to remove>
dpkg --list
sudo apt-get --purge remove gimp
sudo apt-get autoremove
sudo apt-get purge --auto-remove gimp
sudo apt-get clean
```

## OS Configuration

- `gsettings set org.gnome.shell.extensions.dash-to-dock click-action 'minimize'`

## `youtube-dl`

youtube-dl --extract-audio --audio-format mp3 (video URL)
