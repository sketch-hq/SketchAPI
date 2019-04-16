interface IBCLicense {
  saveToURL_error(URL: NSURL, error: NSError): boolean;
  log(): void;

  licenseID(): NSString;
  email(): NSString;
  deviceID(): NSString;
  networkTime(): BCNetworkTime;
  isValid(): boolean;
  type(): BCLicenseType;
  remainingTimeInterval(): NSTimeInterval;
  shouldRefresh(): boolean;
  requiresRefresh(): boolean;
  shouldTryToRequestNewTrialLicense(): boolean;
  isAboutToExpire(): boolean;
  updateExpirationDate(): NSDate;
  updatesHaveExpired(): boolean;
  variants(): NSArray<any>;
}

