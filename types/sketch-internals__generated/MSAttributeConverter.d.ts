interface MSAttributeConverterUninitialized<InitializedType = MSAttributeConverter> extends NSObjectUninitialized<MSAttributeConverter> {
  initWithAttributeName_block(attributeName: NSString | string, conversionBlock: MSAttributeConverterBlock): InitializedType;
}
interface MSAttributeConverter extends NSObject {
  convertAttributes(attributes: NSDictionary<any, any> | {[key: string]: any}): NSDictionary<any, any>;

  attributeName(): NSString;
  conversionBlock(): MSAttributeConverterBlock;
}
declare const MSAttributeConverter: {
  alloc(): MSAttributeConverterUninitialized;
  class(): MSAttributeConverter;  converterWithAttributeName_block(attributeName: NSString | string, conversionBlock: MSAttributeConverterBlock): MSAttributeConverter;

}

