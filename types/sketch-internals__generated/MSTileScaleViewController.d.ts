interface MSTileScaleViewControllerUninitialized<InitializedType = MSTileScaleViewController> extends NSViewControllerUninitialized<MSTileScaleViewController> {
  initWithStylesController(stylesController: NSArrayController): InitializedType;
}

interface MSTileScaleViewController extends NSViewController {
}

declare const MSTileScaleViewController: {
  alloc(): MSTileScaleViewControllerUninitialized;
  class(): MSTileScaleViewController;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

