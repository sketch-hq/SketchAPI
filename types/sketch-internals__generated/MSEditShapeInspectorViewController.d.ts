interface MSEditShapeInspectorViewControllerUninitialized<InitializedType = MSEditShapeInspectorViewController> extends NSViewControllerUninitialized<MSEditShapeInspectorViewController> {}
interface MSEditShapeInspectorViewController extends NSViewController, IMSInspectorChildController {
  refresh(): void;
  refreshClosePathButton(): void;

  pathController(): MSPathController;
  setPathController(pathController: MSPathController): void;
  shapeEventHandler(): MSShapeEventHandler;
  setShapeEventHandler(shapeEventHandler: MSShapeEventHandler): void;
  isMakingRectSelection(): boolean;
  setIsMakingRectSelection(isMakingRectSelection: boolean): void;
}
declare const MSEditShapeInspectorViewController: {
  alloc(): MSEditShapeInspectorViewControllerUninitialized;
  class(): MSEditShapeInspectorViewController;
}

