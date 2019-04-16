interface MSTextLayoutUninitialized<InitializedType = MSTextLayout> extends NSObjectUninitialized<MSTextLayout> {}
interface MSTextLayout extends NSObject {

  baselineOffsets(): NSArray<any>;
  lineFragmentRectangles(): NSArray<any>;
  firstBaselineOffset(): CGFloat;
  lastBaselineOffset(): CGFloat;
  lineFragmentBounds(): CGRect;
  firstLineCapOffset(): CGFloat;
}
declare const MSTextLayout: {
  alloc(): MSTextLayoutUninitialized;
  class(): MSTextLayout;  textLayoutForLayoutManager(layoutManager: NSLayoutManager): MSTextLayout;

}

