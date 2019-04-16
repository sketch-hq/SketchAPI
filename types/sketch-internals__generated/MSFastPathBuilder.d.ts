interface MSFastPathBuilderUninitialized<InitializedType = MSFastPathBuilder> extends NSObjectUninitialized<MSFastPathBuilder> {}
interface MSFastPathBuilder extends NSObject {
}
declare const MSFastPathBuilder: {
  alloc(): MSFastPathBuilderUninitialized;
  class(): MSFastPathBuilder;  pathForMaskImage(maskImage: NSBitmapImageRep): NSBezierPath;

}

