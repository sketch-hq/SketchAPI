interface MSInferredLayoutRecorderUninitialized<InitializedType = MSInferredLayoutRecorder> extends NSObjectUninitialized<MSInferredLayoutRecorder> {
  initWithGroup(group: MSLayerGroup): InitializedType;
}
interface MSInferredLayoutRecorder extends NSObject {
  originalRectOfLayer(layer: MSLayer): NSRect;
  changeOfLayerLine(line: MSLayerLine): CGFloat;

  originalGroupRect(): NSRect;
  originalGroupParentBounds(): NSRect;
  sortedLayerLines(): NSArray<any>;
}
declare const MSInferredLayoutRecorder: {
  alloc(): MSInferredLayoutRecorderUninitialized;
  class(): MSInferredLayoutRecorder;
}

