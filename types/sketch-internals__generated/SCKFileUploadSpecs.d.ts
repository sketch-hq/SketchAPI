interface SCKFileUploadSpecsUninitialized<InitializedType = SCKFileUploadSpecs> extends NSObjectUninitialized<SCKFileUploadSpecs> {
  initWithDictionary(dictionary: NSDictionary<any, any> | {[key: string]: any} | null): InitializedType;
}
interface SCKFileUploadSpecs extends NSObject {

  fileHash(): NSString;
  uploadURL(): NSURL;
}
declare const SCKFileUploadSpecs: {
  alloc(): SCKFileUploadSpecsUninitialized;
  class(): SCKFileUploadSpecs;
}

