interface SVGTransformImporterUninitialized<InitializedType = SVGTransformImporter> extends NSObjectUninitialized<SVGTransformImporter> {}
interface SVGTransformImporter extends NSObject {
}
declare const SVGTransformImporter: {
  alloc(): SVGTransformImporterUninitialized;
  class(): SVGTransformImporter;  transformFromString(aString: NSString | string): NSAffineTransform;
  transformFromName_components(name: NSString | string, paramString: NSString | string): NSAffineTransform;
  translateTransformFromComponents(params: NSArray<any> | any[]): NSAffineTransform;
  rotateTransformFromComponents(params: NSArray<any> | any[]): NSAffineTransform;
  matrixTransformFromComponents(params: NSArray<any> | any[]): NSAffineTransform;

}

