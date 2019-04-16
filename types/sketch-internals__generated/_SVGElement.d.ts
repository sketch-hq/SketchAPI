interface _SVGElementUninitialized<InitializedType = _SVGElement> extends NSObjectUninitialized<_SVGElement> {}
interface _SVGElement extends NSObject {
  primitiveAddChildrenObject(object: any): void;
  primitiveRemoveChildrenObject(object: any): void;
  primitiveAddLinkedObject(object: any): void;
  primitiveRemoveLinkedObject(object: any): void;
  primitiveSetParent(parent: any): void;

  desc(): NSString;
  setDesc(desc: NSString | string): void;
  identifier(): NSString;
  setIdentifier(identifier: NSString | string): void;
  index(): number;
  setIndex(index: number): void;
  title(): NSString;
  setTitle(title: NSString | string): void;
  type(): NSString;
  setType(type: NSString | string): void;
  children(): NSSet<any>;
  setChildren(children: NSSet<any>): void;
  linked(): NSSet<any>;
  setLinked(linked: NSSet<any>): void;
  parent(): SVGElement;
  setParent(parent: SVGElement): void;
}
declare const _SVGElement: {
  alloc(): _SVGElementUninitialized;
  class(): _SVGElement;  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;

}

