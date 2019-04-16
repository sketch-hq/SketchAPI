interface SCKDocumentUninitialized<InitializedType = SCKDocument> extends SCKObjectUninitialized<SCKDocument> {}
interface SCKDocument extends SCKObject {
  diffComparedTo(object: SCKDocument): SCKDocumentDiff;
  isIdentityEqual(document: SCKDocument | null): boolean;

  name(): NSString;
  fileID(): NSNumber;
  pages(): NSArray<any>;
  colorSpace(): SCKColorSpace;
}
declare const SCKDocument: {
  alloc(): SCKDocumentUninitialized;
  class(): SCKDocument;
}

