interface NSProgressIndicatorUninitialized<InitializedType = NSProgressIndicator> extends NSViewUninitialized<NSProgressIndicator> {}

interface NSProgressIndicator extends NSView, INSAccessibilityProgressIndicator {
  incrementBy(delta: number): void;
  startAnimation(sender: any | null): void;
  stopAnimation(sender: any | null): void;
  sizeToFit(): void;
  animationDelay(): NSTimeInterval;
  setAnimationDelay(delay: NSTimeInterval): void;
  animate(sender: any | null): void;
  accessibilityValue(): NSNumber;

  indeterminate(): boolean;
  setIndeterminate(indeterminate: boolean): void;
  bezeled(): boolean;
  setBezeled(bezeled: boolean): void;
  controlTint(): NSControlTint;
  setControlTint(controlTint: NSControlTint): void;
  controlSize(): NSControlSize;
  setControlSize(controlSize: NSControlSize): void;
  doubleValue(): number;
  setDoubleValue(doubleValue: number): void;
  minValue(): number;
  setMinValue(minValue: number): void;
  maxValue(): number;
  setMaxValue(maxValue: number): void;
  usesThreadedAnimation(): boolean;
  setUsesThreadedAnimation(usesThreadedAnimation: boolean): void;
  style(): NSProgressIndicatorStyle;
  setStyle(style: NSProgressIndicatorStyle): void;
  displayedWhenStopped(): boolean;
  setDisplayedWhenStopped(displayedWhenStopped: boolean): void;
}

declare const NSProgressIndicator: {
  alloc(): NSProgressIndicatorUninitialized;
  class(): NSProgressIndicator;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

