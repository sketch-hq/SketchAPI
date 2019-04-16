interface MSEventHandlerManagerUninitialized<InitializedType = MSEventHandlerManager> extends NSObjectUninitialized<MSEventHandlerManager> {
  initWithDelegate(delegate: any): InitializedType;
}
interface MSEventHandlerManager extends NSObject {
  setCurrentHandler_force(handler: MSEventHandler | null, force: boolean): void;
  handlerForClass(aClass: any): MSEventHandler;
  switchToEventHandlerClass(handlerClass: any): MSEventHandler;
  toggleHandlerClass(handlerClass: any): MSEventHandler;
  drawInRect_context(dirtyRect: NSRect, context: MSRenderingContext): void;
  sendMouseDownEvent(event: NSEvent): void;
  sendMouseDraggedEvent(event: NSEvent): void;
  sendMouseUpEvent(event: NSEvent): void;
  sendMouseMovedEvent(event: NSEvent): void;
  recordEvent(event: NSEvent): void;
  selectionDidChangeTo(layers: MSLayerArray): void;
  prepareToDraw(treeDiff: MSTreeDiff): void;

  document(): MSDocument;
  setDocument(document: MSDocument): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  currentHandler(): MSEventHandler;
  setCurrentHandler(currentHandler: MSEventHandler): void;
  normalHandler(): MSNormalEventHandler;
  lastMouseDownClickCount(): NSInteger;
  lastEventType(): MSEventType;
}
declare const MSEventHandlerManager: {
  alloc(): MSEventHandlerManagerUninitialized;
  class(): MSEventHandlerManager;
}

