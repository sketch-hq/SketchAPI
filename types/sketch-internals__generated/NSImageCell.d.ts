interface NSImageCellUninitialized<InitializedType = NSImageCell> extends NSCellUninitialized<NSImageCell> {}
interface NSImageCell extends NSCell, INSCopying, INSCoding {

  imageAlignment(): NSImageAlignment;
  setImageAlignment(imageAlignment: NSImageAlignment): void;
  imageScaling(): NSImageScaling;
  setImageScaling(imageScaling: NSImageScaling): void;
  imageFrameStyle(): NSImageFrameStyle;
  setImageFrameStyle(imageFrameStyle: NSImageFrameStyle): void;
}
declare const NSImageCell: {
  alloc(): NSImageCellUninitialized;
  class(): NSImageCell;
}

