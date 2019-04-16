interface NSTableViewRowActionUninitialized<InitializedType = NSTableViewRowAction> extends NSObjectUninitialized<NSTableViewRowAction> {}

interface NSTableViewRowAction extends NSObject, INSCopying {
  copyWithZone(zone: NSZone | null): any;

  style(): NSTableViewRowActionStyle;
  title(): NSString;
  setTitle(title: NSString | string): void;
  backgroundColor(): NSColor;
  setBackgroundColor(backgroundColor: NSColor): void;
  image(): NSImage;
  setImage(image: NSImage): void;
}

declare const NSTableViewRowAction: {
  alloc(): NSTableViewRowActionUninitialized;
  class(): NSTableViewRowAction;
  rowActionWithStyle_title_handler(style: NSTableViewRowActionStyle, title: NSString | string, handler: Block): NSTableViewRowAction;
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  accessInstanceVariablesDirectly(): boolean;

}

