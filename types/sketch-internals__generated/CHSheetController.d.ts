interface CHSheetControllerUninitialized<InitializedType = CHSheetController> extends CHWindowControllerUninitialized<CHSheetController> {}

interface CHSheetController extends CHWindowController, INSTouchBarDelegate {
  run(): any;
  sheetWillClose(): void;
  confirm(sender: any): IBAction;
  cancel(sender: any): IBAction;
  _init(): any;
  touchBarItemIdentifiers(): NSArray<any>;
  selectorForTouchbarItemIdentifier(itemIdentifier: NSTouchBarItemIdentifier): string;
  touchBar_makeItemForIdentifier(touchBar: NSTouchBar, identifier: NSTouchBarItemIdentifier): NSTouchBarItem;

  object(): any;
  setObject(object: any): void;
}

declare const CHSheetController: {
  alloc(): CHSheetControllerUninitialized;
  class(): CHSheetController;
  runForWindow(window: NSWindow): any;
  runForWindow_withObject(window: NSWindow, obj: any): any;
  accessInstanceVariablesDirectly(): boolean;

}

