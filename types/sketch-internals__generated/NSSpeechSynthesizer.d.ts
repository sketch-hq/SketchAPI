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
  objectForProperty_error(property: NSSpeechPropertyKey, outError: NSError): any;
  setObject_forProperty_error(object: any | null, property: NSSpeechPropertyKey, outError: NSError): boolean;

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
  class(): NSSpeechSynthesizer;  attributesForVoice(voice: NSSpeechSynthesizerVoiceName): NSDictionary<any, any>;

  anyApplicationSpeaking(): boolean;
  defaultVoice(): NSSpeechSynthesizerVoiceName;
  availableVoices(): NSArray<any>;

}

