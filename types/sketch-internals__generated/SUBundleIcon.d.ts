interface SUBundleIconUninitialized<InitializedType = SUBundleIcon> extends NSObjectUninitialized<SUBundleIcon> {}
interface SUBundleIcon extends NSObject {
}
declare const SUBundleIcon: {
  alloc(): SUBundleIconUninitialized;
  class(): SUBundleIcon;  iconURLForHost(host: SUHost): NSURL;

}

