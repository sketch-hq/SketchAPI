interface MSImageOverrideViewUninitialized<InitializedType = MSImageOverrideView> extends NSImageViewUninitialized<MSImageOverrideView> {}

interface MSImageOverrideView extends NSImageView {

  placeholderImage(): NSImage;
  setPlaceholderImage(placeholderImage: NSImage): void;
  displaysPlaceholder(): boolean;
}

declare const MSImageOverrideView: {
  alloc(): MSImageOverrideViewUninitialized;
  class(): MSImageOverrideView;
  imageViewWithImage(image: NSImage): MSImageOverrideView;
  cellClass(): any;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

