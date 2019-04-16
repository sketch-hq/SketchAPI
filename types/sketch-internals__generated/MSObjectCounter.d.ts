interface MSObjectCounterUninitialized<InitializedType = MSObjectCounter> extends NSObjectUninitialized<MSObjectCounter> {
  initWithObject(object: any): InitializedType;
}
interface MSObjectCounter extends NSObject {
  addUseCase(useCase: NSInteger): void;
  countForUse(use: NSInteger): NSUInteger;
  compare(otherCounter: MSObjectCounter): NSComparisonResult;
  compare_byUse(otherCounter: MSObjectCounter, use: NSInteger): NSComparisonResult;

  object(): any;
  totalCount(): NSUInteger;
}
declare const MSObjectCounter: {
  alloc(): MSObjectCounterUninitialized;
  class(): MSObjectCounter;
}

