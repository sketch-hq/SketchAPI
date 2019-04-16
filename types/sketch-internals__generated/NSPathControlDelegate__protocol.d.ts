interface INSPathControlDelegate {
  pathControl_shouldDragItem_withPasteboard(pathControl: NSPathControl, pathItem: NSPathControlItem, pasteboard: NSPasteboard): boolean;
  pathControl_shouldDragPathComponentCell_withPasteboard(pathControl: NSPathControl, pathComponentCell: NSPathComponentCell, pasteboard: NSPasteboard): boolean;
  pathControl_validateDrop(pathControl: NSPathControl, info: any): NSDragOperation;
  pathControl_acceptDrop(pathControl: NSPathControl, info: any): boolean;
  pathControl_willDisplayOpenPanel(pathControl: NSPathControl, openPanel: NSOpenPanel): void;
  pathControl_willPopUpMenu(pathControl: NSPathControl, menu: NSMenu): void;
}

