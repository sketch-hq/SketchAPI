interface MSStackViewUninitialized<InitializedType = MSStackView> extends NSViewUninitialized<MSStackView> {}

interface MSStackView extends NSView {
  stack(sender: any): IBAction;

  autoupdatesMaximumHeight(): boolean;
  setAutoupdatesMaximumHeight(autoupdatesMaximumHeight: boolean): void;
  maximumHeight(): NSInteger;
  setMaximumHeight(maximumHeight: NSInteger): void;
  minimumHeight(): CGFloat;
  setMinimumHeight(minimumHeight: CGFloat): void;
  backgroundColor(): NSColor;
  setBackgroundColor(backgroundColor: NSColor): void;
  keyResponder(): any;
  setKeyResponder(keyResponder: any): void;
}

declare const MSStackView: {
  alloc(): MSStackViewUninitialized;
  class(): MSStackView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

