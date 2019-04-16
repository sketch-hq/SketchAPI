declare enum NSImageRepLoadStatus {
  NSImageRepLoadStatusUnknownType = -1,
  NSImageRepLoadStatusReadingHeader = -2,
  NSImageRepLoadStatusWillNeedAllData = -3,
  NSImageRepLoadStatusInvalidData = -4,
  NSImageRepLoadStatusUnexpectedEOF = -5,
  NSImageRepLoadStatusCompleted = -6,
}

