interface NSSecureUnarchiveFromDataTransformerUninitialized<InitializedType = NSSecureUnarchiveFromDataTransformer> extends NSValueTransformerUninitialized<NSSecureUnarchiveFromDataTransformer> {}

interface NSSecureUnarchiveFromDataTransformer extends NSValueTransformer {
}

declare const NSSecureUnarchiveFromDataTransformer: {
  alloc(): NSSecureUnarchiveFromDataTransformerUninitialized;
  class(): NSSecureUnarchiveFromDataTransformer;
  setValueTransformer_forName(transformer: NSValueTransformer | null, name: NSValueTransformerName): void;
  valueTransformerForName(name: NSValueTransformerName): NSValueTransformer;
  valueTransformerNames(): NSArray<any>;
  transformedValueClass(): any;
  allowsReverseTransformation(): boolean;
  allowedTopLevelClasses(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

