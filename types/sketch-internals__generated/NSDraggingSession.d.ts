interface NSDraggingSessionUninitialized<InitializedType = NSDraggingSession> extends NSObjectUninitialized<NSDraggingSession> {}
interface NSDraggingSession extends NSObject {
  enumerateDraggingItemsWithOptions_forView_classes_searchOptions_usingBlock(enumOpts: NSDraggingItemEnumerationOptions, view: NSView | null, classArray: NSArray<any> | any[], searchOptions: NSDictionary<any, any> | {[key: string]: any}, block: Block): void;

  draggingFormation(): NSDraggingFormation;
  setDraggingFormation(draggingFormation: NSDraggingFormation): void;
  animatesToStartingPositionsOnCancelOrFail(): boolean;
  setAnimatesToStartingPositionsOnCancelOrFail(animatesToStartingPositionsOnCancelOrFail: boolean): void;
  draggingLeaderIndex(): NSInteger;
  setDraggingLeaderIndex(draggingLeaderIndex: NSInteger): void;
  draggingPasteboard(): NSPasteboard;
  draggingSequenceNumber(): NSInteger;
  draggingLocation(): NSPoint;
}
declare const NSDraggingSession: {
  alloc(): NSDraggingSessionUninitialized;
  class(): NSDraggingSession;
}

