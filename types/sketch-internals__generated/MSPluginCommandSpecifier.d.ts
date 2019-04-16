interface MSPluginCommandSpecifierUninitialized<InitializedType = MSPluginCommandSpecifier> extends NSObjectUninitialized<MSPluginCommandSpecifier> {
  initWithPluginBundleIdentifier_commandIdentifier(pluginBundleIdentifier: NSString | string, commandIdentifier: NSString | string): InitializedType;
}
interface MSPluginCommandSpecifier extends NSObject, INSCopying {
  isEqualToCommandSpecifier(specifier: MSPluginCommandSpecifier): boolean;
  stringValue(): NSString;

  pluginBundleIdentifier(): NSString;
  commandIdentifier(): NSString;
}
declare const MSPluginCommandSpecifier: {
  alloc(): MSPluginCommandSpecifierUninitialized;
  class(): MSPluginCommandSpecifier;
}

