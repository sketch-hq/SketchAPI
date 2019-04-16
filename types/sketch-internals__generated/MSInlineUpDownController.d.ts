interface MSInlineUpDownControllerUninitialized<InitializedType = MSInlineUpDownController> extends MSUpDownControllerUninitialized<MSInlineUpDownController> {}

interface MSInlineUpDownController extends MSUpDownController {
}

declare const MSInlineUpDownController: {
  alloc(): MSInlineUpDownControllerUninitialized;
  class(): MSInlineUpDownController;
}

