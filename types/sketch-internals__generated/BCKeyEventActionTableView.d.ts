interface BCKeyEventActionTableViewUninitialized<InitializedType = BCKeyEventActionTableView> extends NSTableViewUninitialized<BCKeyEventActionTableView> {}

interface BCKeyEventActionTableView extends NSTableView {
  setTarget_action_forKeyDownEventWithCharacters(target: any, action: string, characters: NSString | string): void;
}

declare const BCKeyEventActionTableView: {
  alloc(): BCKeyEventActionTableViewUninitialized;
  class(): BCKeyEventActionTableView;
  cellClass(): any;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

