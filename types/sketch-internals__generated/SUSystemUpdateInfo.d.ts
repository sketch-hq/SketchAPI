interface SUSystemUpdateInfoUninitialized<InitializedType = SUSystemUpdateInfo> extends NSObjectUninitialized<SUSystemUpdateInfo> {}
interface SUSystemUpdateInfo extends NSObject {
}
declare const SUSystemUpdateInfo: {
  alloc(): SUSystemUpdateInfoUninitialized;
  class(): SUSystemUpdateInfo;  systemAllowsAutomaticUpdatesForHost(host: SUHost): boolean;

}

