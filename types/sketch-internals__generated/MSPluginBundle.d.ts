interface MSPluginBundleUninitialized<InitializedType = MSPluginBundle> extends NSObjectUninitialized<MSPluginBundle> {
  initPluginBundleWithURL(url: NSURL): InitializedType;
  initWithName_identifier_commands_icon(name: NSString | string, identifier: NSString | string, commands: NSArray<any> | any[], icon: NSImage): InitializedType;
}
interface MSPluginBundle extends NSObject {
  writeToURL(url: NSURL): boolean;
  urlForResourceNamed(resourceName: NSString | string): NSURL;

  url(): NSURL;
  commands(): NSDictionary<any, any>;
  version(): NSString;
  name(): NSString;
  icon(): NSImage;
  alertIcon(): NSImage;
  identifier(): NSString;
  versionedIdentifier(): NSString;
  pluginDescription(): NSString;
  suppliesData(): boolean;
  menuDescription(): NSDictionary<any, any>;
  setMenuDescription(menuDescription: NSDictionary<any, any> | {[key: string]: any}): void;
  homepageURL(): NSURL;
  author(): NSString;
  authorEmail(): NSString;
  appcastURL(): NSURL;
  compatibleVersion(): NSString;
  maximumCompatibleVersion(): NSString;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
  compatible(): boolean;
  disableCocoaScriptPreprocessor(): boolean;
  setDisableCocoaScriptPreprocessor(disableCocoaScriptPreprocessor: boolean): void;
}
declare const MSPluginBundle: {
  alloc(): MSPluginBundleUninitialized;
  class(): MSPluginBundle;  pluginBundleWithURL(url: NSURL): MSPluginBundle;
  scriptDefaultTitle(): NSString;

}

