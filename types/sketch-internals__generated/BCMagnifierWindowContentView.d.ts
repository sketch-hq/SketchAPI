interface BCMagnifierWindowContentViewUninitialized<InitializedType = BCMagnifierWindowContentView> extends NSViewUninitialized<BCMagnifierWindowContentView> {}

interface BCMagnifierWindowContentView extends NSView {

  screenGrab(): BCScreenGrab;
  setScreenGrab(screenGrab: BCScreenGrab): void;
  currentColor(): MSFlexibleColor;
  setCurrentColor(currentColor: MSFlexibleColor): void;
}

declare const BCMagnifierWindowContentView: {
  alloc(): BCMagnifierWindowContentViewUninitialized;
  class(): BCMagnifierWindowContentView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

