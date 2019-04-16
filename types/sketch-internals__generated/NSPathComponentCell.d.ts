interface NSPathComponentCellUninitialized<InitializedType = NSPathComponentCell> extends NSTextFieldCellUninitialized<NSPathComponentCell> {}
interface NSPathComponentCell extends NSTextFieldCell {

  image(): NSImage;
  setImage(image: NSImage): void;
  URL(): NSURL;
  setURL(URL: NSURL): void;
}
declare const NSPathComponentCell: {
  alloc(): NSPathComponentCellUninitialized;
  class(): NSPathComponentCell;
}

