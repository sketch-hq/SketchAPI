interface NSUserInterfaceCompressionOptionsUninitialized<InitializedType = NSUserInterfaceCompressionOptions> extends NSObjectUninitialized<NSUserInterfaceCompressionOptions> {
  init(): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
  initWithIdentifier(identifier: NSString | string): InitializedType;
  initWithCompressionOptions(options: NSSet<any>): InitializedType;
}
interface NSUserInterfaceCompressionOptions extends NSObject, INSCopying, INSCoding {
  containsOptions(options: NSUserInterfaceCompressionOptions): boolean;
  intersectsOptions(options: NSUserInterfaceCompressionOptions): boolean;
  optionsByAddingOptions(options: NSUserInterfaceCompressionOptions): NSUserInterfaceCompressionOptions;
  optionsByRemovingOptions(options: NSUserInterfaceCompressionOptions): NSUserInterfaceCompressionOptions;

  empty(): boolean;
}
declare const NSUserInterfaceCompressionOptions: {
  alloc(): NSUserInterfaceCompressionOptionsUninitialized;
  class(): NSUserInterfaceCompressionOptions;
  hideImagesOption(): NSUserInterfaceCompressionOptions;
  hideTextOption(): NSUserInterfaceCompressionOptions;
  reduceMetricsOption(): NSUserInterfaceCompressionOptions;
  breakEqualWidthsOption(): NSUserInterfaceCompressionOptions;
  standardOptions(): NSUserInterfaceCompressionOptions;

}

