interface MSInsertArtboardEventHandlerUninitialized<InitializedType = MSInsertArtboardEventHandler> extends MSInsertLayerEventHandlerUninitialized<MSInsertArtboardEventHandler> {}

interface MSInsertArtboardEventHandler extends MSInsertLayerEventHandler {
  insertArtboardFromPreset(preset: MSArtboardPreset): void;
}

declare const MSInsertArtboardEventHandler: {
  alloc(): MSInsertArtboardEventHandlerUninitialized;
  class(): MSInsertArtboardEventHandler;
}

