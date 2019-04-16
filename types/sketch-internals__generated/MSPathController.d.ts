interface MSPathControllerUninitialized<InitializedType = MSPathController> extends NSObjectUninitialized<MSPathController> {}
interface MSPathController extends NSObject {
  setSelectionIndexPath(indexPath: NSIndexPath | null): void;
  runChange(change: MSShapeChange): void;
  runChange_context(change: MSShapeChange, context: MSShapeChangeContext): void;
  selectNext(sender: any): void;
  selectPrevious(sender: any): void;
  currentCurveMode(): NSNumber;
  changeCurveMode(mode: MSCurveMode): void;
  remove(sender: any): IBAction;

  content(): NSArray<any>;
  setContent(content: NSArray<any> | any[]): void;
  selectionIndexPaths(): NSArray<any>;
  setSelectionIndexPaths(selectionIndexPaths: NSArray<any> | any[]): void;
  selectedObjects(): NSArray<any>;
  changeContext(): MSShapeChangeContext;
}
declare const MSPathController: {
  alloc(): MSPathControllerUninitialized;
  class(): MSPathController;
}

