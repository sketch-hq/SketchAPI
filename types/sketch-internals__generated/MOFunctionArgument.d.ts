interface MOFunctionArgumentUninitialized<InitializedType = MOFunctionArgument> extends NSObjectUninitialized<MOFunctionArgument> {}

interface MOFunctionArgument extends NSObject {
  setTypeEncoding_withCustomStorage(typeEncoding: string, storagePtr: void): void;
  setPointerTypeEncoding_withCustomStorage(pointerTypeEncoding: NSString | string, storagePtr: void): void;
  setStructureTypeEncoding_withCustomStorage(structureTypeEncoding: NSString | string, storagePtr: void): void;
  getValueAsJSValueInContext(ctx: JSContextRef): JSValueRef;
  setValueAsJSValue_context(value: JSValueRef, ctx: JSContextRef): void;
  getValueAsJSValueInContext_dereference(ctx: JSContextRef, dereference: boolean): JSValueRef;
  setValueAsJSValue_context_dereference(value: JSValueRef, ctx: JSContextRef, dereference: boolean): void;

  typeEncoding(): string;
  setTypeEncoding(typeEncoding: string): void;
  pointerTypeEncoding(): NSString;
  setPointerTypeEncoding(pointerTypeEncoding: NSString | string): void;
  structureTypeEncoding(): NSString;
  setStructureTypeEncoding(structureTypeEncoding: NSString | string): void;
  pointer(): MOPointer;
  setPointer(pointer: MOPointer): void;
  returnValue(): boolean;
  setReturnValue(returnValue: boolean): void;
  ffiType(): ffi_type;
  storage(): MOPointer<void>;
  typeDescription(): NSString;
}

declare const MOFunctionArgument: {
  alloc(): MOFunctionArgumentUninitialized;
  class(): MOFunctionArgument;
  getAlignment_ofTypeEncoding(alignment: size_t, encoding: string): boolean;
  getSize_ofTypeEncoding(size: size_t, encoding: string): boolean;
  ffiTypeForTypeEncoding(encoding: string): ffi_type;
  descriptionOfTypeEncoding(encoding: string): NSString;
  descriptionOfTypeEncoding_fullTypeEncoding(typeEncoding: string, fullTypeEncoding: NSString | string): NSString;
  sizeOfStructureTypeEncoding(encoding: NSString | string): size_t;
  structureNameFromStructureTypeEncoding(encoding: NSString | string): NSString;
  structureTypeEncodingDescription(structureTypeEncoding: NSString | string): NSString;
  structureFullTypeEncodingFromStructureTypeEncoding(encoding: NSString | string): NSString;
  structureFullTypeEncodingFromStructureName(structureName: NSString | string): NSString;
  typeEncodingsFromStructureTypeEncoding(structureTypeEncoding: NSString | string): NSArray<any>;
  typeEncodingsFromStructureTypeEncoding_parsedCount(structureTypeEncoding: NSString | string, count: NSInteger): NSArray<any>;
  fromJSValue_inContext_typeEncoding_fullTypeEncoding_storage(value: JSValueRef, ctx: JSContextRef, typeEncoding: string, fullTypeEncoding: NSString | string, ptr: void): boolean;
  toJSValue_inContext_typeEncoding_fullTypeEncoding_storage(value: JSValueRef, ctx: JSContextRef, typeEncoding: string, fullTypeEncoding: NSString | string, ptr: void): boolean;
  structureFromJSObject_inContext_inParentJSValueRef_cString_storage(object: JSObjectRef, ctx: JSContextRef, parentValue: JSValueRef, c: string, ptr: MOPointer<void>): NSInteger;
  structureToJSValue_inContext_cString_storage(value: JSValueRef, ctx: JSContextRef, c: string, ptr: MOPointer<void>): NSInteger;
  structureToJSValue_inContext_cString_storage_initialValues_initialValueCount_convertedValueCount(value: JSValueRef, ctx: JSContextRef, c: string, ptr: MOPointer<void>, initialValues: JSValueRef, initialValueCount: NSInteger, convertedValueCount: NSInteger): NSInteger;
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

