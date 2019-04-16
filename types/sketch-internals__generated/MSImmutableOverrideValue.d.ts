interface MSImmutableOverrideValueUninitialized<InitializedType = MSImmutableOverrideValue> extends _MSImmutableOverrideValueUninitialized<MSImmutableOverrideValue> {
  initWithName_value(name: NSString | string, value: NSObject): InitializedType;
}
interface MSImmutableOverrideValue extends _MSImmutableOverrideValue {

  attributeName(): NSString;
  path(): NSString;
  isValid(): boolean;
}
declare const MSImmutableOverrideValue: {
  alloc(): MSImmutableOverrideValueUninitialized;
  class(): MSImmutableOverrideValue;  overrideValuesFromDictionary(dict: NSDictionary<any, any> | {[key: string]: any} | null): NSArray<any>;
  dictionaryFromOverrideValues(overrideValues: NSArray<any> | any[] | null): NSDictionary<any, any>;

}

