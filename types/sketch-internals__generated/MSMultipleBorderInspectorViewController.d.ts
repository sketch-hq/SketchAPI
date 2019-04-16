interface MSMultipleBorderInspectorViewControllerUninitialized<InitializedType = MSMultipleBorderInspectorViewController> extends MSMultipleColorStylePartInspectorViewControllerUninitialized<MSMultipleBorderInspectorViewController> {}

interface MSMultipleBorderInspectorViewController extends MSMultipleColorStylePartInspectorViewController, IBCPopoverDelegate {
  showAdvancedOptionsAction(sender: any): IBAction;
  styleDidEnableOrDisable(): void;
  minimumPopoverContentViewHeight(popover: BCPopover): CGFloat;
  popoverWillShow(notification: NSNotification): void;
  popoverWillClose(popover: BCPopover): void;
  popoverWindowSizeDidChange(popover: BCPopover): void;
  popoverWindowDidMove(popover: BCPopover): void;
  popoverShouldCloseWhenNewPopoverOpens_newPopover(popover: BCPopover, newPopover: BCPopover): boolean;
  popoverShouldCauseExistingPopoversToClose(popover: BCPopover): boolean;
  popoverShouldAnimateOnContentFrameDidChange(notification: NSNotification): boolean;
  popoverWillReturnUndoManager(popover: BCPopover): NSUndoManager;
  popoverShouldTrackSuperviewOfAttachedToView(popover: BCPopover): boolean;

  borderOptionsController(): MSBorderOptionsInspectorViewController;
  thicknessLabel(): MSTextLabelForUpDownField;
  setThicknessLabel(thicknessLabel: MSTextLabelForUpDownField): void;
  addStylePartButton(): NSButton;
  setAddStylePartButton(addStylePartButton: NSButton): void;
}

declare const MSMultipleBorderInspectorViewController: {
  alloc(): MSMultipleBorderInspectorViewControllerUninitialized;
  class(): MSMultipleBorderInspectorViewController;
}

