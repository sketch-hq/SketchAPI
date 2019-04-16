interface MSNormalBaseEventHandlerUninitialized<InitializedType = MSNormalBaseEventHandler> extends MSEventHandlerUninitialized<MSNormalBaseEventHandler> {}
interface MSNormalBaseEventHandler extends MSEventHandler {
  resizeParentsOfSelectedLayersToFit(): void;
  configureInspector(inspector: MSInspectorController): void;
}
declare const MSNormalBaseEventHandler: {
  alloc(): MSNormalBaseEventHandlerUninitialized;
  class(): MSNormalBaseEventHandler;  cursorForCorner_ofCoordinateSpace(corner: BCCorner, coordinateSpace: any | null): NSCursor;

}

