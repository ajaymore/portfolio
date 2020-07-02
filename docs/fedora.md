---
id: fedora
title: Fedora
sidebar_label: Fedora
---

## OS Setup

- [Add rpmfusion repositories](https://rpmfusion.org/Configuration)
- Update and cleanup

```
sudo dnf update -y
sudo dnf install zlib.i686 ncurses-libs.i686 bzip2-libs.i686 -y
sudo dnf install exfat-utils fuse-exfat font-manager cabextract -y
sudo dnf install youtube-dl -y
```

- fedora package cleanup

```
dnf remove package
dnf autoremove
dnf clean all
dnf reinstall
```

## Gnome configuration

Install remove-rounded-corners, window-list as extensions

```
gsettings set org.gnome.desktop.wm.preferences button-layout ":minimize,maximize,close"
sudo dnf install adapta-gtk-theme gnome-tweak-tool
```

## Packages

- [Google Chrome](https://www.google.com/chrome/browser/features.html)
- [Sublime Text](https://www.sublimetext.com/docs/3/linux_repositories.html#dnf)
- [VSCode](https://code.visualstudio.com/docs/setup/linux#_rhel-fedora-and-centos-based-distributions)

```
wget https://github.com/kakkoyun/linux.files/raw/master/fonts/Consolas.ttf
{
  "editor.formatOnSave": true,
  "window.zoomLevel": 0,
  "editor.fontFamily": "CONSOLAS",
  "workbench.colorTheme": "Kary － Light",
  "prettier.eslintIntegration": true,
  "prettier.singleQuote": true
}
```

- [Docker](https://docs.docker.com/install/linux/docker-ce/fedora/#set-up-the-repository)

```
docker run --name mongo-container --restart always -p 27017:27017 -d mongo
```

- [NodeJS](https://nodejs.org/en/download/package-manager/#enterprise-linux-and-fedora)

```
[File Watching](https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc)
```

- [Yarn](https://yarnpkg.com/en/docs/install)
- Android
  - Java
  ```
  sudo dnf install java-1.8.0-openjdk-devel
  sudo update-alternatives --config java
  sudo nano /etc/environment
  JAVA_HOME="/usr/lib/jvm/java-8-oracle"
  source /etc/environment
  echo $JAVA_HOME
  ```
  - [Android Studio](https://developer.android.com/studio/index.html)
  - [Virtualization](https://bytefreaks.net/android/fedora-configure-hardware-acceleration-for-the-android-emulator)
  ```
  sudo dnf group install --with-optional virtualization;
  sudo systemctl start libvirtd;
  sudo systemctl enable libvirtd;
  lsmod | grep kvm
  ```
- [React Native](https://facebook.github.io/react-native/docs/getting-started.html)
