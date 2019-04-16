interface NSScrubberSelectionStyleUninitialized<InitializedType = NSScrubberSelectionStyle> extends NSObjectUninitialized<NSScrubberSelectionStyle> {
  init(): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
}
interface NSScrubberSelectionStyle extends NSObject, INSCoding {
  makeSelectionView(): NSScrubberSelectionView;
}
declare const NSScrubberSelectionStyle: {
  alloc(): NSScrubberSelectionStyleUninitialized;
  class(): NSScrubberSelectionStyle;
  outlineOverlayStyle(): NSScrubberSelectionStyle;
  roundedBackgroundStyle(): NSScrubberSelectionStyle;

}

