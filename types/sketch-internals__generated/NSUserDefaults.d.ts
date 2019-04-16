interface NSUserDefaultsUninitialized<InitializedType = NSUserDefaults> extends NSObjectUninitialized<NSUserDefaults> {
  init(): InitializedType;
  initWithSuiteName(suitename: NSString | string | null): InitializedType;
  initWithUser(username: NSString | string): InitializedType;
}
interface NSUserDefaults extends NSObject {
  objectForKey(defaultName: NSString | string): any;
  setObject_forKey(value: any | null, defaultName: NSString | string): void;
  removeObjectForKey(defaultName: NSString | string): void;
  stringForKey(defaultName: NSString | string): NSString;
  arrayForKey(defaultName: NSString | string): NSArray<any>;
  dictionaryForKey(defaultName: NSString | string): NSDictionary<any, any>;
  dataForKey(defaultName: NSString | string): NSData;
  stringArrayForKey(defaultName: NSString | string): NSArray<any>;
  integerForKey(defaultName: NSString | string): NSInteger;
  floatForKey(defaultName: NSString | string): number;
  doubleForKey(defaultName: NSString | string): number;
  boolForKey(defaultName: NSString | string): boolean;
  URLForKey(defaultName: NSString | string): NSURL;
  setInteger_forKey(value: NSInteger, defaultName: NSString | string): void;
  setFloat_forKey(value: number, defaultName: NSString | string): void;
  setDouble_forKey(value: number, defaultName: NSString | string): void;
  setBool_forKey(value: boolean, defaultName: NSString | string): void;
  setURL_forKey(url: NSURL | null, defaultName: NSString | string): void;
  registerDefaults(registrationDictionary: NSDictionary<any, any> | {[key: string]: any}): void;
  addSuiteNamed(suiteName: NSString | string): void;
  removeSuiteNamed(suiteName: NSString | string): void;
  dictionaryRepresentation(): NSDictionary<any, any>;
  volatileDomainForName(domainName: NSString | string): NSDictionary<any, any>;
  setVolatileDomain_forName(domain: NSDictionary<any, any> | {[key: string]: any}, domainName: NSString | string): void;
  removeVolatileDomainForName(domainName: NSString | string): void;
  persistentDomainNames(): NSArray<any>;
  persistentDomainForName(domainName: NSString | string): NSDictionary<any, any>;
  setPersistentDomain_forName(domain: NSDictionary<any, any> | {[key: string]: any}, domainName: NSString | string): void;
  removePersistentDomainForName(domainName: NSString | string): void;
  synchronize(): boolean;
  objectIsForcedForKey(key: NSString | string): boolean;
  objectIsForcedForKey_inDomain(key: NSString | string, domain: NSString | string): boolean;
  setColor_forKey(color: NSColor, key: NSString | string): void;
  colorForKey(key: NSString | string): NSColor;

  volatileDomainNames(): NSArray<any>;
}
declare const NSUserDefaults: {
  alloc(): NSUserDefaultsUninitialized;
  class(): NSUserDefaults;  resetStandardUserDefaults(): void;

  standardUserDefaults(): NSUserDefaults;

}

