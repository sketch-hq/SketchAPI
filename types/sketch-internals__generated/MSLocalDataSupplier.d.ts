interface MSLocalDataSupplierUninitialized<InitializedType = MSLocalDataSupplier> extends MSDataSupplierUninitialized<MSLocalDataSupplier> {
  initWithFileSystemURL(fsURL: NSURL): InitializedType;
}
interface MSLocalDataSupplier extends MSDataSupplier {

  dataSource(): NSURL;
}
declare const MSLocalDataSupplier: {
  alloc(): MSLocalDataSupplierUninitialized;
  class(): MSLocalDataSupplier;  textDataFromFileURL(fileURL: NSURL): NSArray<any>;
  imageFileNamesFromFolderURL(folderURL: NSURL): NSArray<any>;

}

