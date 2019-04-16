interface MSPluginsPreferenceIconViewUninitialized<InitializedType = MSPluginsPreferenceIconView> extends NSViewUninitialized<MSPluginsPreferenceIconView> {}

interface MSPluginsPreferenceIconView extends NSView {

  icon(): NSImage;
  setIcon(icon: NSImage): void;
}

declare const MSPluginsPreferenceIconView: {
  alloc(): MSPluginsPreferenceIconViewUninitialized;
  class(): MSPluginsPreferenceIconView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

