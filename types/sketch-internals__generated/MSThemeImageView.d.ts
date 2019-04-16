interface MSThemeImageViewUninitialized<InitializedType = MSThemeImageView> extends NSImageViewUninitialized<MSThemeImageView> {}

interface MSThemeImageView extends NSImageView {

  imageName(): NSString;
  setImageName(imageName: NSString | string): void;
  delegate(): any;
  setDelegate(delegate: any): void;
}

declare const MSThemeImageView: {
  alloc(): MSThemeImageViewUninitialized;
  class(): MSThemeImageView;
  imageViewWithImage(image: NSImage): MSThemeImageView;
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

