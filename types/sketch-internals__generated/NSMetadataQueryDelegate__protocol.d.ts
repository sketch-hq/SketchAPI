interface INSMetadataQueryDelegate {
  metadataQuery_replacementObjectForResultObject(query: NSMetadataQuery, result: NSMetadataItem): any;
  metadataQuery_replacementValueForAttribute_value(query: NSMetadataQuery, attrName: NSString | string, attrValue: any): any;
}

