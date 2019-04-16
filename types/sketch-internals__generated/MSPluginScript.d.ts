interface MSPluginScriptUninitialized<InitializedType = MSPluginScript> extends NSObjectUninitialized<MSPluginScript> {
  initWithURL_error(URL: NSURL, error: NSError): InitializedType;
  initWithString_filename(string: NSString | string, filename: NSString | string): InitializedType;
}
interface MSPluginScript extends NSObject {
  reload(): void;

  URL(): NSURL;
  filename(): NSString;
  script(): NSString;
}
declare const MSPluginScript: {
  alloc(): MSPluginScriptUninitialized;
  class(): MSPluginScript;
}

