interface NSTextInputContextUninitialized<InitializedType = NSTextInputContext> extends NSObjectUninitialized<NSTextInputContext> {
  initWithClient(client: any): InitializedType;
}
interface NSTextInputContext extends NSObject {
  activate(): void;
  deactivate(): void;
  handleEvent(event: NSEvent): boolean;
  discardMarkedText(): void;
  invalidateCharacterCoordinates(): void;

  client(): any;
  acceptsGlyphInfo(): boolean;
  setAcceptsGlyphInfo(acceptsGlyphInfo: boolean): void;
  allowedInputSourceLocales(): NSArray<any>;
  setAllowedInputSourceLocales(allowedInputSourceLocales: NSArray<any> | any[]): void;
  keyboardInputSources(): NSArray<any>;
  selectedKeyboardInputSource(): NSTextInputSourceIdentifier;
  setSelectedKeyboardInputSource(selectedKeyboardInputSource: NSTextInputSourceIdentifier): void;
}
declare const NSTextInputContext: {
  alloc(): NSTextInputContextUninitialized;
  class(): NSTextInputContext;  localizedNameForInputSource(inputSourceIdentifier: NSTextInputSourceIdentifier): NSString;

  currentInputContext(): NSTextInputContext;

}

