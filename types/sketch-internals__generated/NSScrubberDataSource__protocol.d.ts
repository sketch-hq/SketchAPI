interface INSScrubberDataSource {
  numberOfItemsForScrubber(scrubber: NSScrubber): NSInteger;
  scrubber_viewForItemAtIndex(scrubber: NSScrubber, index: NSInteger): NSScrubberItemView;
}

