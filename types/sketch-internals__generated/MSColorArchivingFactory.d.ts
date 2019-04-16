interface MSColorArchivingFactoryUninitialized<InitializedType = MSColorArchivingFactory> extends NSObjectUninitialized<MSColorArchivingFactory> {}
interface MSColorArchivingFactory extends NSObject {
}
declare const MSColorArchivingFactory: {
  alloc(): MSColorArchivingFactoryUninitialized;
  class(): MSColorArchivingFactory;  colorForEncodingColor(color: MSColor): MSColor;

}

