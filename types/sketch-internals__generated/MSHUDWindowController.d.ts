interface MSHUDWindowControllerUninitialized<InitializedType = MSHUDWindowController> extends NSWindowControllerUninitialized<MSHUDWindowController> {}
interface MSHUDWindowController extends NSWindowController, INSWindowDelegate {
  toggle(): void;

  isVisible(): boolean;
}
declare const MSHUDWindowController: {
  alloc(): MSHUDWindowControllerUninitialized;
  class(): MSHUDWindowController;  makeHUD(): MSHUDWindowController;

}

