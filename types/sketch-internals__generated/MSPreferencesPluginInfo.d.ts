interface MSPreferencesPluginInfoUninitialized<InitializedType = MSPreferencesPluginInfo> extends NSObjectUninitialized<MSPreferencesPluginInfo> {}
interface MSPreferencesPluginInfo extends NSObject {

  name(): NSString;
  pluginDescription(): NSString;
  attributedTitle(): NSAttributedString;
  icon(): NSImage;
  enableCheckboxTitle(): NSString;
  version(): NSString;
  updateVersionString(): NSString;
  updateAvailable(): boolean;
  isCompatible(): boolean;
  warningString(): NSString;
  namePlusAuthor(): NSString;
  homepage(): NSURL;
  isUpdating(): boolean;
  setIsUpdating(isUpdating: boolean): void;
  suppliesData(): boolean;
  pluginBundle(): MSPluginBundle;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
}
declare const MSPreferencesPluginInfo: {
  alloc(): MSPreferencesPluginInfoUninitialized;
  class(): MSPreferencesPluginInfo;  pluginInfoWithPluginBundle(pluginBundle: MSPluginBundle): MSPreferencesPluginInfo;
  pluginInfoWithName(name: NSString | string): MSPreferencesPluginInfo;

}

