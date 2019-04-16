interface _MSGraphicsContextSettingsUninitialized<InitializedType = _MSGraphicsContextSettings> extends MSModelObjectUninitialized<_MSGraphicsContextSettings> {}
interface _MSGraphicsContextSettings extends MSModelObject {

  blendMode(): MSBlendMode;
  setBlendMode(blendMode: MSBlendMode): void;
  opacity(): CGFloat;
  setOpacity(opacity: CGFloat): void;
}
declare const _MSGraphicsContextSettings: {
  alloc(): _MSGraphicsContextSettingsUninitialized;
  class(): _MSGraphicsContextSettings;
}

