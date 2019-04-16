interface SCKRestAPIOperationUninitialized<InitializedType = SCKRestAPIOperation> extends SCKAPIOperationUninitialized<SCKRestAPIOperation> {}

interface SCKRestAPIOperation extends SCKAPIOperation {
  processData_response_error(data: NSData | null, response: NSHTTPURLResponse | null, error: NSError | null): void;

  result(): NSArray<any>;
}

declare const SCKRestAPIOperation: {
  alloc(): SCKRestAPIOperationUninitialized;
  class(): SCKRestAPIOperation;
  executeRequest_completionHandler(request: SCKAPIURLRequest, handler: Block): void;
  clientID(): NSString;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setClientID(clientID: NSString | string): void;
  accessInstanceVariablesDirectly(): boolean;

}

