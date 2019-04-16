interface NSRulerMarkerUninitialized<InitializedType = NSRulerMarker> extends NSObjectUninitialized<NSRulerMarker> {
  initWithRulerView_markerLocation_image_imageOrigin(ruler: NSRulerView, location: CGFloat, image: NSImage, imageOrigin: NSPoint): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
}
interface NSRulerMarker extends NSObject, INSCopying, INSCoding {
  drawRect(rect: NSRect): void;
  trackMouse_adding(mouseDownEvent: NSEvent, isAdding: boolean): boolean;

  ruler(): NSRulerView;
  markerLocation(): CGFloat;
  setMarkerLocation(markerLocation: CGFloat): void;
  image(): NSImage;
  setImage(image: NSImage): void;
  imageOrigin(): NSPoint;
  setImageOrigin(imageOrigin: NSPoint): void;
  movable(): boolean;
  setMovable(movable: boolean): void;
  removable(): boolean;
  setRemovable(removable: boolean): void;
  dragging(): boolean;
  representedObject(): any;
  setRepresentedObject(representedObject: any): void;
  imageRectInRuler(): NSRect;
  thicknessRequiredInRuler(): CGFloat;
}
declare const NSRulerMarker: {
  alloc(): NSRulerMarkerUninitialized;
  class(): NSRulerMarker;
}

