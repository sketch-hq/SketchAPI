interface NSSpellServerUninitialized<InitializedType = NSSpellServer> extends NSObjectUninitialized<NSSpellServer> {}
interface NSSpellServer extends NSObject {
  registerLanguage_byVendor(language: NSString | string | null, vendor: NSString | string | null): boolean;
  isWordInUserDictionaries_caseSensitive(word: NSString | string, flag: boolean): boolean;
  run(): void;

  delegate(): any;
  setDelegate(delegate: any): void;
}
declare const NSSpellServer: {
  alloc(): NSSpellServerUninitialized;
  class(): NSSpellServer;
}

