interface NSTextFinderUninitialized<InitializedType = NSTextFinder> extends NSObjectUninitialized<NSTextFinder> {
  init(): InitializedType;
  initWithCoder(decoder: NSCoder): InitializedType;
}
interface NSTextFinder extends NSObject, INSCoding {
  performAction(op: NSTextFinderAction): void;
  validateAction(op: NSTextFinderAction): boolean;
  cancelFindIndicator(): void;
  noteClientStringWillChange(): void;

  client(): any;
  setClient(client: any): void;
  findBarContainer(): any;
  setFindBarContainer(findBarContainer: any): void;
  findIndicatorNeedsUpdate(): boolean;
  setFindIndicatorNeedsUpdate(findIndicatorNeedsUpdate: boolean): void;
  incrementalSearchingEnabled(): boolean;
  setIncrementalSearchingEnabled(incrementalSearchingEnabled: boolean): void;
  incrementalSearchingShouldDimContentView(): boolean;
  setIncrementalSearchingShouldDimContentView(incrementalSearchingShouldDimContentView: boolean): void;
  incrementalMatchRanges(): NSArray<any>;
}
declare const NSTextFinder: {
  alloc(): NSTextFinderUninitialized;
  class(): NSTextFinder;  drawIncrementalMatchHighlightInRect(rect: NSRect): void;

}

