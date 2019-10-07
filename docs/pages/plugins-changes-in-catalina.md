---
title: Changes in macOS 10.15
section: plugins
chapter: Guides
permalink: /plugins/changes-in-catalina

order: 600
excerpt: macOS 10.15 Catalina brings a few security changes that affect plugins that use native frameworks
---

Sketch 56 introduced a hardened runtime and stricter security rules required by Apple for the upcoming macOS 10.15 release.

Notarization gives users more confidence that the plugin you distribute has been checked by Apple for malicious components. Notarization is not App Review. The Apple notary service is an automated system that scans your software for malicious content, checks for code-signing issues, and returns the results to you quickly.

Notarization is becoming mandatory on macOS 10.15 if your plugin contains native frameworks and might become mandatory for every plugin in an upcoming version of macOS (Apple is tightening up the security).

The way the system works means some third party Sketch plugins might be affected, with the effects ranging from plugins not loading all the way to plugins crashing Sketch on launch.

If you develop a plugin that uses native frameworks, here are some steps you can take to avoid any issues with Sketch in macOS 10.15.

## Notarizing plugins using `skpm`

(From <https://github.com/skpm/skpm/blob/master/docs/notarization.md>)

`skpm` makes it easy to notarize your plugin when you publish it.

### How to

If you do not have a native framework, skip to 2.

1. You first need to sign your framework. In your Xcode project, go to the "Signing and Capabilities" tab. You need to use a "Developer ID Application" certificate.
2. Create a `.skpmrc` file next to your `package.json` file
3. Add the following content in the `.skpmrc` file:

   ```yaml
   notarization:
     authority: 'Developer ID Application: TEAM'
     username: 'AC_USERNAME'
     password: '@keychain:AC_PASSWORD'
   ```

Replace `TEAM` with the name of your team on App Store Connect.

Replace the `AC_USERNAME` with your App Store Connect username (usually an email address). Because App Store Connect now requires two-factor authentication (2FA) on all accounts, you must create an app-specific password, as described in [Using app-specific passwords](https://support.apple.com/en-us/HT204397).

To avoid including your password as cleartext in the file, you can provide a reference to a keychain item. This assumes the keychain holds a keychain item named `AC_PASSWORD` with an account value matching the username `AC_USERNAME`. Note that skpm can’t access your iCloud keychain for security reasons, so the item must be in your login keychain. You can add a new keychain item using the Keychain Access app, or from the command line using the security utility:

```bash
security add-generic-password -a "AC_USERNAME" -w <secret_password> -s "AC_PASSWORD"
```

### Custom command

Alternatively, if you have some more complex needs for your plugin, you can replace the default skpm process by a custom bash command.

In the `.skpmrc` file, add the following content:

```yaml
notarization:
  command: './custom-script.sh'
```

Skpm will execute `./custom-script.sh ./path/to/plugin.zip` and expect the same zip to be notarized at the end.


## Notarizing plugins using Xcode

(Credits to Aby Nimbalkar for the information)

Requirements for notarizing plugins using Xcode and the command line:

- [Two-factor authentication](https://support.apple.com/en-us/HT204915) needs to be enabled for your account.
- An [app-specific password](https://support.apple.com/en-us/HT204397)to use in Terminal for the notarization. It will have a format like this: `wzac-jvbe-nhqu-wjao`

1. Make sure your plugin framework is signed as a Developer ID Application in Xcode:

    ![](/images/developer/dev-id.png)

2. Drop your framework into your .sketchplugin bundle and zip the entire bundle.
3. Code-sign the zip using this command in the terminal. The identifier must match the bundle identifier of your plugin framework (not necessarily your plugin identifier in the manifest).

    ```bash
    codesign -f -s "Developer ID Application: John Doe" --timestamp --identifier "com.organization.PluginName" /Users/johndoe/Desktop/PluginName.zip
    ```

4. Send the zip for notarization:
    ```bash
    xcrun altool --notarize-app -f /Users/johndoe/Desktop/PluginName.zip --primary-bundle-id "com.organization.PluginName" -u "yourAppleIDEmail@gmail.com" -p "wzac-jvbe-nhqu-wjao"
    ```

1. Wait for a notarization email confirmation from Apple before releasing the plugin.
> **Note:** If you make any changes to your plugin framework you’ll need to notarize again.

## Further reading

- [Notarizing your app before distribution](https://developer.apple.com/documentation/xcode/notarizing_your_app_before_distribution), at Apple's Developer Site.
