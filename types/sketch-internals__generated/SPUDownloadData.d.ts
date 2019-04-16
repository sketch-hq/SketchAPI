interface SPUDownloadDataUninitialized<InitializedType = SPUDownloadData> extends NSObjectUninitialized<SPUDownloadData> {
  initWithData_textEncodingName_MIMEType(data: NSData, textEncodingName: NSString | string, MIMEType: NSString | string): InitializedType;
}
interface SPUDownloadData extends NSObject, INSSecureCoding {

  data(): NSData;
  textEncodingName(): NSString;
  MIMEType(): NSString;
}
declare const SPUDownloadData: {
  alloc(): SPUDownloadDataUninitialized;
  class(): SPUDownloadData;
}

