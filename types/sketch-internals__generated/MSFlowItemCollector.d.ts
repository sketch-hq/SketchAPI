interface MSFlowItemCollectorUninitialized<InitializedType = MSFlowItemCollector> extends NSObjectUninitialized<MSFlowItemCollector> {
  initWithLayers_onPage_document(layers: MSLayerArray, page: MSImmutablePage, doc: MSImmutableDocumentData): InitializedType;
}
interface MSFlowItemCollector extends NSObject {
  collectFlows(existingFlows: NSDictionary<any, any> | {[key: string]: any}): NSDictionary<any, any>;
  shouldInvalidateCollectedFlowsWithDiff(diff: MSTreeDiff): boolean;
}
declare const MSFlowItemCollector: {
  alloc(): MSFlowItemCollectorUninitialized;
  class(): MSFlowItemCollector;
}

