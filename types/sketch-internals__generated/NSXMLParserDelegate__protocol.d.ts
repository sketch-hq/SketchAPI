interface INSXMLParserDelegate {
  parserDidStartDocument(parser: NSXMLParser): void;
  parserDidEndDocument(parser: NSXMLParser): void;
  parser_foundNotationDeclarationWithName_publicID_systemID(parser: NSXMLParser, name: NSString | string, publicID: NSString | string | null, systemID: NSString | string | null): void;
  parser_foundUnparsedEntityDeclarationWithName_publicID_systemID_notationName(parser: NSXMLParser, name: NSString | string, publicID: NSString | string | null, systemID: NSString | string | null, notationName: NSString | string | null): void;
  parser_foundAttributeDeclarationWithName_forElement_type_defaultValue(parser: NSXMLParser, attributeName: NSString | string, elementName: NSString | string, type: NSString | string | null, defaultValue: NSString | string | null): void;
  parser_foundElementDeclarationWithName_model(parser: NSXMLParser, elementName: NSString | string, model: NSString | string): void;
  parser_foundInternalEntityDeclarationWithName_value(parser: NSXMLParser, name: NSString | string, value: NSString | string | null): void;
  parser_foundExternalEntityDeclarationWithName_publicID_systemID(parser: NSXMLParser, name: NSString | string, publicID: NSString | string | null, systemID: NSString | string | null): void;
  parser_didStartElement_namespaceURI_qualifiedName_attributes(parser: NSXMLParser, elementName: NSString | string, namespaceURI: NSString | string | null, qName: NSString | string | null, attributeDict: NSDictionary<any, any> | {[key: string]: any}): void;
  parser_didEndElement_namespaceURI_qualifiedName(parser: NSXMLParser, elementName: NSString | string, namespaceURI: NSString | string | null, qName: NSString | string | null): void;
  parser_didStartMappingPrefix_toURI(parser: NSXMLParser, prefix: NSString | string, namespaceURI: NSString | string): void;
  parser_didEndMappingPrefix(parser: NSXMLParser, prefix: NSString | string): void;
  parser_foundCharacters(parser: NSXMLParser, string: NSString | string): void;
  parser_foundIgnorableWhitespace(parser: NSXMLParser, whitespaceString: NSString | string): void;
  parser_foundProcessingInstructionWithTarget_data(parser: NSXMLParser, target: NSString | string, data: NSString | string | null): void;
  parser_foundComment(parser: NSXMLParser, comment: NSString | string): void;
  parser_foundCDATA(parser: NSXMLParser, CDATABlock: NSData): void;
  parser_resolveExternalEntityName_systemID(parser: NSXMLParser, name: NSString | string, systemID: NSString | string | null): NSData;
  parser_parseErrorOccurred(parser: NSXMLParser, parseError: NSError): void;
  parser_validationErrorOccurred(parser: NSXMLParser, validationError: NSError): void;
}

