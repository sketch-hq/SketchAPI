interface MOMethodDescriptionUninitialized<InitializedType = MOMethodDescription> extends NSObjectUninitialized<MOMethodDescription> {
  initWithSelector_typeEncoding(selector: string, typeEncoding: NSString | string): InitializedType;
}
interface MOMethodDescription extends NSObject {

  selector(): string;
  setSelector(selector: string): void;
  typeEncoding(): NSString;
  setTypeEncoding(typeEncoding: NSString | string): void;
}
declare const MOMethodDescription: {
  alloc(): MOMethodDescriptionUninitialized;
  class(): MOMethodDescription;  methodWithSelector_typeEncoding(selector: string, typeEncoding: NSString | string): MOMethodDescription;

}

