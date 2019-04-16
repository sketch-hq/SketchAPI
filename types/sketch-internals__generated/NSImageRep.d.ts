interface NSImageRepUninitialized<InitializedType = NSImageRep> extends NSObjectUninitialized<NSImageRep> {
  initWithCoder(coder: NSCoder): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSImageRep extends NSObject, INSCopying, INSCoding {
  draw(): boolean;
  drawAtPoint(point: NSPoint): boolean;
  drawInRect(rect: NSRect): boolean;
  drawInRect_fromRect_operation_fraction_respectFlipped_hints(dstSpacePortionRect: NSRect, srcSpacePortionRect: NSRect, op: NSCompositingOperation, requestedAlpha: CGFloat, respectContextIsFlipped: boolean, hints: NSDictionary<any, any> | {[key: string]: any} | null): boolean;
  CGImageForProposedRect_context_hints_CF_RETURNS_NOT_RETAINED(proposedDestRect: NSRect | null, context: NSGraphicsContext | null, hints: NSDictionary<any, any> | {[key: string]: any} | null): CGImageRef;
  copyWithZone(zone: NSZone | null): any;
  encodeWithCoder(aCoder: NSCoder): void;

  size(): NSSize;
  setSize(size: NSSize): void;
  alpha(): boolean;
  setAlpha(alpha: boolean): void;
  opaque(): boolean;
  setOpaque(opaque: boolean): void;
  colorSpaceName(): NSColorSpaceName;
  setColorSpaceName(colorSpaceName: NSColorSpaceName): void;
  bitsPerSample(): NSInteger;
  setBitsPerSample(bitsPerSample: NSInteger): void;
  pixelsWide(): NSInteger;
  setPixelsWide(pixelsWide: NSInteger): void;
  pixelsHigh(): NSInteger;
  setPixelsHigh(pixelsHigh: NSInteger): void;
  layoutDirection(): NSImageLayoutDirection;
  setLayoutDirection(layoutDirection: NSImageLayoutDirection): void;
}

declare const NSImageRep: {
  alloc(): NSImageRepUninitialized;
  class(): NSImageRep;
  registerImageRepClass(imageRepClass: any): void;
  unregisterImageRepClass(imageRepClass: any): void;
  imageRepClassForFileType(type: NSString | string): any;
  imageRepClassForPasteboardType(type: NSPasteboardType): any;
  imageRepClassForType(type: NSString | string): any;
  imageRepClassForData(data: NSData): any;
  canInitWithData(data: NSData): boolean;
  imageUnfilteredFileTypes(): NSArray<any>;
  imageUnfilteredPasteboardTypes(): NSArray<any>;
  imageFileTypes(): NSArray<any>;
  imagePasteboardTypes(): NSArray<any>;
  canInitWithPasteboard(pasteboard: NSPasteboard): boolean;
  imageRepsWithContentsOfFile(filename: NSString | string): NSArray<any>;
  imageRepWithContentsOfFile(filename: NSString | string): NSImageRep;
  imageRepsWithContentsOfURL(url: NSURL): NSArray<any>;
  imageRepWithContentsOfURL(url: NSURL): NSImageRep;
  imageRepsWithPasteboard(pasteboard: NSPasteboard): NSArray<any>;
  imageRepWithPasteboard(pasteboard: NSPasteboard): NSImageRep;
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
  registeredImageRepClasses(): NSArray<any>;
  imageUnfilteredTypes(): NSArray<any>;
  imageTypes(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

