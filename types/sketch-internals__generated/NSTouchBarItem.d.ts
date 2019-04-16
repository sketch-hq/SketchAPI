interface NSTouchBarItemUninitialized<InitializedType = NSTouchBarItem> extends NSObjectUninitialized<NSTouchBarItem> {
  initWithIdentifier(identifier: NSTouchBarItemIdentifier): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
}
interface NSTouchBarItem extends NSObject, INSCoding, INSCoding {

  identifier(): NSTouchBarItemIdentifier;
  visibilityPriority(): NSTouchBarItemPriority;
  setVisibilityPriority(visibilityPriority: NSTouchBarItemPriority): void;
  view(): NSView;
  viewController(): NSViewController;
  customizationLabel(): NSString;
  visible(): boolean;
}
declare const NSTouchBarItem: {
  alloc(): NSTouchBarItemUninitialized;
  class(): NSTouchBarItem;
}

