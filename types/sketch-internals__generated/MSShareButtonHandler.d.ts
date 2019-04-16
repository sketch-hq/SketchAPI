interface MSShareButtonHandlerUninitialized<InitializedType = MSShareButtonHandler> extends NSObjectUninitialized<MSShareButtonHandler> {}
interface MSShareButtonHandler extends NSObject, INSSharingServiceDelegate, INSSharingServicePickerDelegate {
  showShareMenuForLayers_sender_canvas(layers: NSArray<any> | any[], sender: any, canvas: MSContentDrawView): void;

  window(): NSWindow;
  setWindow(window: NSWindow): void;
}
declare const MSShareButtonHandler: {
  alloc(): MSShareButtonHandlerUninitialized;
  class(): MSShareButtonHandler;
}

