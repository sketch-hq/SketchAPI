interface CIColorUninitialized<InitializedType = CIColor> {
  initWithColor(color: NSColor): InitializedType;
}
interface CIColor {
}
declare const CIColor: {
  alloc(): CIColorUninitialized;
  class(): CIColor;
}

