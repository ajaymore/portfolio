---
id: rnative-ios
title: React Native iOS
sidebar_label: iOS
---

**1. Development setup | Project creation**

```
react-native init myapp
cd myapp/ios
pod init | update pod file with relevant details
pod install | Open workspace in xcode, start packager from terminal | https://facebook.github.io/react-native/docs/integration-with-existing-apps#configuring-cocoapods-dependencies
Run project from xcode
Update app name, bundle identifier in general tab
Edit code in VSCode
```

**2. Code development | IDEs Text Editor**

- Xcode
  - Project Clean CMD + Option + SHIFT + K
- VSCode

**3. Third party component integration (iOS, Android)**

```
# react-native-firebase
yarn add react-native-firebase
react-native link react-native-firebase
update podfile
cd ios && pod update
update AppDelegate.m file
Create firebase project, download GoogleService-Info.plist
add GoogleService-Info.plist to root of the project
To add libraries -> Libraries ➜ Add Files to [your project's name]
Update URL Schemes in Info


--- Icons
--- SplashScreen
--- Certificates
--- Notifications
--- Oauth
--- Deployment processes

update all the pods
```

https://github.com/react-native-community/react-native-svg#automatically
https://rnfirebase.io/docs/v5.x.x/installation/ios

```
# react-native-google-signin
```

**4. Push notifications**

**5. Reusable Component library**

- Form wrappers
- Data fetching logic
- File upload logic

**6. App Signing | Certificate management**

- Choose automatic signing in XCode
- Create App Id at https://developer.apple.com/account/ under Certificates, Identifiers & Profiles
- Create Push notification key under Keys if required
- Create App in http://itunesconnect.apple.com/
- Update relevant url schemes under Info section in Xcode

**7. Building & Testing deployments**

- Add beta testers under Users & Roles at http://itunesconnect.apple.com/
- Create 1024\*1024 Icon, use icon Set Generator utility to generate assets
- Product -> Scheme -> Edit Scheme -> Run | choose debug or release
- comment/uncomment packaging code AppDelegate.m
- Info.plist -> App Transport Security Settings -> Exception Domains -> localhost -> NESException -> YES | NO
- Product > Archive > Window > Organizer > Validate > Upload

**8. Using emulators**

- Optimize Rendering for window size is disabled
- Use http://localhost to access local network

**9. App submission guides**

- Verify permissions

```
<key>NSCameraUsageDescription</key>
<string>$(PRODUCT_NAME)  would like to use your camera to capture pictures of your field trip and submit them in Field Trip report.</string>
<key>NSLocationAlwaysUsageDescription</key>
<string>We may need your location information to establish direct communication</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>We may need your location information to establish direct communication</string>
<key>NSMicrophoneUsageDescription</key>
<string>$(PRODUCT_NAME) would like to use you microphone to capture sound while you are recording your videos for the act of active citizenship report</string>
<key>NSPhotoLibraryAddUsageDescription</key>
<string>$(PRODUCT_NAME) would like to save photos to your photo gallery. These are the photos that you may want to download from the app for viewing and editing with your phone.</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>$(PRODUCT_NAME) App would like to access your photo gallery for you to upload photos with the field reports. None of your photos would be accessed without your permission.</string>
```

- Description
- [SplashScreen Library](https://github.com/crazycodeboy/react-native-splash-screen)
  [SplashScreen Setup](https://medium.com/handlebar-labs/how-to-add-a-splash-screen-to-a-react-native-app-ios-and-android-30a3cec835ae)

**10. App Deployment**

- Toggle step 6 & 8
