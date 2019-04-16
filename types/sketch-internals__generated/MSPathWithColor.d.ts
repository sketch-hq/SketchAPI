interface MSPathWithColorUninitialized<InitializedType = MSPathWithColor> extends NSObjectUninitialized<MSPathWithColor> {}
interface MSPathWithColor extends NSObject {

  color(): MSImmutableColor;
  setColor(color: MSImmutableColor): void;
  path(): NSBezierPath;
  setPath(path: NSBezierPath): void;
  representedString(): NSString;
  setRepresentedString(representedString: NSString | string): void;
}
declare const MSPathWithColor: {
  alloc(): MSPathWithColorUninitialized;
  class(): MSPathWithColor;
}

