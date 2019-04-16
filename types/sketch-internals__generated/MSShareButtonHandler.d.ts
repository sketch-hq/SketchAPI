interface MSShareButtonHandlerUninitialized<InitializedType = MSShareButtonHandler> extends NSObjectUninitialized<MSShareButtonHandler> {}

interface MSShareButtonHandler extends NSObject, INSSharingServiceDelegate, INSSharingServicePickerDelegate {
  showShareMenuForLayers_sender_canvas(layers: NSArray<any> | any[], sender: any, canvas: MSContentDrawView): void;
  sharingService_willShareItems(sharingService: NSSharingService, items: NSArray<any> | any[]): void;
  sharingService_didFailToShareItems_error(sharingService: NSSharingService, items: NSArray<any> | any[], error: NSError): void;
  sharingService_didShareItems(sharingService: NSSharingService, items: NSArray<any> | any[]): void;
  sharingService_sourceFrameOnScreenForShareItem(sharingService: NSSharingService, item: any): NSRect;
  sharingService_transitionImageForShareItem_contentRect(sharingService: NSSharingService, item: any, contentRect: NSRect): NSImage;
  sharingService_sourceWindowForShareItems_sharingContentScope(sharingService: NSSharingService, items: NSArray<any> | any[], sharingContentScope: NSSharingContentScope): NSWindow;
  anchoringViewForSharingService_showRelativeToRect_preferredEdge(sharingService: NSSharingService, positioningRect: NSRect, preferredEdge: NSRectEdge): NSView;
  sharingServicePicker_sharingServicesForItems_proposedSharingServices(sharingServicePicker: NSSharingServicePicker, items: NSArray<any> | any[], proposedServices: NSArray<any> | any[]): NSArray<any>;
  sharingServicePicker_delegateForSharingService(sharingServicePicker: NSSharingServicePicker, sharingService: NSSharingService): any;
  sharingServicePicker_didChooseSharingService(sharingServicePicker: NSSharingServicePicker, service: NSSharingService | null): void;

  window(): NSWindow;
  setWindow(window: NSWindow): void;
}

declare const MSShareButtonHandler: {
  alloc(): MSShareButtonHandlerUninitialized;
  class(): MSShareButtonHandler;
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

