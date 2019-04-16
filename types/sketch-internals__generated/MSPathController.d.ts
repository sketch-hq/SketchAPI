interface MSPathControllerUninitialized<InitializedType = MSPathController> extends NSObjectUninitialized<MSPathController> {}

interface MSPathController extends NSObject {
  setSelectionIndexPath(indexPath: NSIndexPath | null): void;
  runChange(change: MSShapeChange): void;
  runChange_context(change: MSShapeChange, context: MSShapeChangeContext): void;
  selectNext(sender: any): void;
  selectPrevious(sender: any): void;
  currentCurveMode(): NSNumber;
  changeCurveMode(mode: MSCurveMode): void;
  remove(sender: any): IBAction;

  content(): NSArray<any>;
  setContent(content: NSArray<any> | any[]): void;
  selectionIndexPaths(): NSArray<any>;
  setSelectionIndexPaths(selectionIndexPaths: NSArray<any> | any[]): void;
  selectedObjects(): NSArray<any>;
  changeContext(): MSShapeChangeContext;
}

declare const MSPathController: {
  alloc(): MSPathControllerUninitialized;
  class(): MSPathController;
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

