interface NSColorSpaceUninitialized<InitializedType = NSColorSpace> extends NSObjectUninitialized<NSColorSpace> {
  initWithICCProfileData(iccData: NSData): InitializedType;
  initWithColorSyncProfile(prof: void): InitializedType;
  initWithCGColorSpace(cgColorSpace: CGColorSpaceRef): InitializedType;
}
interface NSColorSpace extends NSObject, INSSecureCoding {

  ICCProfileData(): NSData;
  colorSyncProfile(): void;
  CGColorSpace(): CGColorSpaceRef;
  numberOfColorComponents(): NSInteger;
  colorSpaceModel(): NSColorSpaceModel;
  localizedName(): NSString;
}
declare const NSColorSpace: {
  alloc(): NSColorSpaceUninitialized;
  class(): NSColorSpace;  availableColorSpacesWithModel(model: NSColorSpaceModel): NSArray<any>;
  RGBColorSpaceNamed(colorSpaceName: NSString | string): NSColorSpace;
  colorSpaceForSketchColorSpace(modelColorSpace: MSColorSpace): NSColorSpace;

  sRGBColorSpace(): NSColorSpace;
  genericGamma22GrayColorSpace(): NSColorSpace;
  extendedSRGBColorSpace(): NSColorSpace;
  extendedGenericGamma22GrayColorSpace(): NSColorSpace;
  displayP3ColorSpace(): NSColorSpace;
  adobeRGB1998ColorSpace(): NSColorSpace;
  genericRGBColorSpace(): NSColorSpace;
  genericGrayColorSpace(): NSColorSpace;
  genericCMYKColorSpace(): NSColorSpace;
  deviceRGBColorSpace(): NSColorSpace;
  deviceGrayColorSpace(): NSColorSpace;
  deviceCMYKColorSpace(): NSColorSpace;

}

