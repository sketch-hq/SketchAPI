interface INSSpeechSynthesizerDelegate {
  speechSynthesizer_didFinishSpeaking(sender: NSSpeechSynthesizer, finishedSpeaking: boolean): void;
  speechSynthesizer_willSpeakWord_ofString(sender: NSSpeechSynthesizer, characterRange: NSRange, string: NSString | string): void;
  speechSynthesizer_willSpeakPhoneme(sender: NSSpeechSynthesizer, phonemeOpcode: number): void;
  speechSynthesizer_didEncounterErrorAtIndex_ofString_message(sender: NSSpeechSynthesizer, characterIndex: NSUInteger, string: NSString | string, message: NSString | string): void;
  speechSynthesizer_didEncounterSyncMessage(sender: NSSpeechSynthesizer, message: NSString | string): void;
}

