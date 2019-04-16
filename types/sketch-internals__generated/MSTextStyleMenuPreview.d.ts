interface MSTextStyleMenuPreviewUninitialized<InitializedType = MSTextStyleMenuPreview> extends NSObjectUninitialized<MSTextStyleMenuPreview> {}
interface MSTextStyleMenuPreview extends NSObject {
}
declare const MSTextStyleMenuPreview: {
  alloc(): MSTextStyleMenuPreviewUninitialized;
  class(): MSTextStyleMenuPreview;  applyTextStylesToMenuItem_colorSpace(item: NSMenuItem, colorSpace: NSColorSpace): void;
  attributedTitleForTextStyle_colorSpace(sharedStyle: MSSharedStyle, colorSpace: NSColorSpace): NSAttributedString;

}

