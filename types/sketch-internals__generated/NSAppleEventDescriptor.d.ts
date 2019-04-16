interface NSAppleEventDescriptorUninitialized<InitializedType = NSAppleEventDescriptor> extends NSObjectUninitialized<NSAppleEventDescriptor> {
  initWithAEDescNoCopy(aeDesc: AEDesc): InitializedType;
  initWithDescriptorType_bytes_length(descriptorType: DescType, bytes: void | null, byteCount: NSUInteger): InitializedType;
  initWithDescriptorType_data(descriptorType: DescType, data: NSData | null): InitializedType;
  initWithEventClass_eventID_targetDescriptor_returnID_transactionID(eventClass: AEEventClass, eventID: AEEventID, targetDescriptor: NSAppleEventDescriptor | null, returnID: AEReturnID, transactionID: AETransactionID): InitializedType;
  initListDescriptor(): InitializedType;
  initRecordDescriptor(): InitializedType;
}

interface NSAppleEventDescriptor extends NSObject, INSCopying, INSSecureCoding {
  setParamDescriptor_forKeyword(descriptor: NSAppleEventDescriptor, keyword: AEKeyword): void;
  paramDescriptorForKeyword(keyword: AEKeyword): NSAppleEventDescriptor;
  removeParamDescriptorWithKeyword(keyword: AEKeyword): void;
  setAttributeDescriptor_forKeyword(descriptor: NSAppleEventDescriptor, keyword: AEKeyword): void;
  attributeDescriptorForKeyword(keyword: AEKeyword): NSAppleEventDescriptor;
  sendEventWithOptions_timeout_error(sendOptions: NSAppleEventSendOptions, timeoutInSeconds: NSTimeInterval, error: MOPointer<NSError>): NSAppleEventDescriptor;
  insertDescriptor_atIndex(descriptor: NSAppleEventDescriptor, index: NSInteger): void;
  descriptorAtIndex(index: NSInteger): NSAppleEventDescriptor;
  removeDescriptorAtIndex(index: NSInteger): void;
  setDescriptor_forKeyword(descriptor: NSAppleEventDescriptor, keyword: AEKeyword): void;
  descriptorForKeyword(keyword: AEKeyword): NSAppleEventDescriptor;
  removeDescriptorWithKeyword(keyword: AEKeyword): void;
  keywordForDescriptorAtIndex(index: NSInteger): AEKeyword;
  coerceToDescriptorType(descriptorType: DescType): NSAppleEventDescriptor;
  copyWithZone(zone: NSZone | null): any;

  aeDesc(): AEDesc;
  descriptorType(): DescType;
  data(): NSData;
  booleanValue(): Boolean;
  enumCodeValue(): OSType;
  int32Value(): SInt32;
  doubleValue(): number;
  typeCodeValue(): OSType;
  stringValue(): NSString;
  dateValue(): NSDate;
  fileURLValue(): NSURL;
  eventClass(): AEEventClass;
  eventID(): AEEventID;
  returnID(): AEReturnID;
  transactionID(): AETransactionID;
  isRecordDescriptor(): boolean;
  numberOfItems(): NSInteger;
}

declare const NSAppleEventDescriptor: {
  alloc(): NSAppleEventDescriptorUninitialized;
  class(): NSAppleEventDescriptor;
  nullDescriptor(): NSAppleEventDescriptor;
  descriptorWithDescriptorType_bytes_length(descriptorType: DescType, bytes: void | null, byteCount: NSUInteger): NSAppleEventDescriptor;
  descriptorWithDescriptorType_data(descriptorType: DescType, data: NSData | null): NSAppleEventDescriptor;
  descriptorWithBoolean(boolean: Boolean): NSAppleEventDescriptor;
  descriptorWithEnumCode(enumerator: OSType): NSAppleEventDescriptor;
  descriptorWithInt32(signedInt: SInt32): NSAppleEventDescriptor;
  descriptorWithDouble(doubleValue: number): NSAppleEventDescriptor;
  descriptorWithTypeCode(typeCode: OSType): NSAppleEventDescriptor;
  descriptorWithString(string: NSString | string): NSAppleEventDescriptor;
  descriptorWithDate(date: NSDate): NSAppleEventDescriptor;
  descriptorWithFileURL(fileURL: NSURL): NSAppleEventDescriptor;
  appleEventWithEventClass_eventID_targetDescriptor_returnID_transactionID(eventClass: AEEventClass, eventID: AEEventID, targetDescriptor: NSAppleEventDescriptor | null, returnID: AEReturnID, transactionID: AETransactionID): NSAppleEventDescriptor;
  listDescriptor(): NSAppleEventDescriptor;
  recordDescriptor(): NSAppleEventDescriptor;
  currentProcessDescriptor(): NSAppleEventDescriptor;
  descriptorWithProcessIdentifier(processIdentifier: pid_t): NSAppleEventDescriptor;
  descriptorWithBundleIdentifier(bundleIdentifier: NSString | string): NSAppleEventDescriptor;
  descriptorWithApplicationURL(applicationURL: NSURL): NSAppleEventDescriptor;
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

