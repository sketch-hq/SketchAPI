interface MSReplaceFontsSheetUninitialized<InitializedType = MSReplaceFontsSheet> extends CHSheetControllerUninitialized<MSReplaceFontsSheet> {}

interface MSReplaceFontsSheet extends CHSheetController {
}

declare const MSReplaceFontsSheet: {
  alloc(): MSReplaceFontsSheetUninitialized;
  class(): MSReplaceFontsSheet;
  dontReplaceFontLabel(): NSString;
  runForWindow(window: NSWindow): any;
  runForWindow_withObject(window: NSWindow, obj: any): any;
  accessInstanceVariablesDirectly(): boolean;

}

