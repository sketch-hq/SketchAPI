interface MSFlowMenuBuilderUninitialized<InitializedType = MSFlowMenuBuilder> extends NSObjectUninitialized<MSFlowMenuBuilder> {}
interface MSFlowMenuBuilder extends NSObject {
}
declare const MSFlowMenuBuilder: {
  alloc(): MSFlowMenuBuilderUninitialized;
  class(): MSFlowMenuBuilder;  createFlowDestinationMenuButton_document_destination_target(button: NSPopUpButton, doc: MSDocumentData, destinationID: NSString | string, target: any): void;
  menuForPages_target(pages: NSArray<any> | any[], target: any): NSMenu;

}

