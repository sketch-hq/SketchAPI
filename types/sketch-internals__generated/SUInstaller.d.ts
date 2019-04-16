interface SUInstallerUninitialized<InitializedType = SUInstaller> extends NSObjectUninitialized<SUInstaller> {}
interface SUInstaller extends NSObject {
}
declare const SUInstaller: {
  alloc(): SUInstallerUninitialized;
  class(): SUInstaller;  installerForHost_fileOperationToolPath_updateDirectory_error(host: SUHost, fileOperationToolPath: NSString | string, updateDirectory: NSString | string, error: NSError): any;
  installSourcePathInUpdateFolder_forHost_isPackage_isGuided(inUpdateFolder: NSString | string, host: SUHost, isPackagePtr: boolean, isGuidedPtr: boolean | null): NSString;

}

