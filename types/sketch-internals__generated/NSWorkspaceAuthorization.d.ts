interface NSWorkspaceAuthorizationUninitialized<InitializedType = NSWorkspaceAuthorization> extends NSObjectUninitialized<NSWorkspaceAuthorization> {}
interface NSWorkspaceAuthorization extends NSObject {
}
declare const NSWorkspaceAuthorization: {
  alloc(): NSWorkspaceAuthorizationUninitialized;
  class(): NSWorkspaceAuthorization;
}

