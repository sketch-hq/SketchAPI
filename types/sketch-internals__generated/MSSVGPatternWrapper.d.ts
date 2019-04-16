interface MSSVGPatternWrapperUninitialized<InitializedType = MSSVGPatternWrapper> extends MSXMLElementWrapperUninitialized<MSSVGPatternWrapper> {}

interface MSSVGPatternWrapper extends MSXMLElementWrapper {

  preserveAspectRatio(): NSString;
  setPreserveAspectRatio(preserveAspectRatio: NSString | string): void;
  x(): NSString;
  setX(x: NSString | string): void;
  y(): NSString;
  setY(y: NSString | string): void;
  width(): NSString;
  setWidth(width: NSString | string): void;
  height(): NSString;
  setHeight(height: NSString | string): void;
  patternUnits(): NSString;
  setPatternUnits(patternUnits: NSString | string): void;
  patternContentUnits(): NSString;
  setPatternContentUnits(patternContentUnits: NSString | string): void;
  patternTransform(): NSString;
  setPatternTransform(patternTransform: NSString | string): void;
  href(): NSString;
  setHref(href: NSString | string): void;
}

declare const MSSVGPatternWrapper: {
  alloc(): MSSVGPatternWrapperUninitialized;
  class(): MSSVGPatternWrapper;
  elementName(): NSString;
  element(): MSSVGPatternWrapper;
}

