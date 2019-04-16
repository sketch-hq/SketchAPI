interface NSControllerUninitialized<InitializedType = NSController> extends NSObjectUninitialized<NSController> {
  initWithCoder(coder: NSCoder): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSController extends NSObject, INSCoding, INSEditor, INSEditorRegistration {
  objectDidBeginEditing(editor: any): void;
  objectDidEndEditing(editor: any): void;
  discardEditing(): void;
  commitEditing(): boolean;
  commitEditingWithDelegate_didCommitSelector_contextInfo(delegate: any | null, didCommitSelector: string | null, contextInfo: void | null): void;
  encodeWithCoder(aCoder: NSCoder): void;
  discardEditing(): void;
  commitEditing(): boolean;
  commitEditingWithDelegate_didCommitSelector_contextInfo(delegate: any | null, didCommitSelector: string | null, contextInfo: void | null): void;
  commitEditingAndReturnError(error: MOPointer<NSError>): boolean;
  objectDidBeginEditing(editor: any): void;
  objectDidEndEditing(editor: any): void;

  editing(): boolean;
}

declare const NSController: {
  alloc(): NSControllerUninitialized;
  class(): NSController;
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

