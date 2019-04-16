interface NSClassDescriptionUninitialized<InitializedType = NSClassDescription> extends NSObjectUninitialized<NSClassDescription> {}
interface NSClassDescription extends NSObject {
  inverseForRelationshipKey(relationshipKey: NSString | string): NSString;

  attributeKeys(): NSArray<any>;
  toOneRelationshipKeys(): NSArray<any>;
  toManyRelationshipKeys(): NSArray<any>;
}
declare const NSClassDescription: {
  alloc(): NSClassDescriptionUninitialized;
  class(): NSClassDescription;  registerClassDescription_forClass(description: NSClassDescription, aClass: any): void;
  invalidateClassDescriptionCache(): void;
  classDescriptionForClass(aClass: any): NSClassDescription;

}

