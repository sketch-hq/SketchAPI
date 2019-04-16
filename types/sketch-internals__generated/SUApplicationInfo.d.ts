interface SUApplicationInfoUninitialized<InitializedType = SUApplicationInfo> extends NSObjectUninitialized<SUApplicationInfo> {}
interface SUApplicationInfo extends NSObject {
}
declare const SUApplicationInfo: {
  alloc(): SUApplicationInfoUninitialized;
  class(): SUApplicationInfo;  isBackgroundApplication(application: NSApplication): boolean;
  bestIconForHost(host: SUHost): NSImage;

}

