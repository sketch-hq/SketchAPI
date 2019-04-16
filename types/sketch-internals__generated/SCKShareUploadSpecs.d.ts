interface SCKShareUploadSpecsUninitialized<InitializedType = SCKShareUploadSpecs> extends SCKShareUninitialized<SCKShareUploadSpecs> {}
interface SCKShareUploadSpecs extends SCKShare {

  cloudDocumentID(): NSString;
  fileUploadSpecs(): NSArray<any>;
}
declare const SCKShareUploadSpecs: {
  alloc(): SCKShareUploadSpecsUninitialized;
  class(): SCKShareUploadSpecs;
}

