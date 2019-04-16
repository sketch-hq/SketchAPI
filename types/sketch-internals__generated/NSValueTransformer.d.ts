interface NSValueTransformerUninitialized<InitializedType = NSValueTransformer> extends NSObjectUninitialized<NSValueTransformer> {}
interface NSValueTransformer extends NSObject {
  transformedValue(value: any | null): any;
  reverseTransformedValue(value: any | null): any;
}
declare const NSValueTransformer: {
  alloc(): NSValueTransformerUninitialized;
  class(): NSValueTransformer;  setValueTransformer_forName(transformer: NSValueTransformer | null, name: NSValueTransformerName): void;
  valueTransformerForName(name: NSValueTransformerName): NSValueTransformer;
  valueTransformerNames(): NSArray<any>;
  transformedValueClass(): any;
  allowsReverseTransformation(): boolean;

}

