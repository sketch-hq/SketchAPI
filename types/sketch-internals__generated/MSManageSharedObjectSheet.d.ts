interface MSManageSharedObjectSheetUninitialized<InitializedType = MSManageSharedObjectSheet> extends CHSheetControllerUninitialized<MSManageSharedObjectSheet> {}

interface MSManageSharedObjectSheet extends CHSheetController {
}

declare const MSManageSharedObjectSheet: {
  alloc(): MSManageSharedObjectSheetUninitialized;
  class(): MSManageSharedObjectSheet;
  runForWindow(window: NSWindow): any;
  runForWindow_withObject(window: NSWindow, obj: any): any;
  tabIndex(): MSManageSharedObjectSheetTabIndex;
  setTabIndex(tabIndex: MSManageSharedObjectSheetTabIndex): void;
  accessInstanceVariablesDirectly(): boolean;

}

