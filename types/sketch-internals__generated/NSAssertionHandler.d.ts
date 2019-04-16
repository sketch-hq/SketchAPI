interface NSAssertionHandlerUninitialized<InitializedType = NSAssertionHandler> extends NSObjectUninitialized<NSAssertionHandler> {}
interface NSAssertionHandler extends NSObject {
  handleFailureInMethod_object_file_lineNumber_description(selector: string, object: any, fileName: NSString | string, line: NSInteger, format: NSString | string | null, ...args: any[]): void;
  handleFailureInFunction_file_lineNumber_description(functionName: NSString | string, fileName: NSString | string, line: NSInteger, format: NSString | string | null, ...args: any[]): void;
}
declare const NSAssertionHandler: {
  alloc(): NSAssertionHandlerUninitialized;
  class(): NSAssertionHandler;
  currentHandler(): NSAssertionHandler;

}

