interface MSUpDownControllerUninitialized<InitializedType = MSUpDownController> extends NSResponderUninitialized<MSUpDownController> {
  initWithTextField_createStepper(field: NSTextField, makeStepper: boolean): InitializedType;
}

interface MSUpDownController extends NSResponder {
  becomeFirstResponder(): boolean;
  textDidEndEditing(): void;
  textDidChange(note: NSNotification): void;
  doCommandBySelector(selector: string): boolean;
  cancelTextEditingForInvalidReplacementString(replacementStrings: NSArray<any> | any[]): boolean;
  keyUp(): void;
  increment(): void;
  decrement(): void;
  floatValue(): number;
  incrementBy(amount: CGFloat): boolean;
  incrementValueAccountingForModifierFlags(): CGFloat;
  hideStepper(hide: boolean): void;
  setFloatValueAndNotifyBindings(newValue: CGFloat): void;

  incrementDecrementDelegate(): any;
  setIncrementDecrementDelegate(incrementDecrementDelegate: any): void;
  textField(): NSTextField;
}

declare const MSUpDownController: {
  alloc(): MSUpDownControllerUninitialized;
  class(): MSUpDownController;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

