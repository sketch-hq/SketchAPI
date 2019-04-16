interface INSImageDelegate {
  imageDidNotDraw_inRect(sender: NSImage, rect: NSRect): NSImage;
  image_willLoadRepresentation(image: NSImage, rep: NSImageRep): void;
  image_didLoadRepresentationHeader(image: NSImage, rep: NSImageRep): void;
  image_didLoadPartOfRepresentation_withValidRows(image: NSImage, rep: NSImageRep, rows: NSInteger): void;
  image_didLoadRepresentation_withStatus(image: NSImage, rep: NSImageRep, status: NSImageLoadStatus): void;
}

