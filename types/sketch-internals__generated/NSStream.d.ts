interface NSStreamUninitialized<InitializedType = NSStream> extends NSObjectUninitialized<NSStream> {}

interface NSStream extends NSObject {
  open(): void;
  close(): void;
  propertyForKey(key: NSStreamPropertyKey): any;
  setProperty_forKey(property: any | null, key: NSStreamPropertyKey): boolean;
  scheduleInRunLoop_forMode(aRunLoop: NSRunLoop, mode: NSRunLoopMode): void;
  removeFromRunLoop_forMode(aRunLoop: NSRunLoop, mode: NSRunLoopMode): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  streamStatus(): NSStreamStatus;
  streamError(): NSError;
}

declare const NSStream: {
  alloc(): NSStreamUninitialized;
  class(): NSStream;
  getStreamsToHostWithName_port_inputStream_outputStream(hostname: NSString | string, port: NSInteger, inputStream: MOPointer<NSInputStream>, outputStream: MOPointer<NSOutputStream>): void;
  getStreamsToHost_port_inputStream_outputStream(host: NSHost, port: NSInteger, inputStream: MOPointer<NSInputStream>, outputStream: MOPointer<NSOutputStream>): void;
  getBoundStreamsWithBufferSize_inputStream_outputStream(bufferSize: NSUInteger, inputStream: MOPointer<NSInputStream>, outputStream: MOPointer<NSOutputStream>): void;
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

