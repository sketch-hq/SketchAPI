interface NSGlyphInfoUninitialized<InitializedType = NSGlyphInfo> extends NSObjectUninitialized<NSGlyphInfo> {}

interface NSGlyphInfo extends NSObject, INSCopying, INSSecureCoding {
  copyWithZone(zone: NSZone | null): any;

  glyphID(): CGGlyph;
  baseString(): NSString;
  glyphName(): NSString;
  characterIdentifier(): NSUInteger;
  characterCollection(): NSCharacterCollection;
}

declare const NSGlyphInfo: {
  alloc(): NSGlyphInfoUninitialized;
  class(): NSGlyphInfo;
  glyphInfoWithCGGlyph_forFont_baseString(glyph: CGGlyph, font: NSFont, string: NSString | string): NSGlyphInfo;
  glyphInfoWithGlyphName_forFont_baseString(glyphName: NSString | string, font: NSFont, string: NSString | string): NSGlyphInfo;
  glyphInfoWithGlyph_forFont_baseString(glyph: NSGlyph, font: NSFont, string: NSString | string): NSGlyphInfo;
  glyphInfoWithCharacterIdentifier_collection_baseString(cid: NSUInteger, characterCollection: NSCharacterCollection, string: NSString | string): NSGlyphInfo;
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
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

