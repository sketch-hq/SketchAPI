interface MSManageSharedObjectSheetUninitialized<InitializedType = MSManageSharedObjectSheet> extends CHSheetControllerUninitialized<MSManageSharedObjectSheet> {}
interface MSManageSharedObjectSheet extends CHSheetController {
}
declare const MSManageSharedObjectSheet: {
  alloc(): MSManageSharedObjectSheetUninitialized;
  class(): MSManageSharedObjectSheet;
  tabIndex(): MSManageSharedObjectSheetTabIndex;
  setTabIndex(tabIndex: MSManageSharedObjectSheetTabIndex): void;

}

