interface NSTimerUninitialized<InitializedType = NSTimer> extends NSObjectUninitialized<NSTimer> {
  initWithFireDate_interval_repeats_block(date: NSDate, interval: NSTimeInterval, repeats: boolean, block: Block): InitializedType;
  initWithFireDate_interval_target_selector_userInfo_repeats(date: NSDate, ti: NSTimeInterval, t: any, s: string, ui: any | null, rep: boolean): InitializedType;
}
interface NSTimer extends NSObject {
  fire(): void;
  invalidate(): void;

  fireDate(): NSDate;
  setFireDate(fireDate: NSDate): void;
  timeInterval(): NSTimeInterval;
  tolerance(): NSTimeInterval;
  setTolerance(tolerance: NSTimeInterval): void;
  valid(): boolean;
  userInfo(): any;
}
declare const NSTimer: {
  alloc(): NSTimerUninitialized;
  class(): NSTimer;  timerWithTimeInterval_invocation_repeats(ti: NSTimeInterval, invocation: NSInvocation, yesOrNo: boolean): NSTimer;
  scheduledTimerWithTimeInterval_invocation_repeats(ti: NSTimeInterval, invocation: NSInvocation, yesOrNo: boolean): NSTimer;
  timerWithTimeInterval_target_selector_userInfo_repeats(ti: NSTimeInterval, aTarget: any, aSelector: string, userInfo: any | null, yesOrNo: boolean): NSTimer;
  scheduledTimerWithTimeInterval_target_selector_userInfo_repeats(ti: NSTimeInterval, aTarget: any, aSelector: string, userInfo: any | null, yesOrNo: boolean): NSTimer;
  timerWithTimeInterval_repeats_block(interval: NSTimeInterval, repeats: boolean, block: Block): NSTimer;
  scheduledTimerWithTimeInterval_repeats_block(interval: NSTimeInterval, repeats: boolean, block: Block): NSTimer;
  scheduledTimerWithTimeInterval_repeats_block_ch(interval: NSTimeInterval, repeats: boolean, block: BCTimerBlock): NSTimer;

}

