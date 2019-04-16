interface SUGuidedPackageInstallerUninitialized<InitializedType = SUGuidedPackageInstaller> extends NSObjectUninitialized<SUGuidedPackageInstaller> {
  initWithPackagePath_installationPath_fileOperationToolPath(packagePath: NSString | string, installationPath: NSString | string, fileOperationToolPath: NSString | string): InitializedType;
}
interface SUGuidedPackageInstaller extends NSObject, ISUInstallerProtocol {
}
declare const SUGuidedPackageInstaller: {
  alloc(): SUGuidedPackageInstallerUninitialized;
  class(): SUGuidedPackageInstaller;
}

