interface NSPathCellUninitialized<InitializedType = NSPathCell> extends NSActionCellUninitialized<NSPathCell> {}
interface NSPathCell extends NSActionCell, INSMenuItemValidation, INSOpenSavePanelDelegate {
  setObjectValue(obj: any | null): void;
  rectOfPathComponentCell_withFrame_inView(cell: NSPathComponentCell, frame: NSRect, view: NSView): NSRect;
  pathComponentCellAtPoint_withFrame_inView(point: NSPoint, frame: NSRect, view: NSView): NSPathComponentCell;
  mouseEntered_withFrame_inView(event: NSEvent, frame: NSRect, view: NSView): void;
  mouseExited_withFrame_inView(event: NSEvent, frame: NSRect, view: NSView): void;

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

}

