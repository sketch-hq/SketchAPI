interface MSSVGfeFilterPrimitiveUninitialized<InitializedType = MSSVGfeFilterPrimitive> extends MSXMLElementWrapperUninitialized<MSSVGfeFilterPrimitive> {}

interface MSSVGfeFilterPrimitive extends MSXMLElementWrapper {

  result(): NSString;
  setResult(result: NSString | string): void;
}

declare const MSSVGfeFilterPrimitive: {
  alloc(): MSSVGfeFilterPrimitiveUninitialized;
  class(): MSSVGfeFilterPrimitive;
  filter(): MSSVGfeFilterPrimitive;
  elementName(): NSString;
  element(): MSSVGfeFilterPrimitive;
}

