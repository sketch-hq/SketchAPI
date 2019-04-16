interface MSMomentUninitialized<InitializedType = MSMoment> extends NSObjectUninitialized<MSMoment> {
  initWithTitle_documentData(newTitle: NSString | string, document: MSImmutableDocumentData): InitializedType;
}
interface MSMoment extends NSObject {

  timestamp(): NSTimeInterval;
  title(): NSString;
  setTitle(title: NSString | string): void;
  document(): MSImmutableDocumentData;
  setDocument(document: MSImmutableDocumentData): void;
  adaptability(): MSMomentAdaptability;
  setAdaptability(adaptability: MSMomentAdaptability): void;
  selectedLayerIDs(): NSSet<any>;
  setSelectedLayerIDs(selectedLayerIDs: NSSet<any>): void;
  pageID(): NSString;
  setPageID(pageID: NSString | string): void;
}
declare const MSMoment: {
  alloc(): MSMomentUninitialized;
  class(): MSMoment;
}

