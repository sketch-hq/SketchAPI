---
title: Notarize native frameworks
section: plugins
chapter: Guides
permalink: /plugins/notarize-native-frameworks

order: 111
excerpt: Sketch JavaScript plugins can load native framework written in Objective-C. For these plugins to work, they must be notarised by Apple to meet stricter security guidelines introduced with macOS 10.15 Catalina.
---

With the introduction of macOS 10.15 Catalina, native apps and frameworks are automatically verified by the operating system to minimise the risk of running malicious code.

If your plugin contains native frameworks, notarization is mandatory if you want it to run on macOS 10.15. **Plugins written purely in JavaScript are not affected.**

Keep in mind that notarization is not App Review: Apple will not review your code, nor reject your plugin under any circumstance. For more information, see [Notarizing Your App Before Distribution](https://developer.apple.com/documentation/xcode/notarizing_your_app_before_distribution), at Apple's Developer Site.

Notarizing can be done using one of two options:

## 1. Use `skpm`

(From <https://github.com/skpm/skpm/blob/master/docs/notarization.md>)

> `skpm` makes it easy to notarize your plugin when you publish it.
>  ̶ [`skpm` documentation](https://github.com/skpm/skpm/blob/master/docs/notarization.md)

_If you do not have a native framework, skip to 2._

1. In your Xcode project, select the _Signing and Capabilities_ tab and select _Developer ID Application_ for the _Signing Certificate_ setting.
2. Open or create a new `.skpmrc` file next to your plugin's `package.json` and add the notarization setting:

   ```yaml
   notarization:
     authority: 'Developer ID Application: TEAM'
     username: 'AC_USERNAME'
     password: 'AC_PASSWORD'
   ```

3. Replace `TEAM` with the name of your team on App Store Connect.
4. Replace `AC_USERNAME` with your App Store Connect username, usually an email address. Note, App Store Connect requires two-factor authentication (2FA) on all accounts, so you must create an [app-specific password](https://support.apple.com/en-us/HT204397).

5. Set the password in `.skpmrc` using one of the following methods:
   1. **Cleartext password in .skpmrc:** If you don't mind having a cleartext password on your `.skpmrc` file (something we definitely **do not recommend**), just add your password to the file:
      ```yaml
      notarization:
        authority: 'Developer ID Application: Your Team Name'
        username: 'username@org'
        password: 'super-secret-password'
      ```
   2. **Password stored in local Keychain:** You can provide a reference to a **local** keychain item in `.skpmrc` (`skpm` cannot access iCloud keychain items for security reasons). This assumes the keychain holds a keychain item named `AC_PASSWORD` with an account value matching the username `AC_USERNAME`:
      ```yaml
      notarization:
        authority: 'Developer ID Application: Your Team Name'
        username: 'username@org'
        password: '@keychain:AC_PASSWORD'
      ```
      You can create the `AC_PASSWORD` keychain item using any of these two methods:
         1. Using the command-line:
            ```bash
            security add-generic-password -a "AC_USERNAME" -w <super-secret-password> -s "AC_PASSWORD"
            ```
         2. Using the _Keychain Access_ application:
            1. Open Keychain Access.
            2. Add new password item named `AC_PASSWORD`.
            3. Set the password using your app specific password.  

> **Quick tip:** To use your own notarization mechanism and integrate with `skpm`,
provide the command in the `.skpmrc` notarization settings:
>
> ```yaml
> notarization:
>   command: './custom-script.sh'
> ```
> `skpm` will bundle and zip your plugin, run your command automatically, and set the path to the *zipped* plugin bundle as a parameter, e.g. `./notarize-plugin.sh path/to/plugin.zip`.


## 2. Use Xcode

1. Make sure your plugin framework is signed as a Developer ID Application in Xcode:

   <img src="/images/developer/dev-id.png" width="536" height="auto" alt="Developer ID in Xcode" />

2. Drop your framework into your .sketchplugin bundle and zip the entire bundle.
3. Code-sign the zip using this command in the terminal. The identifier must match the bundle identifier of your plugin framework (not necessarily your plugin identifier in the manifest).

   ```bash
   codesign -f -s "Developer ID Application: John Doe" --timestamp --identifier "com.organization.PluginName" /Users/johndoe/Desktop/PluginName.zip
   ```

4. Send the zip for notarization:

   ```bash
   xcrun altool --notarize-app -f /Users/johndoe/Desktop/PluginName.zip --primary-bundle-id "com.organization.PluginName" -u "yourAppleIDEmail@gmail.com" -p "app-specific-password"
   ```

5. Wait for a notarization email confirmation from Apple before releasing the plugin.

> **Note:** If you make any changes to your plugin framework you’ll need to notarize again.

## Related resources

- [Notarizing Your App Before Distribution](https://developer.apple.com/documentation/xcode/notarizing_your_app_before_distribution), at Apple's Developer Site.
