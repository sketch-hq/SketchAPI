interface MSSymbolMasterReferenceDescriptorUninitialized<InitializedType = MSSymbolMasterReferenceDescriptor> extends NSObjectUninitialized<MSSymbolMasterReferenceDescriptor> {}
interface MSSymbolMasterReferenceDescriptor extends NSObject, INSPasteboardWriting, INSPasteboardReading {

  libraryLocation(): NSURL;
  setLibraryLocation(libraryLocation: NSURL): void;
  symbolID(): NSString;
  setSymbolID(symbolID: NSString | string): void;
}
declare const MSSymbolMasterReferenceDescriptor: {
  alloc(): MSSymbolMasterReferenceDescriptorUninitialized;
  class(): MSSymbolMasterReferenceDescriptor;  pasteboardType(): NSString;

}

