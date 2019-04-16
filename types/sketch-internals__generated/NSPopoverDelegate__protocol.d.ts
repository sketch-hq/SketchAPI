interface INSPopoverDelegate {
  popoverShouldClose(popover: NSPopover): boolean;
  popoverShouldDetach(popover: NSPopover): boolean;
  popoverDidDetach(popover: NSPopover): void;
  detachableWindowForPopover(popover: NSPopover): NSWindow;
  popoverWillShow(notification: NSNotification): void;
  popoverDidShow(notification: NSNotification): void;
  popoverWillClose(notification: NSNotification): void;
  popoverDidClose(notification: NSNotification): void;
}

