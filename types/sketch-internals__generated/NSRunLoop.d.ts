interface NSRunLoopUninitialized<InitializedType = NSRunLoop> extends NSObjectUninitialized<NSRunLoop> {}
interface NSRunLoop extends NSObject {
  addTimer_forMode(timer: NSTimer, mode: NSRunLoopMode): void;
  addPort_forMode(aPort: NSPort, mode: NSRunLoopMode): void;
  removePort_forMode(aPort: NSPort, mode: NSRunLoopMode): void;
  limitDateForMode(mode: NSRunLoopMode): NSDate;
  acceptInputForMode_beforeDate(mode: NSRunLoopMode, limitDate: NSDate): void;
  run(): void;
  runUntilDate(limitDate: NSDate): void;
  runMode_beforeDate(mode: NSRunLoopMode, limitDate: NSDate): boolean;
  configureAsServer(): void;
  performInModes_block(modes: NSArray<any> | any[], block: Block): void;
  performBlock(block: Block): void;
  performSelector_target_argument_order_modes(aSelector: string, target: any, arg: any | null, order: NSUInteger, modes: NSArray<any> | any[]): void;
  cancelPerformSelector_target_argument(aSelector: string, target: any, arg: any | null): void;
  cancelPerformSelectorsWithTarget(target: any): void;

  currentMode(): NSRunLoopMode;
}
declare const NSRunLoop: {
  alloc(): NSRunLoopUninitialized;
  class(): NSRunLoop;
  currentRunLoop(): NSRunLoop;
  mainRunLoop(): NSRunLoop;

}

