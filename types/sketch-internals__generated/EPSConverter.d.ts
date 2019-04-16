interface EPSConverterUninitialized<InitializedType = EPSConverter> extends NSObjectUninitialized<EPSConverter> {}
interface EPSConverter extends NSObject {
  convertEPSAtURL_progressBlock(source: NSURL, progress: ProgressBlock): NSData;
  convertEPSData_progressBlock(data: NSData, progress: ProgressBlock): NSData;
  convertEPSAtURL_toURL_progressBlock(source: NSURL, destination: NSURL, progress: ProgressBlock): void;
}
declare const EPSConverter: {
  alloc(): EPSConverterUninitialized;
  class(): EPSConverter;
}

