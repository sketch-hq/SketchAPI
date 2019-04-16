interface IMSThemeCacheableResource {

  themeCachingKey(): NSString;
  setThemeCachingKey(themeCachingKey: NSString | string): void;
}

