interface MSTileRasterisationOperationUninitialized<InitializedType = MSTileRasterisationOperation> extends NSOperationUninitialized<MSTileRasterisationOperation> {}

interface MSTileRasterisationOperation extends NSOperation {
}

declare const MSTileRasterisationOperation: {
  alloc(): MSTileRasterisationOperationUninitialized;
  class(): MSTileRasterisationOperation;
  operationWithMemory_bytesPerRow_rect_zoomValue_backingScaleFactor_page_document_driver_contextPool_cacheProvider_colorSpace(memory: void, bytesPerRow: size_t, rect: BCIntRect, zoomValue: CGFloat, backingScaleFactor: CGFloat, page: MSImmutablePage, document: MSImmutableDocumentData, driver: MSRenderingDriver, contextPool: MSCGContextPool | null, cacheProvider: any | null, colorSpace: CGColorSpaceRef): MSTileRasterisationOperation;
  accessInstanceVariablesDirectly(): boolean;

}

