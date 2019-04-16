interface ObjectUninitialized<InitializedType = Object> {
  initialize(): InitializedType;
  init(): InitializedType;
}

interface Object {
  free(): any;
  copy(): any;
  copyFromZone(zone: void): any;
  zone(): void;
  class(): any;
  superclass(): any;
  name(): string;
  self(): any;
  hash(): number;
  isEqualanObject(): boolean;
  isKindOfaClassObject(): boolean;
  isMemberOfaClassObject(): boolean;
  isKindOfClassNamed(aClassName: string): boolean;
  isMemberOfClassNamed(aClassName: string): boolean;
  respondsTo(aSelector: string): boolean;
  descriptionForMethod(aSel: string): objc_method_description;
  methodFor(aSelector: string): IMP;
  perform(aSelector: string): any;
  perform_withanObject(aSelector: string): any;
  subclassResponsibility(aSelector: string): any;
  notImplemented(aSelector: string): any;
  doesNotRecognize(aSelector: string): any;
  error(aString: string, ...args: any[]): any;
  printForDebugger(stream: void): void;
  awake(): any;
  write(stream: void): any;
  read(stream: void): any;
  forward_(sel: string, args: marg_list): any;
  performv_(sel: string, args: marg_list): any;
  startArchiving(stream: void): any;
  finishUnarchiving(): any;
}

declare const Object: {
  alloc(): ObjectUninitialized;
  class(): Object;
  new(): any;
  alloc(): any;
  allocFromZone(zone: void): any;
  instancesRespondTo(aSelector: string): boolean;
  conformsTo(aProtocolObject: Protocol): boolean;
  descriptionForInstanceMethod(aSel: string): objc_method_description;
  instanceMethodFor(aSelector: string): IMP;
  poseAsaClassObject(): any;
  version(): number;
  setVersion(aVersion: number): any;
  finishLoading(header: mach_header): any;
  startUnloading(): any;
}

