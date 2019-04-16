interface NSDictionaryControllerKeyValuePairUninitialized<InitializedType = NSDictionaryControllerKeyValuePair> extends NSObjectUninitialized<NSDictionaryControllerKeyValuePair> {}
interface NSDictionaryControllerKeyValuePair extends NSObject {

  key(): NSString;
  setKey(key: NSString | string): void;
  value(): any;
  setValue(value: any): void;
  localizedKey(): NSString;
  setLocalizedKey(localizedKey: NSString | string): void;
  explicitlyIncluded(): boolean;
}
declare const NSDictionaryControllerKeyValuePair: {
  alloc(): NSDictionaryControllerKeyValuePairUninitialized;
  class(): NSDictionaryControllerKeyValuePair;
}

