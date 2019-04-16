interface MSUpDownMiniTextFieldUninitialized<InitializedType = MSUpDownMiniTextField> extends MSUpDownTextFieldUninitialized<MSUpDownMiniTextField> {}

interface MSUpDownMiniTextField extends MSUpDownTextField {
}

declare const MSUpDownMiniTextField: {
  alloc(): MSUpDownMiniTextFieldUninitialized;
  class(): MSUpDownMiniTextField;
  multipleValuesPlaceholderString(): NSString;
  accessInstanceVariablesDirectly(): boolean;
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

