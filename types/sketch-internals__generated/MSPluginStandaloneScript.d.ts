interface MSPluginStandaloneScriptUninitialized<InitializedType = MSPluginStandaloneScript> extends MSPluginScriptUninitialized<MSPluginStandaloneScript> {}
interface MSPluginStandaloneScript extends MSPluginScript {

  rawScript(): NSString;
  handler(): NSString;
}
declare const MSPluginStandaloneScript: {
  alloc(): MSPluginStandaloneScriptUninitialized;
  class(): MSPluginStandaloneScript;  wrappedScript_handler(script: NSString | string, handler: NSString | string): NSString;

}

