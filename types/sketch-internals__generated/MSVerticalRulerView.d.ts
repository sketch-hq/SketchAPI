interface MSVerticalRulerViewUninitialized<InitializedType = MSVerticalRulerView> extends MSRulerViewUninitialized<MSVerticalRulerView> {}

interface MSVerticalRulerView extends MSRulerView {
}

declare const MSVerticalRulerView: {
  alloc(): MSVerticalRulerViewUninitialized;
  class(): MSVerticalRulerView;
  rulerDraggingLocked(): boolean;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setRulerDraggingLocked(rulerDraggingLocked: boolean): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

