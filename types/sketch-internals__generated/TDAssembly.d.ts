interface TDAssemblyUninitialized<InitializedType = TDAssembly> extends NSObjectUninitialized<TDAssembly> {
  initWithString(s: NSString | string): InitializedType;
}
interface TDAssembly extends NSObject, INSCopying {
  peek(): any;
  next(): any;
  hasMore(): boolean;
  consumedObjectsJoinedByString(delimiter: NSString | string): NSString;
  remainingObjectsJoinedByString(delimiter: NSString | string): NSString;
  pop(): any;
  push(object: any): void;
  isStackEmpty(): boolean;
  objectsAbove(fence: any): NSArray<any>;

  length(): NSUInteger;
  objectsConsumed(): NSUInteger;
  objectsRemaining(): NSUInteger;
  defaultDelimiter(): NSString;
  stack(): NSMutableArray<any>;
  target(): any;
  setTarget(target: any): void;
}
declare const TDAssembly: {
  alloc(): TDAssemblyUninitialized;
  class(): TDAssembly;  assemblyWithString(s: NSString | string): any;

}

