interface MSAutoSelectingArrayControllerUninitialized<InitializedType = MSAutoSelectingArrayController> extends NSArrayControllerUninitialized<MSAutoSelectingArrayController> {}

interface MSAutoSelectingArrayController extends NSArrayController {
}

declare const MSAutoSelectingArrayController: {
  alloc(): MSAutoSelectingArrayControllerUninitialized;
  class(): MSAutoSelectingArrayController;
}

