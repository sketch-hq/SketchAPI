interface NSSpeechSynthesizerUninitialized<InitializedType = NSSpeechSynthesizer> extends NSObjectUninitialized<NSSpeechSynthesizer> {
  initWithVoice(voice: NSSpeechSynthesizerVoiceName | null): InitializedType;
}

interface NSSpeechSynthesizer extends NSObject {
  startSpeakingString(string: NSString | string): boolean;
  startSpeakingString_toURL(string: NSString | string, url: NSURL): boolean;
  stopSpeaking(): void;
  stopSpeakingAtBoundary(boundary: NSSpeechBoundary): void;
  pauseSpeakingAtBoundary(boundary: NSSpeechBoundary): void;
  continueSpeaking(): void;
  voice(): NSSpeechSynthesizerVoiceName;
  setVoice(voice: NSSpeechSynthesizerVoiceName | null): boolean;
  addSpeechDictionary(speechDictionary: NSDictionary<any, any> | {[key: string]: any}): void;
  phonemesFromText(text: NSString | string): NSString;
  objectForProperty_error(property: NSSpeechPropertyKey, outError: MOPointer<NSError>): any;
  setObject_forProperty_error(object: any | null, property: NSSpeechPropertyKey, outError: MOPointer<NSError>): boolean;

  speaking(): boolean;
  delegate(): any;
  setDelegate(delegate: any): void;
  rate(): number;
  setRate(rate: number): void;
  volume(): number;
  setVolume(volume: number): void;
  usesFeedbackWindow(): boolean;
  setUsesFeedbackWindow(usesFeedbackWindow: boolean): void;
}

declare const NSSpeechSynthesizer: {
  alloc(): NSSpeechSynthesizerUninitialized;
  class(): NSSpeechSynthesizer;
  attributesForVoice(voice: NSSpeechSynthesizerVoiceName): NSDictionary<any, any>;
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
  anyApplicationSpeaking(): boolean;
  defaultVoice(): NSSpeechSynthesizerVoiceName;
  availableVoices(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

