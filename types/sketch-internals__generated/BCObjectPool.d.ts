interface BCObjectPoolUninitialized<InitializedType = BCObjectPool> extends NSObjectUninitialized<BCObjectPool> {
  initWithObjectCreatorBlock(block: any): InitializedType;
}
interface BCObjectPool extends NSObject {
  vendObject(): any;
  recycleObject(object: any): void;
  removeAllObjects(): NSArray<any>;

  maximumPoolCount(): NSUInteger;
  setMaximumPoolCount(maximumPoolCount: NSUInteger): void;
}
declare const BCObjectPool: {
  alloc(): BCObjectPoolUninitialized;
  class(): BCObjectPool;
}

