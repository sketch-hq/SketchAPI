interface CATransactionUninitialized<InitializedType = CATransaction> extends NSObjectUninitialized<CATransaction> {}
interface CATransaction extends NSObject {
}
declare const CATransaction: {
  alloc(): CATransactionUninitialized;
  class(): CATransaction;  begin(): void;
  commit(): void;
  flush(): void;
  lock(): void;
  unlock(): void;
  animationDuration(): CFTimeInterval;
  setAnimationDuration(dur: CFTimeInterval): void;
  animationTimingFunction(): CAMediaTimingFunction;
  setAnimationTimingFunction(functionName: CAMediaTimingFunction | null): void;
  disableActions(): boolean;
  setDisableActions(flag: boolean): void;
  setCompletionBlock(block: Block | null): void;
  valueForKey(key: NSString | string): any;
  setValue_forKey(anObject: any | null, key: NSString | string): void;
  disableAnimationsInBlock(block: BCVoidBlock): void;

}

