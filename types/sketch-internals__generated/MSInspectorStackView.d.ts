interface MSInspectorStackViewUninitialized<InitializedType = MSInspectorStackView> extends NSViewUninitialized<MSInspectorStackView> {}

interface MSInspectorStackView extends NSView {
  reloadWithViewControllers(controllers: NSArray<any> | any[]): void;
  reloadSubviews(): void;
  recalculateHeight(): void;
  stack(): void;
  subViewFrameDidChange(subview: NSView): void;

  sectionViewControllers(): NSArray<any>;
}

declare const MSInspectorStackView: {
  alloc(): MSInspectorStackViewUninitialized;
  class(): MSInspectorStackView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

