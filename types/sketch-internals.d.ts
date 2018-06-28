/// <reference path="./Foundation.d.ts" />

declare const MSApplicationMetadata: {
  metadata: () => {
    appVersion: number
  }
}

interface IMSDataSupplierManager {
  registerPluginDataSupplier_withName_dataType_pluginIdentifier_commandIdentifier: (
    dynamicDataKey: INSString | string,
    dataName: INSString | string,
    dataType: 'public.text' | 'public.image',
    identifier: INSString,
    commandIdentifier: INSString
  ) => void
  deregisterDataSuppliersForPluginWithIdentifier: (
    identifier: INSString
  ) => void
  supplyData_forKey: (
    data: Array<INSString | string>,
    key: INSString | string
  ) => void
}

interface IAppController {
  dataSupplierManager: () => IMSDataSupplierManager
}

declare const AppController: {
  sharedInstance: () => IAppController
}
