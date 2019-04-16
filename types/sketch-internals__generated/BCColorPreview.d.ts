interface BCColorPreviewUninitialized<InitializedType = BCColorPreview> extends NSPopUpButtonUninitialized<BCColorPreview> {
  initInBounds(colorPickerBounds: NSRect): InitializedType;
}
interface BCColorPreview extends NSPopUpButton, INSMenuDelegate {

  color(): MSFlexibleColor;
  setColor(color: MSFlexibleColor): void;
}
declare const BCColorPreview: {
  alloc(): BCColorPreviewUninitialized;
  class(): BCColorPreview;
}

