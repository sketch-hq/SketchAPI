interface INSUserInterfaceCompression {
  compressWithPrioritizedCompressionOptions(prioritizedOptions: NSArray<any> | any[]): void;
  minimumSizeWithPrioritizedCompressionOptions(prioritizedOptions: NSArray<any> | any[]): NSSize;

  activeCompressionOptions(): NSUserInterfaceCompressionOptions;
}

