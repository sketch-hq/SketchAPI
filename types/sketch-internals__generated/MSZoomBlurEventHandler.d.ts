interface MSZoomBlurEventHandlerUninitialized<InitializedType = MSZoomBlurEventHandler> extends MSPointsEventHandlerUninitialized<MSZoomBlurEventHandler> {}
interface MSZoomBlurEventHandler extends MSPointsEventHandler {

  blurStyle(): MSStyleBlur;
  setBlurStyle(blurStyle: MSStyleBlur): void;
}
declare const MSZoomBlurEventHandler: {
  alloc(): MSZoomBlurEventHandlerUninitialized;
  class(): MSZoomBlurEventHandler;
}

