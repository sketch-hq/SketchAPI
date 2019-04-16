interface SVGImporterUninitialized<InitializedType = SVGImporter> extends NSObjectUninitialized<SVGImporter> {
  initWithURL(url: NSURL): InitializedType;
  initWithData(data: NSData): InitializedType;
  initWithXMLString(string: NSString | string): InitializedType;
}

interface SVGImporter extends NSObject {
  importObjectGraph(): SVGElement;
  addedDrawableElement(element: SVGDrawableElement): void;
  drawableElementCount(): NSUInteger;
  elementOfType_xml_parent(type: NSString | string, xml: NSXMLElement, parent: SVGElement): SVGElement;
  registerElementWithIdentifier_type_element(identifier: NSString | string, type: NSString | string, element: SVGElement): void;
  addReferenceToIdentifier_type_target_property(identifier: NSString | string, type: NSString | string, target: any, property: NSString | string): void;
  relativeURLForLink(link: NSString | string): NSURL;
  registerStylesheet(stylesheet: NSString | string): void;
  styleAttributesForElement_defaults(xml: NSXMLElement, defaults: NSDictionary<any, any> | {[key: string]: any}): NSDictionary<any, any>;

  documentWidth(): CGFloat;
  documentHeight(): CGFloat;
  scaleValue(): CGFloat;
  setScaleValue(scaleValue: CGFloat): void;
}

declare const SVGImporter: {
  alloc(): SVGImporterUninitialized;
  class(): SVGImporter;
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  accessInstanceVariablesDirectly(): boolean;

}

