interface NSDictionaryControllerUninitialized<InitializedType = NSDictionaryController> extends NSArrayControllerUninitialized<NSDictionaryController> {}

interface NSDictionaryController extends NSArrayController {
  newObject(): NSDictionaryControllerKeyValuePair;

  initialKey(): NSString;
  setInitialKey(initialKey: NSString | string): void;
  initialValue(): any;
  setInitialValue(initialValue: any): void;
  includedKeys(): NSArray<any>;
  setIncludedKeys(includedKeys: NSArray<any> | any[]): void;
  excludedKeys(): NSArray<any>;
  setExcludedKeys(excludedKeys: NSArray<any> | any[]): void;
  localizedKeyDictionary(): NSDictionary<any, any>;
  setLocalizedKeyDictionary(localizedKeyDictionary: NSDictionary<any, any> | {[key: string]: any}): void;
  localizedKeyTable(): NSString;
  setLocalizedKeyTable(localizedKeyTable: NSString | string): void;
}

declare const NSDictionaryController: {
  alloc(): NSDictionaryControllerUninitialized;
  class(): NSDictionaryController;
}

