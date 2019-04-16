interface NSTextAttachmentUninitialized<InitializedType = NSTextAttachment> extends NSObjectUninitialized<NSTextAttachment> {
  initWithData_ofType(contentData: NSData | null, uti: NSString | string | null): InitializedType;
  initWithFileWrapper(fileWrapper: NSFileWrapper | null): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSTextAttachment extends NSObject, INSTextAttachmentContainer, INSCoding {
  encodeWithCoder(aCoder: NSCoder): void;

  contents(): NSData;
  setContents(contents: NSData): void;
  fileType(): NSString;
  setFileType(fileType: NSString | string): void;
  image(): NSImage;
  setImage(image: NSImage): void;
  bounds(): NSRect;
  setBounds(bounds: NSRect): void;
  fileWrapper(): NSFileWrapper;
  setFileWrapper(fileWrapper: NSFileWrapper): void;
  attachmentCell(): any;
  setAttachmentCell(attachmentCell: any): void;
}

declare const NSTextAttachment: {
  alloc(): NSTextAttachmentUninitialized;
  class(): NSTextAttachment;
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

