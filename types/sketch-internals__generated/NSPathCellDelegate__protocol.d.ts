interface INSPathCellDelegate {
  pathCell_willDisplayOpenPanel(pathCell: NSPathCell, openPanel: NSOpenPanel): void;
  pathCell_willPopUpMenu(pathCell: NSPathCell, menu: NSMenu): void;
}

