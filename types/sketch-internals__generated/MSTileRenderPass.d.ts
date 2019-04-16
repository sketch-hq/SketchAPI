interface MSTileRenderPassUninitialized<InitializedType = MSTileRenderPass> extends NSObjectUninitialized<MSTileRenderPass> {}
interface MSTileRenderPass extends NSObject {
}
declare const MSTileRenderPass: {
  alloc(): MSTileRenderPassUninitialized;
  class(): MSTileRenderPass;  tileRenderPassWithPage_inDocument_dirtyRect_zoomValue(page: MSImmutablePage, documentData: MSImmutableDocumentData, dirtyRect: CGRect, zoomValue: CGFloat): MSTileRenderPass;

}

