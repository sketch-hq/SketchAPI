interface MSSharedStyleContainerUninitialized<InitializedType = MSSharedStyleContainer> extends _MSSharedStyleContainerUninitialized<MSSharedStyleContainer> {}

interface MSSharedStyleContainer extends _MSSharedStyleContainer {
  removeSharedStyle(sharedStyle: MSSharedStyle): void;
  sharedStyleWithID(sharedStyleID: NSString | string): MSSharedStyle;
  sharedStyleAtIndex(index: NSUInteger): MSSharedStyle;
  indexOfSharedStyle(sharedStyle: MSSharedStyle): NSInteger;
  numberOfSharedStyles(): NSUInteger;
  validStyleType(): MSSharedStyleType;
  sharedStyles(): NSArray<any>;
}

declare const MSSharedStyleContainer: {
  alloc(): MSSharedStyleContainerUninitialized;
  class(): MSSharedStyleContainer;
}

