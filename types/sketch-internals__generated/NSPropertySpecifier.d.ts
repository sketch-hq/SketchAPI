interface NSPropertySpecifierUninitialized<InitializedType = NSPropertySpecifier> extends NSScriptObjectSpecifierUninitialized<NSPropertySpecifier> {}
interface NSPropertySpecifier extends NSScriptObjectSpecifier {
}
declare const NSPropertySpecifier: {
  alloc(): NSPropertySpecifierUninitialized;
  class(): NSPropertySpecifier;
}

