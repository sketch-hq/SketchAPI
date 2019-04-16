interface IMSColorInspectorImageDataControllerDelegate {
  imageDataController_didChooseDataSupplier(controller: MSColorInspectorImageDataController, dataSupplier: MSDataSupplier): void;
  imageDataControllerDidRefreshData(controller: MSColorInspectorImageDataController): void;
  imageDataControllerDidClearData(controller: MSColorInspectorImageDataController): void;
  imageDataControllerMenuDidClose(controller: MSColorInspectorImageDataController): void;
  usableSupplierIdentifiers(): NSArray<any>;

  dataSupplierManager(): MSDataSupplierManager;
}

