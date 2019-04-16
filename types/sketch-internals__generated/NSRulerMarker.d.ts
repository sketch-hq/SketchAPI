interface NSRulerMarkerUninitialized<InitializedType = NSRulerMarker> extends NSObjectUninitialized<NSRulerMarker> {
  initWithRulerView_markerLocation_image_imageOrigin(ruler: NSRulerView, location: CGFloat, image: NSImage, imageOrigin: NSPoint): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSRulerMarker extends NSObject, INSCopying, INSCoding {
  drawRect(rect: NSRect): void;
  trackMouse_adding(mouseDownEvent: NSEvent, isAdding: boolean): boolean;
  copyWithZone(zone: NSZone | null): any;
  encodeWithCoder(aCoder: NSCoder): void;

  ruler(): NSRulerView;
  markerLocation(): CGFloat;
  setMarkerLocation(markerLocation: CGFloat): void;
  image(): NSImage;
  setImage(image: NSImage): void;
  imageOrigin(): NSPoint;
  setImageOrigin(imageOrigin: NSPoint): void;
  movable(): boolean;
  setMovable(movable: boolean): void;
  removable(): boolean;
  setRemovable(removable: boolean): void;
  dragging(): boolean;
  representedObject(): any;
  setRepresentedObject(representedObject: any): void;
  imageRectInRuler(): NSRect;
  thicknessRequiredInRuler(): CGFloat;
}

declare const NSRulerMarker: {
  alloc(): NSRulerMarkerUninitialized;
  class(): NSRulerMarker;
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

