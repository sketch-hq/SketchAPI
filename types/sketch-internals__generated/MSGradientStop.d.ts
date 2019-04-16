interface MSGradientStopUninitialized<InitializedType = MSGradientStop> extends _MSGradientStopUninitialized<MSGradientStop> {
  initWithPosition_color(pos: CGFloat, aColor: MSColor): InitializedType;
}
interface MSGradientStop extends _MSGradientStop, IMSColorConvertible {
}
declare const MSGradientStop: {
  alloc(): MSGradientStopUninitialized;
  class(): MSGradientStop;  stopWithPosition_color(pos: CGFloat, aColor: MSColor): any;

}

