interface IMSJSONArchiverAlternativeFileReference {
  encodeReferenceInJSONZipArchive(encoder: BCJSONZippedEncoder): void;

  archiveReferenceIdentifier_bc(): NSString;
}

