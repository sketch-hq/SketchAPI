interface BCMagicWandUninitialized<InitializedType = BCMagicWand> extends NSOperationUninitialized<BCMagicWand> {}

interface BCMagicWand extends NSOperation {

  startPoint(): NSPoint;
  setStartPoint(startPoint: NSPoint): void;
  tolerance(): number;
  setTolerance(tolerance: number): void;
  bitmap(): NSBitmapImageRep;
  setBitmap(bitmap: NSBitmapImageRep): void;
}

declare const BCMagicWand: {
  alloc(): BCMagicWandUninitialized;
  class(): BCMagicWand;
  accessInstanceVariablesDirectly(): boolean;

}

