interface SMKArtboardRequestUninitialized<InitializedType = SMKArtboardRequest> extends NSObjectUninitialized<SMKArtboardRequest> {
  initWithArtboardID_rect_additive_constrainedToSize_scale_type(artboardID: SCKObjectID, rect: CGRect, additive: boolean, constrainingSize: CGSize, scale: CGFloat, type: SCKFileImageType): InitializedType;
}

interface SMKArtboardRequest extends NSObject {
  squashableWithRequest(request: SMKArtboardRequest): boolean;
  squashedWithRequest(request: SMKArtboardRequest): SMKArtboardRequest;
  urlWithHost_port_token(host: NSString | string, port: NSUInteger, token: NSString | string): NSURL;

  artboardID(): SCKObjectID;
  rect(): CGRect;
  scale(): CGFloat;
  constrainingSize(): CGSize;
  isConstrained(): boolean;
  isAdditive(): boolean;
  type(): SCKFileImageType;
}

declare const SMKArtboardRequest: {
  alloc(): SMKArtboardRequestUninitialized;
  class(): SMKArtboardRequest;
  requestForArtboardID_atScale_type(artboardID: SCKObjectID, scale: CGFloat, type: SCKFileImageType): SMKArtboardRequest;
  requestForArtboardID_atScale_constrainedToSize_type(artboardID: SCKObjectID, scale: CGFloat, size: CGSize, type: SCKFileImageType): SMKArtboardRequest;
  requestForArtboardID_atScale_constrainedToSize_inRect_type(artboardID: SCKObjectID, scale: CGFloat, size: CGSize, rect: CGRect, type: SCKFileImageType): SMKArtboardRequest;
  requestForArtboardID_atScale_additiveInRect_type(artboardID: SCKObjectID, scale: CGFloat, rect: CGRect, type: SCKFileImageType): SMKArtboardRequest;
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

