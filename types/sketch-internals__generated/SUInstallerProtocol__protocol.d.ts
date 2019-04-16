interface ISUInstallerProtocol {
  performInitialInstallation(error: NSError): boolean;
  performFinalInstallationProgressBlock_error(cb: Block | null, error: NSError): boolean;
  canInstallSilently(): boolean;
  installationPath(): NSString;
}

