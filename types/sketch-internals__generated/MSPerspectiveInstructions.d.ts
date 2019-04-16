interface MSPerspectiveInstructionsUninitialized<InitializedType = MSPerspectiveInstructions> extends NSObjectUninitialized<MSPerspectiveInstructions> {}
interface MSPerspectiveInstructions extends NSObject {
  applyToImage(image: CIImage): CIImage;

  rect(): NSRect;
  setRect(rect: NSRect): void;
}
declare const MSPerspectiveInstructions: {
  alloc(): MSPerspectiveInstructionsUninitialized;
  class(): MSPerspectiveInstructions;
}

