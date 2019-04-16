interface INSItemProviderWriting {
  itemProviderVisibilityForRepresentationWithTypeIdentifier(typeIdentifier: NSString | string): NSItemProviderRepresentationVisibility;
  loadDataWithTypeIdentifier_forItemProviderCompletionHandler(typeIdentifier: NSString | string, completionHandler: Block): NSProgress;

  writableTypeIdentifiersForItemProvider(): NSArray<any>;
}

