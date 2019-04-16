interface MSColorSpaceConverterUninitialized<InitializedType = MSColorSpaceConverter> extends NSObjectUninitialized<MSColorSpaceConverter> {
  initForConversionFromColorSpace_to(oldColorSpace: MSColorSpace, targetColorSpace: MSColorSpace): InitializedType;
}
interface MSColorSpaceConverter extends NSObject, IMSColorConverter {

  oldColorSpace(): MSColorSpace;
  targetColorSpace(): MSColorSpace;
  oldNSColorSpace(): NSColorSpace;
  targetNSColorSpace(): NSColorSpace;
}
declare const MSColorSpaceConverter: {
  alloc(): MSColorSpaceConverterUninitialized;
  class(): MSColorSpaceConverter;
}

