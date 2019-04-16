interface NSPathCellUninitialized<InitializedType = NSPathCell> extends NSActionCellUninitialized<NSPathCell> {}

interface NSPathCell extends NSActionCell, INSMenuItemValidation, INSOpenSavePanelDelegate {
  setObjectValue(obj: any | null): void;
  rectOfPathComponentCell_withFrame_inView(cell: NSPathComponentCell, frame: NSRect, view: NSView): NSRect;
  pathComponentCellAtPoint_withFrame_inView(point: NSPoint, frame: NSRect, view: NSView): NSPathComponentCell;
  mouseEntered_withFrame_inView(event: NSEvent, frame: NSRect, view: NSView): void;
  mouseExited_withFrame_inView(event: NSEvent, frame: NSRect, view: NSView): void;
  validateMenuItem(menuItem: NSMenuItem): boolean;
  panel_shouldEnableURL(sender: any, url: NSURL): boolean;
  panel_validateURL_error(sender: any, url: NSURL, outError: MOPointer<NSError>): boolean;
  panel_didChangeToDirectoryURL(sender: any, url: NSURL | null): void;
  panel_userEnteredFilename_confirmed(sender: any, filename: NSString | string, okFlag: boolean): NSString;
  panel_willExpand(sender: any, expanding: boolean): void;
  panelSelectionDidChange(sender: any | null): void;

  pathStyle(): NSPathStyle;
  setPathStyle(pathStyle: NSPathStyle): void;
  URL(): NSURL;
  setURL(URL: NSURL): void;
  allowedTypes(): NSArray<any>;
  setAllowedTypes(allowedTypes: NSArray<any> | any[]): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  pathComponentCells(): NSArray<any>;
  setPathComponentCells(pathComponentCells: NSArray<any> | any[]): void;
  clickedPathComponentCell(): NSPathComponentCell;
  doubleAction(): string;
  setDoubleAction(doubleAction: string): void;
  backgroundColor(): NSColor;
  setBackgroundColor(backgroundColor: NSColor): void;
  placeholderString(): NSString;
  setPlaceholderString(placeholderString: NSString | string): void;
  placeholderAttributedString(): NSAttributedString;
  setPlaceholderAttributedString(placeholderAttributedString: NSAttributedString): void;
}

declare const NSPathCell: {
  alloc(): NSPathCellUninitialized;
  class(): NSPathCell;
  pathComponentCellClass(): any;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

