interface MSColorInspectorSeparatorViewUninitialized<InitializedType = MSColorInspectorSeparatorView> extends MSSectionBackgroundSeparatorViewUninitialized<MSColorInspectorSeparatorView> {}

interface MSColorInspectorSeparatorView extends MSSectionBackgroundSeparatorView {
}

declare const MSColorInspectorSeparatorView: {
  alloc(): MSColorInspectorSeparatorViewUninitialized;
  class(): MSColorInspectorSeparatorView;
  separator(): MSColorInspectorSeparatorView;
  separatorWithInsets(insets: NSEdgeInsets): MSColorInspectorSeparatorView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

