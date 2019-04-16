interface CHWindowControllerUninitialized<InitializedType = CHWindowController> extends NSWindowControllerUninitialized<CHWindowController> {}
interface CHWindowController extends NSWindowController {
}
declare const CHWindowController: {
  alloc(): CHWindowControllerUninitialized;
  class(): CHWindowController;
}

