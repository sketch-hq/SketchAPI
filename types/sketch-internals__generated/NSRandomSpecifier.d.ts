interface NSRandomSpecifierUninitialized<InitializedType = NSRandomSpecifier> extends NSScriptObjectSpecifierUninitialized<NSRandomSpecifier> {}

interface NSRandomSpecifier extends NSScriptObjectSpecifier {
}

declare const NSRandomSpecifier: {
  alloc(): NSRandomSpecifierUninitialized;
  class(): NSRandomSpecifier;
  objectSpecifierWithDescriptor(descriptor: NSAppleEventDescriptor): NSScriptObjectSpecifier;
  accessInstanceVariablesDirectly(): boolean;

}

