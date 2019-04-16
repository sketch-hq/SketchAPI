interface _MSImmutableGraphicsContextSettingsUninitialized<InitializedType = _MSImmutableGraphicsContextSettings> extends MSImmutableModelObjectUninitialized<_MSImmutableGraphicsContextSettings> {}
interface _MSImmutableGraphicsContextSettings extends MSImmutableModelObject {

  blendMode(): MSBlendMode;
  opacity(): CGFloat;
}
declare const _MSImmutableGraphicsContextSettings: {
  alloc(): _MSImmutableGraphicsContextSettingsUninitialized;
  class(): _MSImmutableGraphicsContextSettings;
}

