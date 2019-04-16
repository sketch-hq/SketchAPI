interface NSSpeechRecognizerUninitialized<InitializedType = NSSpeechRecognizer> extends NSObjectUninitialized<NSSpeechRecognizer> {
  init(): InitializedType;
}
interface NSSpeechRecognizer extends NSObject {
  startListening(): void;
  stopListening(): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  commands(): NSArray<any>;
  setCommands(commands: NSArray<any> | any[]): void;
  displayedCommandsTitle(): NSString;
  setDisplayedCommandsTitle(displayedCommandsTitle: NSString | string): void;
  listensInForegroundOnly(): boolean;
  setListensInForegroundOnly(listensInForegroundOnly: boolean): void;
  blocksOtherRecognizers(): boolean;
  setBlocksOtherRecognizers(blocksOtherRecognizers: boolean): void;
}
declare const NSSpeechRecognizer: {
  alloc(): NSSpeechRecognizerUninitialized;
  class(): NSSpeechRecognizer;
}

