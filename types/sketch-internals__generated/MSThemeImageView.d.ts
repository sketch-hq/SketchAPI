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
}

