interface NoodleLineNumberViewUninitialized<InitializedType = NoodleLineNumberView> extends NSRulerViewUninitialized<NoodleLineNumberView> {
  initWithScrollView(aScrollView: NSScrollView): InitializedType;
}
interface NoodleLineNumberView extends NSRulerView {
  setFont(aFont: NSFont): void;
  font(): NSFont;
  setTextColor(color: NSColor): void;
  textColor(): NSColor;
  setAlternateTextColor(color: NSColor): void;
  alternateTextColor(): NSColor;
  setBackgroundColor(color: NSColor): void;
  backgroundColor(): NSColor;
  lineNumberForLocation(location: CGFloat): NSInteger;
  markerAtLine(line: NSUInteger): NoodleLineNumberMarker;
}
declare const NoodleLineNumberView: {
  alloc(): NoodleLineNumberViewUninitialized;
  class(): NoodleLineNumberView;
}

