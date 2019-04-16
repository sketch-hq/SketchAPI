interface MSMirrorWindowControllerUninitialized<InitializedType = MSMirrorWindowController> extends NSWindowControllerUninitialized<MSMirrorWindowController> {}
interface MSMirrorWindowController extends NSWindowController {
  sortedArtboards(artboards: NSArray<any> | any[] | null): NSArray<any>;
  changeVisibleArtboardID(artboardID: NSString | string | null): void;
  transitionToArtboardID_animatedBy(artboardID: NSString | string, animationType: MSFlowAnimationType): void;

  viewPort(): NSRect;
  dataProvider(): MSMirrorDataProvider;
  currentDocument(): MSImmutableDocumentData;
  currentMutableDocument(): MSDocumentData;
  currentArtboardID(): NSString;
  firstArtboardID(): NSString;
  visibleArtboardID(): NSString;
  defaultArtboardID(): NSString;
  currentStartpoint(): MSImmutableArtboardGroup;
  startpoints(): NSArray<any>;
  currentURL(): NSURL;
}
declare const MSMirrorWindowController: {
  alloc(): MSMirrorWindowControllerUninitialized;
  class(): MSMirrorWindowController;  sharedController(): MSMirrorWindowController;
  show(): void;
  close(): void;

}

