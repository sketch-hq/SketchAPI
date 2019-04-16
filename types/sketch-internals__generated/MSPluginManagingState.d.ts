interface MSPluginManagingStateUninitialized<InitializedType = MSPluginManagingState> extends NSObjectUninitialized<MSPluginManagingState> {
  initWithMetadataURL_incompatiblePlugins(metadataURL: NSURL, incompatiblePlugins: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
}
interface MSPluginManagingState extends NSObject {
  setEnabled_forPluginIdentifier_withVersion(enable: boolean, identifier: NSString | string, version: NSString | string): void;
  shouldEnablePluginIdentifier_withVersion(identifier: NSString | string, version: NSString | string): boolean;
  updateMetadataWithPluginIndentifiers(identifiers: NSArray<any> | any[]): void;
  isPluginWithIdentifier_incompatibleWithVersion(identifier: NSString | string, version: NSString | string): boolean;
  registerPluginIncompatibilityForVersions(pluginsDictionary: NSDictionary<any, any> | {[key: string]: any}): NSInteger;
  resetIncompatiblePluginMetadata(): void;
}
declare const MSPluginManagingState: {
  alloc(): MSPluginManagingStateUninitialized;
  class(): MSPluginManagingState;
  incompatiblePlugins(): NSDictionary<any, any>;
  existingDownloadededBlacklistURL(): NSURL;

}

