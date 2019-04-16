interface NSOpenGLPixelFormatUninitialized<InitializedType = NSOpenGLPixelFormat> extends NSObjectUninitialized<NSOpenGLPixelFormat> {
  initWithCGLPixelFormatObj(format: _CGLPixelFormatObject): InitializedType;
  initWithAttributes(attribs: NSOpenGLPixelFormatAttribute): InitializedType;
  initWithData(attribs: NSData): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSOpenGLPixelFormat extends NSObject, INSCoding {
  attributes(): NSData;
  setAttributes(attribs: NSData): void;
  getValues_forAttribute_forVirtualScreen(vals: GLint, attrib: NSOpenGLPixelFormatAttribute, screen: GLint): void;
  encodeWithCoder(aCoder: NSCoder): void;

  numberOfVirtualScreens(): GLint;
  CGLPixelFormatObj(): _CGLPixelFormatObject;
}

declare const NSOpenGLPixelFormat: {
  alloc(): NSOpenGLPixelFormatUninitialized;
  class(): NSOpenGLPixelFormat;
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

