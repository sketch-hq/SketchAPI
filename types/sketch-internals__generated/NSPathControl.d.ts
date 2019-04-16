interface NSPathControlUninitialized<InitializedType = NSPathControl> extends NSControlUninitialized<NSPathControl> {}

interface NSPathControl extends NSControl {
  setDraggingSourceOperationMask_forLocal(mask: NSDragOperation, isLocal: boolean): void;
  clickedPathComponentCell(): NSPathComponentCell;
  pathComponentCells(): NSArray<any>;
  setPathComponentCells(cells: NSArray<any> | any[]): void;

  editable(): boolean;
  setEditable(editable: boolean): void;
  allowedTypes(): NSArray<any>;
  setAllowedTypes(allowedTypes: NSArray<any> | any[]): void;
  placeholderString(): NSString;
  setPlaceholderString(placeholderString: NSString | string): void;
  placeholderAttributedString(): NSAttributedString;
  setPlaceholderAttributedString(placeholderAttributedString: NSAttributedString): void;
  URL(): NSURL;
  setURL(URL: NSURL): void;
  doubleAction(): string;
  setDoubleAction(doubleAction: string): void;
  pathStyle(): NSPathStyle;
  setPathStyle(pathStyle: NSPathStyle): void;
  clickedPathItem(): NSPathControlItem;
  pathItems(): NSArray<any>;
  setPathItems(pathItems: NSArray<any> | any[]): void;
  backgroundColor(): NSColor;
  setBackgroundColor(backgroundColor: NSColor): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  menu(): NSMenu;
  setMenu(menu: NSMenu): void;
}

declare const NSPathControl: {
  alloc(): NSPathControlUninitialized;
  class(): NSPathControl;
  inpectorBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorCheckmarkBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRectWithMaxRadius(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRect_borderRadius(rect: NSRect, borderRadius: CGFloat): NSBezierPath;
  inpectorFocusRingPathForRect(rect: NSRect): NSBezierPath;
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

