interface MSSVGImageWrapperUninitialized<InitializedType = MSSVGImageWrapper> extends MSXMLElementWrapperUninitialized<MSSVGImageWrapper> {}

interface MSSVGImageWrapper extends MSXMLElementWrapper {

  externalResourcesRequired(): NSString;
  setExternalResourcesRequired(externalResourcesRequired: NSString | string): void;
  preserveAspectRatio(): NSString;
  setPreserveAspectRatio(preserveAspectRatio: NSString | string): void;
  transform(): NSString;
  setTransform(transform: NSString | string): void;
  x(): NSString;
  setX(x: NSString | string): void;
  y(): NSString;
  setY(y: NSString | string): void;
  width(): NSString;
  setWidth(width: NSString | string): void;
  height(): NSString;
  setHeight(height: NSString | string): void;
  href(): NSString;
  setHref(href: NSString | string): void;
}

declare const MSSVGImageWrapper: {
  alloc(): MSSVGImageWrapperUninitialized;
  class(): MSSVGImageWrapper;
  elementName(): NSString;
  element(): MSSVGImageWrapper;
}

