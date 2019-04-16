interface SUPackageInstallerUninitialized<InitializedType = SUPackageInstaller> extends NSObjectUninitialized<SUPackageInstaller> {
  initWithPackagePath_installationPath(packagePath: NSString | string, installationPath: NSString | string): InitializedType;
}
interface SUPackageInstaller extends NSObject, ISUInstallerProtocol {
}
declare const SUPackageInstaller: {
  alloc(): SUPackageInstallerUninitialized;
  class(): SUPackageInstaller;
}

