interface MSSVGMergeUninitialized<InitializedType = MSSVGMerge> extends MSSVGfeFilterPrimitiveUninitialized<MSSVGMerge> {}

interface MSSVGMerge extends MSSVGfeFilterPrimitive {
  addMergeNodeNamed(name: NSString | string): void;
}

declare const MSSVGMerge: {
  alloc(): MSSVGMergeUninitialized;
  class(): MSSVGMerge;
  filter(): MSSVGMerge;
}

