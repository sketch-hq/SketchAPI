interface _MSGradientStopUninitialized<InitializedType = _MSGradientStop> extends MSModelObjectUninitialized<_MSGradientStop> {}
interface _MSGradientStop extends MSModelObject {

  position(): CGFloat;
  setPosition(position: CGFloat): void;
  color(): MSColor;
  setColor(color: MSColor): void;
}
declare const _MSGradientStop: {
  alloc(): _MSGradientStopUninitialized;
  class(): _MSGradientStop;
}

