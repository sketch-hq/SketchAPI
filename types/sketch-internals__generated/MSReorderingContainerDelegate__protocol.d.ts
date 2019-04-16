interface IMSReorderingContainerDelegate {
  containerBackground_dragDidReorderChildAtIndex_toIndex(backgroundView: MSReorderingContainerView, fromIndex: NSUInteger, toIndex: NSUInteger): void;
  startingOffsetForStackingContainerBackground(backgroundView: MSReorderingContainerView): CGFloat;
  numberOfReorderableSubviewsForContainerBackground(backgroundView: MSReorderingContainerView): NSUInteger;
}

