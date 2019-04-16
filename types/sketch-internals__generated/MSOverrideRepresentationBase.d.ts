interface MSOverrideRepresentationBaseUninitialized<InitializedType = MSOverrideRepresentationBase> extends NSObjectUninitialized<MSOverrideRepresentationBase> {}
interface MSOverrideRepresentationBase extends NSObject {
  childrenForLayerList(): NSArray<any>;
  enumerate(block: Block): void;

  isExpanded(): boolean;
  children(): NSArray<any>;
  flattenedChildren(): NSArray<any>;
  instance(): MSSymbolInstance;
}
declare const MSOverrideRepresentationBase: {
  alloc(): MSOverrideRepresentationBaseUninitialized;
  class(): MSOverrideRepresentationBase;
}

