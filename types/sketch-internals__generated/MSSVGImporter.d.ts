interface MSSVGImporterUninitialized<InitializedType = MSSVGImporter> extends NSObjectUninitialized<MSSVGImporter> {}
interface MSSVGImporter extends NSObject, IMSImporter {
  importAsLayer(): MSLayer;
  prepareToImportFromXMLString(xmlString: NSString | string): NSUInteger;
}
declare const MSSVGImporter: {
  alloc(): MSSVGImporterUninitialized;
  class(): MSSVGImporter;  svgImporter(): MSSVGImporter;

}

