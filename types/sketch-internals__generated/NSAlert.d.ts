interface NSAlertUninitialized<InitializedType = NSAlert> extends NSObjectUninitialized<NSAlert> {}
interface NSAlert extends NSObject {
  addButtonWithTitle(title: NSString | string): NSButton;
  layout(): void;
  runModal(): NSModalResponse;
  beginSheetModalForWindow_completionHandler(sheetWindow: NSWindow, handler: Block): void;
  beginSheetModalForWindow_modalDelegate_didEndSelector_contextInfo(window: NSWindow, delegate: any | null, didEndSelector: string | null, contextInfo: void | null): void;

  messageText(): NSString;
  setMessageText(messageText: NSString | string): void;
  informativeText(): NSString;
  setInformativeText(informativeText: NSString | string): void;
  icon(): NSImage;
  setIcon(icon: NSImage): void;
  buttons(): NSArray<any>;
  showsHelp(): boolean;
  setShowsHelp(showsHelp: boolean): void;
  helpAnchor(): NSHelpAnchorName;
  setHelpAnchor(helpAnchor: NSHelpAnchorName): void;
  alertStyle(): NSAlertStyle;
  setAlertStyle(alertStyle: NSAlertStyle): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  showsSuppressionButton(): boolean;
  setShowsSuppressionButton(showsSuppressionButton: boolean): void;
  suppressionButton(): NSButton;
  accessoryView(): NSView;
  setAccessoryView(accessoryView: NSView): void;
  window(): NSWindow;
}
declare const NSAlert: {
  alloc(): NSAlertUninitialized;
  class(): NSAlert;  alertWithError(error: NSError): NSAlert;
  alertWithMessageText_defaultButton_alternateButton_otherButton_informativeTextWithFormat(message: NSString | string | null, defaultButton: NSString | string | null, alternateButton: NSString | string | null, otherButton: NSString | string | null, format: NSString | string, ...args: any[]): NSAlert;
  runSheetWithMessage_info_buttons(message: NSString | string | null, info: NSString | string, buttons: NSArray<any> | any[]): void;
  runModalWithMessage_info_buttons(message: NSString | string | null, info: NSString | string, buttons: NSArray<any> | any[]): NSModalResponse;
  runModalSessionWithMessage_info_buttons(message: NSString | string | null, info: NSString | string, buttons: NSArray<any> | any[]): NSModalResponse;
  alertWithMessage_info_buttons(message: NSString | string | null, info: NSString | string, buttons: NSArray<any> | any[]): NSAlert;

}

