interface NSInputManagerUninitialized<InitializedType = NSInputManager> extends NSObjectUninitialized<NSInputManager> {
  initWithName_host(inputServerName: NSString | string, hostName: NSString | string): InitializedType;
}
interface NSInputManager extends NSObject, INSTextInput {
  localizedInputManagerName(): NSString;
  markedTextAbandoned(cli: any): void;
  markedTextSelectionChanged_client(newSel: NSRange, cli: any): void;
  wantsToInterpretAllKeystrokes(): boolean;
  language(): NSString;
  image(): NSImage;
  server(): NSInputServer;
  wantsToHandleMouseEvents(): boolean;
  handleMouseEvent(mouseEvent: NSEvent): boolean;
  wantsToDelayTextChangeNotifications(): boolean;
}
declare const NSInputManager: {
  alloc(): NSInputManagerUninitialized;
  class(): NSInputManager;  currentInputManager(): NSInputManager;
  cycleToNextInputLanguage(sender: any | null): void;
  cycleToNextInputServerInLanguage(sender: any | null): void;

}

