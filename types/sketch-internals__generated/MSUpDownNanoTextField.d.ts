interface MSUpDownNanoTextFieldUninitialized<InitializedType = MSUpDownNanoTextField> extends MSUpDownTextFieldUninitialized<MSUpDownNanoTextField> {}

interface MSUpDownNanoTextField extends MSUpDownTextField {
}

declare const MSUpDownNanoTextField: {
  alloc(): MSUpDownNanoTextFieldUninitialized;
  class(): MSUpDownNanoTextField;
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

