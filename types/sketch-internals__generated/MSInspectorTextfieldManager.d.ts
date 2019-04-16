interface MSInspectorTextfieldManagerUninitialized<InitializedType = MSInspectorTextfieldManager> extends NSObjectUninitialized<MSInspectorTextfieldManager> {}

interface MSInspectorTextfieldManager extends NSObject {
}

declare const MSInspectorTextfieldManager: {
  alloc(): MSInspectorTextfieldManagerUninitialized;
  class(): MSInspectorTextfieldManager;
  managerWithItem_textField_adaptor_identifier_inlineToolTip_touchBarItems_bindingOptions(item: MSInspectorItem, textField: MSInlineUpDownTextField, adaptor: MSMathInspectorValueAdaptor, identifier: NSUserInterfaceItemIdentifier, toolTip: NSString | string, touchBarItems: NSArray<any> | any[] | null, bindingOptions: NSDictionary<any, any> | {[key: string]: any} | null): MSInspectorTextfieldManager;
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

