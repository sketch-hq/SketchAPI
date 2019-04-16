interface MSSVGMergeNodeUninitialized<InitializedType = MSSVGMergeNode> extends MSXMLElementWrapperUninitialized<MSSVGMergeNode> {}

interface MSSVGMergeNode extends MSXMLElementWrapper {

  in(): NSString;
  setIn(in_: NSString | string): void;
}

declare const MSSVGMergeNode: {
  alloc(): MSSVGMergeNodeUninitialized;
  class(): MSSVGMergeNode;
  mergeNodeNamed(nodeName: NSString | string): MSSVGMergeNode;
  elementName(): NSString;
  element(): MSSVGMergeNode;
}

