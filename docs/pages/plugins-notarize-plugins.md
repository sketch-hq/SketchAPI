---
title: Notarize a plugin
section: plugins
chapter: Guides
permalink: /plugins/notarize-plugins

order: 106
excerpt: Sketch JavaScript plugins can load native frameworks written in Objective-C, or use bundled binaries. For these plugins to work, they must be notarised by Apple to meet stricter security guidelines introduced with macOS 10.15 Catalina.
---

With the introduction of macOS 10.15 Catalina, native apps and frameworks are automatically verified by the operating system to minimise the risk of running malicious code. If your plugin includes native frameworks or bundled binaries, notarization is mandatory.

> **Note:** Plugins written purely in JavaScript and not containing bundled binaries do not require notarization.

_Notarization is not App Review._ Apple will not review your code, and the process shouldn't delay your publishing workflow. For more information, see [Notarizing Your App Before Distribution](https://developer.apple.com/documentation/xcode/notarizing_your_app_before_distribution), at Apple's Developer Site.

## Prerequisites for notarization

To notarize your plugin, you will need the following:

- An [Apple Developer Account](https://developer.apple.com) with two-factor authentication (2FA) enabled.
- An [app-specific password](https://support.apple.com/en-us/HT204397) for your plugin.


## Notarization Methods

You can use two methods to notarize your plugin: automatically using [`skpm`](https://github.com/skpm/skpm), or  manually using the command line.


### Notarization using `skpm`

1. Open or create a new `.skpmrc` file next to your plugin's `package.json` and add the notarization setting:

   ```yaml
   notarization:
     authority: 'Developer ID Application: TEAM'
     username: 'AC_USERNAME'
     password: 'AC_PASSWORD'
   ```

3. Replace `TEAM` with the name of your team on App Store Connect.
4. Replace `AC_USERNAME` with your App Store Connect username (usually an email address).
5. Replace `AC_PASSWORD` with your password, using one of the methods described on the [Password Storage appendix](#appendix-password-storage).

Once all the information is there, `skpm` will automatically notarize your plugin whenever you publish it.

> **Quick tip:** To use your own notarization mechanism and integrate with `skpm`,
provide the command in the `.skpmrc` notarization settings:
>
> ```yaml
> notarization:
>   command: './notarize-plugin.sh'
> ```
> `skpm` will bundle your plugin, create a ZIP archive of it, and run your command automatically, passing the path to the archive as a parameter, e.g. `./notarize-plugin.sh path/to/select-shapes.sketchplugin-1.0.zip`.


### Notarization using the command line

1. Create a ZIP archive of your `.sketchplugin` bundle (including your native frameworks or binaries).
2. Code-sign the ZIP archive using this command in the terminal. The identifier must match the bundle identifier of your plugin framework in Xcode (not necessarily your plugin identifier in the manifest).

   ```bash
   codesign -f -s "Developer ID Application: Bob Ross" --timestamp --identifier "com.organization.PluginName" path/to/select-shapes.sketchplugin-1.0.zip
   ```

3. Send the ZIP to Apple for notarization:

   ```bash
   xcrun altool --notarize-app -f path/to/select-shapes.sketchplugin-1.0.zip --primary-bundle-id "com.example.sketch.plugin.select-shapes" -u "user@example.com" -p "app-specific-password"
   ```

4. Wait for a notarization email confirmation from Apple before releasing the plugin.

> **Note:** If you make any changes to your plugin framework you’ll need to notarize again.


## Appendix: Password Storage

You have two options for storing your password in `.skpmrc`:

### Option 1: Encrypted password in local Keychain (recommended)

You can provide a reference to a **local** keychain item in `.skpmrc` (`skpm` cannot access iCloud keychain items for security reasons). This assumes the keychain holds a keychain item named `AC_PASSWORD` with an account value matching the username (`user@example.com`, in our example):

```yaml
notarization:
  authority: 'Developer ID Application: Your Team Name'
  username: 'user@example.com'
  password: '@keychain:AC_PASSWORD'
```

You can create the `AC_PASSWORD` keychain item using the command line, or the `Keychain Access` application.

- #### Using the command-line:

  ```bash
  security add-generic-password -a "user@example.com" -w "app-specific-password" -s "AC_PASSWORD"
  ```

- #### Using the Keychain Access application:

  1. Open Keychain Access.
  2. Select _File > New Password Item…_ and set these values on the dialog:
      - Keychain Item Name: `AC_PASSWORD`.
      - Account Name: `user@example.com` (your App Store Connect username).
      - Password: `app specific password`.
  3. Click _Add_.

### Option 2: Cleartext password

If you don't mind having a cleartext password on your `.skpmrc` file, use your [app-specific-password](https://support.apple.com/en-us/HT204397) in the `password` section:

```yaml
notarization:
  authority: 'Developer ID Application: Your Team Name'
  username: 'user@example.com'
  password: 'app-specific-password'
```


## Related resources

- [Notarizing Your App Before Distribution](https://developer.apple.com/documentation/xcode/notarizing_your_app_before_distribution), at Apple's Developer Site.
