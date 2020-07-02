---
id: rnative-android
title: React Native Android
sidebar_label: Android
---

\*\*\*\* Important
https://stackoverflow.com/questions/45992044/xcode-8-build-works-but-archive-fails-react-native

**1. Development setup | Project creation**

```
react-native init rnative
Open in Android
Change package name app/build.gradle, MainApplication.java, AndroidManifest.xml, Strings.xml
fix BuildConfig import in MainApplication.java
Add Firebase
Edit code in VSCode
```

```
./gradlew clean > Restart Android Studio
react-native-firebase
./gradlew clean > Restart Android Studio
react-native-google-signin

- react-native-gesture-handle, react-native-svg, react-native-vector-icons, @react-native-community/async-storage
```

\*\*. Deep Linking

https://www.raywenderlich.com/6080-universal-links-make-the-connection
https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html#//apple_ref/doc/uid/TP40016308-CH12-SW2
https://medium.com/@parkerdan/react-native-universal-linking-ios-deep-linking-android-with-a-rails-server-d993649ae6be
https://developer.android.com/training/app-links/deep-linking

```
adb shell am start -W -a android.intent.action.VIEW -d "https://rnative.drushtikon.org/__/
xcrun simctl openurl booted https://rnative.drushtikon.org/__/
```

**2. Code development | IDEs Text Editor**

- Android Studio
  - Format > Option | CMD + L
- VSCode

**3. Third party component integration (iOS, Android)**

```
# react-native-firebase
firebase is connected in android studio

repositories {
      google()
      jcenter()
  }
  dependencies {
      classpath 'com.android.tools.build:gradle:3.1.3'
      classpath 'com.google.gms:google-services:4.0.1'
      // NOTE: Do not place your application dependencies here; they belong
      // in the individual module build.gradle files
  }

allprojects {
    repositories {
        mavenLocal()
        google()
        jcenter()
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url "$rootDir/../node_modules/react-native/android"
        }
    }
}

Add latest firebase and play-services libraries
update all installed packages from compile to implementation
Update MainApplication.java

Update react-native-vector-icons to
compileOnly "com.facebook.react:react-native:${safeExtGet('reactNativeVersion', '+')}"
```

```
# react-native-google-signin
Enable google login in firebase
yarn add react-native-google-signin
react-native link react-native-google-signin
latest of implementation 'com.google.android.gms:play-services-auth:15.0.0'
```

**4. Push notifications**
https://github.com/OneSignal/OneSignal-Gradle-Plugin/issues/37#issuecomment-391983620
https://rnfirebase.io/docs/v4.3.x/messaging/android
https://rnfirebase.io/docs/v4.3.x/notifications/android

**5. Reusable Component library**

- Form wrappers
- Data fetching logic
- File upload logic

**6. App Signing | Certificate management**

- [Create keystore, add SHA1 to firebase app](https://flutter.io/android-release/)

```
# debug sha1
keytool -exportcert -list -v -alias androiddebugkey -keystore ~/.android/debug.keystore
# production sha1
keytool -genkey -v -keystore ~/keys/mobileapp/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias mobileapp
keytool -exportcert -list -v -alias mobileapp -keystore ~/keys/mobileapp/key.jks
```

**7. Building & Testing deployments**

- https://play.google.com/apps/publish
- https://developer.apple.com/account/ios/authkey/
-

**8. Using emulators**

-

**9. App submission guides**

- Description
- [SplashScreen Library](https://github.com/crazycodeboy/react-native-splash-screen)
  https://www.youtube.com/watch?v=H0CC1UsvjDQ
  [SplashScreen Setup](https://medium.com/handlebar-labs/how-to-add-a-splash-screen-to-a-react-native-app-ios-and-android-30a3cec835ae)

```
create a 1242 X 2436 asset and export from XD
```

**10. App Deployment**

- Toggle step 6 & 8

## Miscellaneous

- React Art, d3

  - https://medium.com/@jennysihua/creating-a-donut-chart-in-react-native-with-d3-and-art-2a7ac91dda5c
  - https://stackoverflow.com/questions/37658957/no-component-found-for-view-with-name-artshape
  - https://medium.com/the-react-native-log/animated-charts-in-react-native-using-d3-and-art-21cd9ccf6c58

## Logo

- Design at 1024 X 1024
- Icon Set Generator on IOS
- https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html#foreground.type=clipart&foreground.clipart=android&foreground.space.trim=1&foreground.space.pad=0.25&foreColor=rgba(96%2C%20125%2C%20139%2C%200)&backColor=rgb(68%2C%20138%2C%20255)&crop=0&backgroundShape=square&effects=none&name=ic_launcher

## Typescript

- Add dependencies
- tslint.json, tsconfig.json, rn-cli.config.js
