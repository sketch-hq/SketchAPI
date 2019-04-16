interface MSDragLayerGestureRecognizerUninitialized<InitializedType = MSDragLayerGestureRecognizer> extends MSDragToMoveOrCopyGestureRecognizerUninitialized<MSDragLayerGestureRecognizer> {}

interface MSDragLayerGestureRecognizer extends MSDragToMoveOrCopyGestureRecognizer {
}

declare const MSDragLayerGestureRecognizer: {
  alloc(): MSDragLayerGestureRecognizerUninitialized;
  class(): MSDragLayerGestureRecognizer;
}

