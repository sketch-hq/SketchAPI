interface MSCreateSymbolNamingSheetUninitialized<InitializedType = MSCreateSymbolNamingSheet> extends CHSheetControllerUninitialized<MSCreateSymbolNamingSheet> {}

interface MSCreateSymbolNamingSheet extends CHSheetController {
  setSymbolPageName(symbolPageName: NSString | string): void;
  setSuggestedName(suggestedName: NSString | string): void;
  setShouldShowMoveCheckbox(showCheckbox: boolean): void;

  symbolNameField(): NSTextField;
  setSymbolNameField(symbolNameField: NSTextField): void;
  symbolPageField(): NSTextField;
  setSymbolPageField(symbolPageField: NSTextField): void;
  completionBlock(): MSCreateSymbolCompletionBlock;
  setCompletionBlock(completionBlock: MSCreateSymbolCompletionBlock): void;
}

declare const MSCreateSymbolNamingSheet: {
  alloc(): MSCreateSymbolNamingSheetUninitialized;
  class(): MSCreateSymbolNamingSheet;
  runForWindow(window: NSWindow): any;
  runForWindow_withObject(window: NSWindow, obj: any): any;
  accessInstanceVariablesDirectly(): boolean;

}

