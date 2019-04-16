interface MSFlowItemUninitialized<InitializedType = MSFlowItem> extends NSObjectUninitialized<MSFlowItem> {
  initWithFlowInfo_flowInfluencingLayerIDs_clipToRects_sourceLayerBounds(flowInfo: MSFlowInfo, flowInfluencingLayerIDs: NSSet<any>, clipRects: NSSet<any>, sourceLayerBounds: CGRect): InitializedType;
}
interface MSFlowItem extends NSObject {
  flowSegmentForZoomLevel(zoomLevel: CGFloat): MSBezierSegment;

  flowInfluencingLayerIDs(): NSSet<any>;
  shouldDrawSourceLayerBounds(): boolean;
  shouldDrawSourceLineAndTip(): boolean;
  sourceLayerBounds(): CGRect;
  flowInfo(): MSFlowInfo;
  flowType(): MSFlowType;
  startPoint(): CGPoint;
  clipRects(): NSSet<any>;
}
declare const MSFlowItem: {
  alloc(): MSFlowItemUninitialized;
  class(): MSFlowItem;
}

