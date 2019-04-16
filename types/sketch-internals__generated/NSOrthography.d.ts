interface NSOrthographyUninitialized<InitializedType = NSOrthography> extends NSObjectUninitialized<NSOrthography> {
  initWithDominantScript_languageMap(script: NSString | string, map: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}
interface NSOrthography extends NSObject, INSCopying, INSSecureCoding {
  languagesForScript(script: NSString | string): NSArray<any>;
  dominantLanguageForScript(script: NSString | string): NSString;

  dominantScript(): NSString;
  languageMap(): NSDictionary<any, any>;
  dominantLanguage(): NSString;
  allScripts(): NSArray<any>;
  allLanguages(): NSArray<any>;
}
declare const NSOrthography: {
  alloc(): NSOrthographyUninitialized;
  class(): NSOrthography;  defaultOrthographyForLanguage(language: NSString | string): NSOrthography;
  orthographyWithDominantScript_languageMap(script: NSString | string, map: NSDictionary<any, any> | {[key: string]: any}): NSOrthography;

}

