interface INSObject {
  isEqual(object: any): boolean;
  self(): INSObject;
  performSelector(aSelector: string): any;
  performSelector_withObject(aSelector: string, object: any): any;
  performSelector_withObject_withObject(aSelector: string, object1: any, object2: any): any;
  isProxy(): boolean;
  isKindOfClass(aClass: any): boolean;
  isMemberOfClass(aClass: any): boolean;
  conformsToProtocol(aProtocol: Protocol): boolean;
  respondsToSelector(aSelector: string): boolean;

  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
}

