interface INSAnimationDelegate {
  animationShouldStart(animation: NSAnimation): boolean;
  animationDidStop(animation: NSAnimation): void;
  animationDidEnd(animation: NSAnimation): void;
  animation_valueForProgress(animation: NSAnimation, progress: NSAnimationProgress): number;
  animation_didReachProgressMark(animation: NSAnimation, progress: NSAnimationProgress): void;
}

