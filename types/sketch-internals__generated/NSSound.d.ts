interface NSSoundUninitialized<InitializedType = NSSound> extends NSObjectUninitialized<NSSound> {
  initWithContentsOfURL_byReference(url: NSURL, byRef: boolean): InitializedType;
  initWithContentsOfFile_byReference(path: NSString | string, byRef: boolean): InitializedType;
  initWithData(data: NSData): InitializedType;
  initWithPasteboard(pasteboard: NSPasteboard): InitializedType;
  initWithPasteboardPropertyList_ofType(propertyList: any, type: NSPasteboardType): InitializedType;
}

interface NSSound extends NSObject, INSCopying, INSSecureCoding, INSPasteboardReading, INSPasteboardWriting {
  setName(string: NSSoundName | null): boolean;
  writeToPasteboard(pasteboard: NSPasteboard): void;
  play(): boolean;
  pause(): boolean;
  resume(): boolean;
  stop(): boolean;
  setChannelMapping(channelMapping: NSArray<any> | any[]): void;
  channelMapping(): NSArray<any>;
  copyWithZone(zone: NSZone | null): any;
  writableTypesForPasteboard(pasteboard: NSPasteboard): NSArray<any>;
  writingOptionsForType_pasteboard(type: NSPasteboardType, pasteboard: NSPasteboard): NSPasteboardWritingOptions;
  pasteboardPropertyListForType(type: NSPasteboardType): any;

  name(): NSSoundName;
  playing(): boolean;
  delegate(): any;
  setDelegate(delegate: any): void;
  duration(): NSTimeInterval;
  volume(): number;
  setVolume(volume: number): void;
  currentTime(): NSTimeInterval;
  setCurrentTime(currentTime: NSTimeInterval): void;
  loops(): boolean;
  setLoops(loops: boolean): void;
  playbackDeviceIdentifier(): NSSoundPlaybackDeviceIdentifier;
  setPlaybackDeviceIdentifier(playbackDeviceIdentifier: NSSoundPlaybackDeviceIdentifier): void;
}

declare const NSSound: {
  alloc(): NSSoundUninitialized;
  class(): NSSound;
  soundNamed(name: NSSoundName): NSSound;
  canInitWithPasteboard(pasteboard: NSPasteboard): boolean;
  soundUnfilteredFileTypes(): NSArray<any>;
  soundUnfilteredPasteboardTypes(): NSArray<any>;
  readableTypesForPasteboard(pasteboard: NSPasteboard): NSArray<any>;
  readingOptionsForType_pasteboard(type: NSPasteboardType, pasteboard: NSPasteboard): NSPasteboardReadingOptions;
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
  soundUnfilteredTypes(): NSArray<any>;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

