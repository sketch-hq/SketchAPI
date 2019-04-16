interface NSAnimationUninitialized<InitializedType = NSAnimation> extends NSObjectUninitialized<NSAnimation> {
  initWithDuration_animationCurve(duration: NSTimeInterval, animationCurve: NSAnimationCurve): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
}
interface NSAnimation extends NSObject, INSCopying, INSCoding {
  startAnimation(): void;
  stopAnimation(): void;
  addProgressMark(progressMark: NSAnimationProgress): void;
  removeProgressMark(progressMark: NSAnimationProgress): void;
  startWhenAnimation_reachesProgress(animation: NSAnimation, startProgress: NSAnimationProgress): void;
  stopWhenAnimation_reachesProgress(animation: NSAnimation, stopProgress: NSAnimationProgress): void;
  clearStartAnimation(): void;
  clearStopAnimation(): void;

  animating(): boolean;
  currentProgress(): NSAnimationProgress;
  setCurrentProgress(currentProgress: NSAnimationProgress): void;
  duration(): NSTimeInterval;
  setDuration(duration: NSTimeInterval): void;
  animationBlockingMode(): NSAnimationBlockingMode;
  setAnimationBlockingMode(animationBlockingMode: NSAnimationBlockingMode): void;
  frameRate(): number;
  setFrameRate(frameRate: number): void;
  animationCurve(): NSAnimationCurve;
  setAnimationCurve(animationCurve: NSAnimationCurve): void;
  currentValue(): number;
  delegate(): any;
  setDelegate(delegate: any): void;
  progressMarks(): NSArray<any>;
  setProgressMarks(progressMarks: NSArray<any> | any[]): void;
  runLoopModesForAnimating(): NSArray<any>;
}
declare const NSAnimation: {
  alloc(): NSAnimationUninitialized;
  class(): NSAnimation;
}

