interface INSScrubberDelegate {
  scrubber_didSelectItemAtIndex(scrubber: NSScrubber, selectedIndex: NSInteger): void;
  scrubber_didHighlightItemAtIndex(scrubber: NSScrubber, highlightedIndex: NSInteger): void;
  scrubber_didChangeVisibleRange(scrubber: NSScrubber, visibleRange: NSRange): void;
  didBeginInteractingWithScrubber(scrubber: NSScrubber): void;
  didFinishInteractingWithScrubber(scrubber: NSScrubber): void;
  didCancelInteractingWithScrubber(scrubber: NSScrubber): void;
}

