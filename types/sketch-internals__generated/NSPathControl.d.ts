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
}

