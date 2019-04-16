interface NoodleLineNumberMarkerUninitialized<InitializedType = NoodleLineNumberMarker> extends NSRulerMarkerUninitialized<NoodleLineNumberMarker> {
  initWithRulerView_lineNumber_image_imageOrigin(aRulerView: NSRulerView, line: CGFloat, anImage: NSImage, imageOrigin: NSPoint): InitializedType;
}

interface NoodleLineNumberMarker extends NSRulerMarker {
  setLineNumber(line: NSUInteger): void;
  lineNumber(): NSUInteger;
}

declare const NoodleLineNumberMarker: {
  alloc(): NoodleLineNumberMarkerUninitialized;
  class(): NoodleLineNumberMarker;
  accessInstanceVariablesDirectly(): boolean;

}

