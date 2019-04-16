interface NSAppleScriptUninitialized<InitializedType = NSAppleScript> extends NSObjectUninitialized<NSAppleScript> {
  initWithContentsOfURL_error(url: NSURL, errorInfo: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
  initWithSource(source: NSString | string): InitializedType;
}
interface NSAppleScript extends NSObject, INSCopying {
  compileAndReturnError(errorInfo: NSDictionary<any, any> | {[key: string]: any}): boolean;
  executeAndReturnError(errorInfo: NSDictionary<any, any> | {[key: string]: any}): NSAppleEventDescriptor;
  executeAppleEvent_error(event: NSAppleEventDescriptor, errorInfo: NSDictionary<any, any> | {[key: string]: any}): NSAppleEventDescriptor;

  source(): NSString;
  compiled(): boolean;
  richTextSource(): NSAttributedString;
}
declare const NSAppleScript: {
  alloc(): NSAppleScriptUninitialized;
  class(): NSAppleScript;
}

