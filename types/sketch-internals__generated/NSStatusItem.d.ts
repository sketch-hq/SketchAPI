interface NSStatusItemUninitialized<InitializedType = NSStatusItem> extends NSObjectUninitialized<NSStatusItem> {}

interface NSStatusItem extends NSObject {
  sendActionOn(mask: NSInteger): NSInteger;
  drawStatusBarBackgroundInRect_withHighlight(rect: NSRect, highlight: boolean): void;
  popUpStatusItemMenu(menu: NSMenu): void;

  statusBar(): NSStatusBar;
  length(): CGFloat;
  setLength(length: CGFloat): void;
  menu(): NSMenu;
  setMenu(menu: NSMenu): void;
  button(): NSStatusBarButton;
  behavior(): NSStatusItemBehavior;
  setBehavior(behavior: NSStatusItemBehavior): void;
  visible(): boolean;
  setVisible(visible: boolean): void;
  autosaveName(): NSStatusItemAutosaveName;
  setAutosaveName(autosaveName: NSStatusItemAutosaveName): void;
  action(): string;
  setAction(action: string): void;
  doubleAction(): string;
  setDoubleAction(doubleAction: string): void;
  target(): any;
  setTarget(target: any): void;
  title(): NSString;
  setTitle(title: NSString | string): void;
  attributedTitle(): NSAttributedString;
  setAttributedTitle(attributedTitle: NSAttributedString): void;
  image(): NSImage;
  setImage(image: NSImage): void;
  alternateImage(): NSImage;
  setAlternateImage(alternateImage: NSImage): void;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
  highlightMode(): boolean;
  setHighlightMode(highlightMode: boolean): void;
  toolTip(): NSString;
  setToolTip(toolTip: NSString | string): void;
  view(): NSView;
  setView(view: NSView): void;
}

declare const NSStatusItem: {
  alloc(): NSStatusItemUninitialized;
  class(): NSStatusItem;
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

