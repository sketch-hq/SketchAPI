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

**To notarize your plugin, you will need the following:**

- A **paid** [Apple Developer Account](https://developer.apple.com) with two-factor authentication (2FA) enabled.
- An [app-specific password](https://support.apple.com/en-us/HT204397) for your plugin.

You can use three methods to notarize your plugin:

1. automatically using [`skpm`](https://github.com/skpm/skpm)
1. manually using the command-line
1. using a helper plugin: [Sketch Notarizing Assistant](https://github.com/abynim/sketch-notarizing-assistant)


## 1. Use `skpm`

1. Open or create a new `.skpmrc` file next to your plugin's `package.json` and add the notarization setting:

   ```yaml
   notarization:
     authority: 'Developer ID Application: TEAM'
     username: 'AC_USERNAME'
     password: 'AC_PASSWORD'
   ```

1. Replace `TEAM` with the name of your team on App Store Connect.
1. Replace `AC_USERNAME` with your App Store Connect username (usually an email address).
1. Replace `AC_PASSWORD` with your app-specific password or keychain item as described in the [Keychain password storage](#keychain-password-storage) section.

Once all the information is there, `skpm` will automatically notarize your plugin whenever you publish it.

> **Quick tip:** To use your own notarization mechanism and integrate with `skpm`,
provide the command in the `.skpmrc` notarization settings:
>
> ```yaml
> notarization:
>   command: './notarize-plugin.sh'
> ```
> `skpm` will bundle your plugin, create a ZIP archive of it, and run your command automatically, passing the path to the archive as a parameter, e.g. `./notarize-plugin.sh path/to/select-shapes.sketchplugin-1.0.zip`.


## 2. From the command-line

1. Code-sign the framework or binary using the following command in the terminal. The identifier must match the bundle identifier of your plugin framework in Xcode, which may be different from your plugin identifier in the manifest.

   ```bash
   codesign -f -s "Developer ID Application: Bob Ross" --timestamp --identifier "com.example.sketch.plugin.select-shapes.framework" --deep --options runtime path/to/select-shapes.sketchplugin/Content/Sketch/SelectShapes.framework
   ```

1. Create a ZIP archive of your `.sketchplugin` bundle including native frameworks or binaries.

1. Submit the ZIP archive to Apple for notarization. The identifier can be _anything you want_, as long as it is unique and makes sense to you (Apple only uses the identifier in their status reports).

   ```bash
   xcrun altool --notarize-app -f path/to/select-shapes.sketchplugin-1.0.zip --primary-bundle-id "com.example.sketch.plugin.select-shapes" -u "user@example.com" -p "app-specific-password"
   ```

1. Wait for a notarization email confirmation from Apple before releasing the plugin.

> **Note:** If you make any changes to your plugin framework you’ll need to notarize again.


## 3. Sketch Notarizing Assistant

[Sketch Notarizing Assistant](https://github.com/abynim/sketch-notarizing-assistant) is a Sketch plugin developed by [Aby Nimbalkar](https://twitter.com/abynim) that makes it trivial to notarize your plugin. To use it, just follow the instructions on the plugin's page.

> **Note:** Sketch Notarizing Assistant is not maintained or supported by Sketch.

## Keychain password storage

Instead of storing the app-specific password as plain text in `.skpmrc`, you can also provide a reference to a **local** keychain item. Please note that `skpm` cannot access iCloud keychain items for security reasons.

The following example assumes the keychain holds a keychain item named `AC_PASSWORD` for an _Account_ `user@example.com`:

```yaml
notarization:
  authority: 'Developer ID Application: Your Team Name'
  username: 'user@example.com'
  password: '@keychain:AC_PASSWORD'
```

You can create the `AC_PASSWORD` keychain item using the command line, or the `Keychain Access` application.

### Use `security` command-line utility

  ```bash
  security add-generic-password -a "user@example.com" -w "app-specific-password" -s "AC_PASSWORD"
  ```

### Use Keychain Access

  1. Open _Applications_ › _Utilities_ › _Keychain Access_.
  1. Select _File_ › _New Password Item…_ and set these values on the dialog:
      - **Keychain Item Name:** `AC_PASSWORD`.
      - **Account Name:** `user@example.com` (your App Store Connect username).
      - **Password:** `app specific password`.
  1. Click _Add_.


## Related resources

- [Notarizing Your App Before Distribution](https://developer.apple.com/documentation/xcode/notarizing_your_app_before_distribution) at Apple Developer Documentation
