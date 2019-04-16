interface MSSVGUseWrapperUninitialized<InitializedType = MSSVGUseWrapper> extends MSXMLElementWrapperUninitialized<MSSVGUseWrapper> {}

interface MSSVGUseWrapper extends MSXMLElementWrapper {

  externalResourcesRequired(): NSString;
  setExternalResourcesRequired(externalResourcesRequired: NSString | string): void;
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

declare const MSSVGUseWrapper: {
  alloc(): MSSVGUseWrapperUninitialized;
  class(): MSSVGUseWrapper;
  elementName(): NSString;
  element(): MSSVGUseWrapper;
}

