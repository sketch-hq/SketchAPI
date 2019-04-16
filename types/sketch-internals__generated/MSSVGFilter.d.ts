interface MSSVGFilterUninitialized<InitializedType = MSSVGFilter> extends MSXMLElementWrapperUninitialized<MSSVGFilter> {}
interface MSSVGFilter extends MSXMLElementWrapper {
  addFilterItem(filterItem: NSXMLElement): void;
  addFilterOutput(string: NSString | string): void;
  close(): void;

  x(): NSString;
  setX(x: NSString | string): void;
  y(): NSString;
  setY(y: NSString | string): void;
  width(): NSString;
  setWidth(width: NSString | string): void;
  height(): NSString;
  setHeight(height: NSString | string): void;
  filterRes(): NSString;
  setFilterRes(filterRes: NSString | string): void;
  filterUnits(): NSString;
  setFilterUnits(filterUnits: NSString | string): void;
  primitiveUnits(): NSString;
  setPrimitiveUnits(primitiveUnits: NSString | string): void;
  href(): NSString;
  setHref(href: NSString | string): void;
}
declare const MSSVGFilter: {
  alloc(): MSSVGFilterUninitialized;
  class(): MSSVGFilter;  filter(): MSSVGFilter;

}

