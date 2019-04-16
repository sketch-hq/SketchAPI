interface MSExportSheetUninitialized<InitializedType = MSExportSheet> extends CHSheetControllerUninitialized<MSExportSheet> {}
interface MSExportSheet extends CHSheetController {
  includeAllCheckboxAction(sender: any): IBAction;
  collectionView_newItemForRepresentedObject(collectionView: NSCollectionView, object: any): NSCollectionViewItem;
  validateIncludeAllSlicesCheckBox(): void;
  isItemSelectedForExport(item: any): boolean;
  toggleItemSelectedForExportState(item: any): void;

  collectionView(): NSCollectionView;
  setCollectionView(collectionView: NSCollectionView): void;
  selectedSlices(): NSMutableArray<any>;
  setSelectedSlices(selectedSlices: NSMutableArray<any> | any[]): void;
}
declare const MSExportSheet: {
  alloc(): MSExportSheetUninitialized;
  class(): MSExportSheet;
}

