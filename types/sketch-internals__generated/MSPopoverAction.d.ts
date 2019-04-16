interface MSPopoverActionUninitialized<InitializedType = MSPopoverAction> extends MSDocumentActionUninitialized<MSPopoverAction> {}

interface MSPopoverAction extends MSDocumentAction {
  showPopover(sender: any): void;
  closePopover(): void;
  popoverWillClose(popover: BCPopover): void;

  popoverViewController(): NSViewController;
  popoverVisible(): boolean;
}

declare const MSPopoverAction: {
  alloc(): MSPopoverActionUninitialized;
  class(): MSPopoverAction;
  popoverClass(): any;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

