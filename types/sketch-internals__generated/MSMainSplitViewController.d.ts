interface MSMainSplitViewControllerUninitialized<InitializedType = MSMainSplitViewController> extends NSObjectUninitialized<MSMainSplitViewController> {}

interface MSMainSplitViewController extends NSObject, INSSplitViewDelegate {
  didEnterVersionBrowser(): void;
  didExitVersionBrowser(): void;
  splitView_canCollapseSubview(splitView: NSSplitView, subview: NSView): boolean;
  splitView_shouldCollapseSubview_forDoubleClickOnDividerAtIndex(splitView: NSSplitView, subview: NSView, dividerIndex: NSInteger): boolean;
  splitView_constrainMinCoordinate_ofSubviewAt(splitView: NSSplitView, proposedMinimumPosition: CGFloat, dividerIndex: NSInteger): CGFloat;
  splitView_constrainMaxCoordinate_ofSubviewAt(splitView: NSSplitView, proposedMaximumPosition: CGFloat, dividerIndex: NSInteger): CGFloat;
  splitView_constrainSplitPosition_ofSubviewAt(splitView: NSSplitView, proposedPosition: CGFloat, dividerIndex: NSInteger): CGFloat;
  splitView_resizeSubviewsWithOldSize(splitView: NSSplitView, oldSize: NSSize): void;
  splitView_shouldAdjustSizeOfSubview(splitView: NSSplitView, view: NSView): boolean;
  splitView_shouldHideDividerAtIndex(splitView: NSSplitView, dividerIndex: NSInteger): boolean;
  splitView_effectiveRect_forDrawnRect_ofDividerAtIndex(splitView: NSSplitView, proposedEffectiveRect: NSRect, drawnRect: NSRect, dividerIndex: NSInteger): NSRect;
  splitView_additionalEffectiveRectOfDividerAtIndex(splitView: NSSplitView, dividerIndex: NSInteger): NSRect;
  splitViewWillResizeSubviews(notification: NSNotification): void;
  splitViewDidResizeSubviews(notification: NSNotification): void;

  splitView(): NSSplitView;
  setSplitView(splitView: NSSplitView): void;
  window(): NSWindow;
  setWindow(window: NSWindow): void;
}

declare const MSMainSplitViewController: {
  alloc(): MSMainSplitViewControllerUninitialized;
  class(): MSMainSplitViewController;
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

