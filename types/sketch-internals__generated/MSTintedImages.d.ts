interface MSTintedImagesUninitialized<InitializedType = MSTintedImages> extends NSObjectUninitialized<MSTintedImages> {
  initWithTheme(theme: MSTheme): InitializedType;
}
interface MSTintedImages extends NSObject {
  hideImageWhenNodeIsSelected_active(selected: boolean, active: boolean): NSImage;
  lockImageWhenNodeIsSelected_active(selected: boolean, active: boolean): NSImage;
  pressedHideImageWhenNodeIsSelected(selected: boolean): NSImage;
  pressedLockImageWhenNodeIsSelected(selected: boolean): NSImage;

  selectedActiveHideImage(): NSImage;
  selectedInactiveHideImage(): NSImage;
  unselectedHideImage(): NSImage;
  pressedHideImage(): NSImage;
  pressedSelectedHideImage(): NSImage;
  selectedActiveLockImage(): NSImage;
  selectedInactiveLockImage(): NSImage;
  unselectedLockImage(): NSImage;
  pressedLockImage(): NSImage;
  pressedSelectedLockImage(): NSImage;
  sidebarAddPageImage(): NSImage;
  sidebarCollapsePageListImage(): NSImage;
  sidebarExpandPageListImage(): NSImage;
  flowBackImage(): NSImage;
  flowOtherPageImage(): NSImage;
}
declare const MSTintedImages: {
  alloc(): MSTintedImagesUninitialized;
  class(): MSTintedImages;
}

