interface SCKShareUploadOperationUninitialized<InitializedType = SCKShareUploadOperation> extends SCKAPIOperationUninitialized<SCKShareUploadOperation> {
  initWithRequest(request: SCKShareAPIURLRequest): InitializedType;
}

interface SCKShareUploadOperation extends SCKAPIOperation, INSProgressReporting {

  dataSource(): any;
  setDataSource(dataSource: any): void;
  progress(): NSProgress;
  share(): SCKShare;
  errors(): NSArray<any>;
}

declare const SCKShareUploadOperation: {
  alloc(): SCKShareUploadOperationUninitialized;
  class(): SCKShareUploadOperation;
  clientID(): NSString;
  setClientID(clientID: NSString | string): void;
  accessInstanceVariablesDirectly(): boolean;

}

