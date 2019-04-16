interface MSGridSheetBaseUninitialized<InitializedType = MSGridSheetBase> extends CHSheetControllerUninitialized<MSGridSheetBase> {}
interface MSGridSheetBase extends CHSheetController, INSWindowDelegate {
  baseObjectForRootLayer(root: any): MSBaseGrid;
  defaultObject(): MSBaseGrid;
  applyObject_toLayer(obj: MSBaseGrid, root: any): void;
  refreshView(): void;
  refreshCanvas(sender: any): IBAction;
  gridChanged(grid: any): IBAction;

  originalSettings(): NSMapTable<any, any>;
  templateObject(): MSBaseGrid;
}
declare const MSGridSheetBase: {
  alloc(): MSGridSheetBaseUninitialized;
  class(): MSGridSheetBase;
}

