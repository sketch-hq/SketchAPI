interface SCKCloudDocumentDiffUninitialized<InitializedType = SCKCloudDocumentDiff> extends SCKDocumentDiffUninitialized<SCKCloudDocumentDiff> {}

interface SCKCloudDocumentDiff extends SCKDocumentDiff {
}

declare const SCKCloudDocumentDiff: {
  alloc(): SCKCloudDocumentDiffUninitialized;
  class(): SCKCloudDocumentDiff;
}

