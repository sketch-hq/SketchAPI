interface ISUInstallerProtocol {
  performInitialInstallation(error: MOPointer<NSError>): boolean;
  performFinalInstallationProgressBlock_error(cb: Block | null, error: MOPointer<NSError>): boolean;
  canInstallSilently(): boolean;
  installationPath(): NSString;
}

