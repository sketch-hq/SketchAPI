interface MSForeignObjectCollectorUninitialized<InitializedType = MSForeignObjectCollector> extends NSObjectUninitialized<MSForeignObjectCollector> {
  initWithProvider(provider: any): InitializedType;
}
interface MSForeignObjectCollector extends NSObject {
  buildCollectionWithFilter(filter: MSForeignObjectCollectionFilter | null): NSArray<any>;

  provider(): any;
}
declare const MSForeignObjectCollector: {
  alloc(): MSForeignObjectCollectorUninitialized;
  class(): MSForeignObjectCollector;
}

