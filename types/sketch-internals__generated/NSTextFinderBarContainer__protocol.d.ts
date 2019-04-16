interface INSTextFinderBarContainer {
  findBarViewDidChangeHeight(): void;
  contentView(): NSView;

  findBarView(): NSView;
  setFindBarView(findBarView: NSView): void;
  findBarVisible(): boolean;
  setFindBarVisible(findBarVisible: boolean): void;
}

