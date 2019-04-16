interface SUPlainInstallerUninitialized<InitializedType = SUPlainInstaller> extends NSObjectUninitialized<SUPlainInstaller> {
  initWithHost_bundlePath_installationPath_fileOperationToolPath(host: SUHost, bundlePath: NSString | string, installationPath: NSString | string, fileOperationToolPath: NSString | string): InitializedType;
}
interface SUPlainInstaller extends NSObject, ISUInstallerProtocol {
}
declare const SUPlainInstaller: {
  alloc(): SUPlainInstallerUninitialized;
  class(): SUPlainInstaller;
}

