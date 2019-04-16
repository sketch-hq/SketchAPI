interface SUTestApplicationDelegateUninitialized<InitializedType = SUTestApplicationDelegate> extends NSObjectUninitialized<SUTestApplicationDelegate> {}
interface SUTestApplicationDelegate extends NSObject, INSApplicationDelegate {
}
declare const SUTestApplicationDelegate: {
  alloc(): SUTestApplicationDelegateUninitialized;
  class(): SUTestApplicationDelegate;
}

