interface CHProgressSheetUninitialized<InitializedType = CHProgressSheet> extends CHSheetControllerUninitialized<CHProgressSheet> {}

interface CHProgressSheet extends CHSheetController {
  setProgressMaximum(max: NSInteger): void;
  incrementProgress(): void;
  incrementProgressBy(amount: NSInteger): void;
  isMaximum(): boolean;
  setMessage(message: NSString | string): void;
  setTitle(aTitle: NSString | string): void;
  setSubtitle(subtitle: NSString | string): void;
  setCancelButtonTitle(title: NSString | string): void;
  setShowsCancelButton(flag: boolean): void;
  setIndeterminate(flag: boolean): void;
}

declare const CHProgressSheet: {
  alloc(): CHProgressSheetUninitialized;
  class(): CHProgressSheet;
  runForWindow(window: NSWindow): any;
  runForWindow_withObject(window: NSWindow, obj: any): any;
}

