interface SUUpdatePermissionResponseUninitialized<InitializedType = SUUpdatePermissionResponse> extends NSObjectUninitialized<SUUpdatePermissionResponse> {
  initWithAutomaticUpdateChecks_sendSystemProfile(automaticUpdateChecks: boolean, sendSystemProfile: boolean): InitializedType;
}
interface SUUpdatePermissionResponse extends NSObject {

  automaticUpdateChecks(): boolean;
  sendSystemProfile(): boolean;
}
declare const SUUpdatePermissionResponse: {
  alloc(): SUUpdatePermissionResponseUninitialized;
  class(): SUUpdatePermissionResponse;
}

