declare enum NSByteCountFormatterUnits {
  NSByteCountFormatterUseDefault = 0,
  NSByteCountFormatterUseBytes = 1 << 0,
  NSByteCountFormatterUseKB = 1 << 1,
  NSByteCountFormatterUseMB = 1 << 2,
  NSByteCountFormatterUseGB = 1 << 3,
  NSByteCountFormatterUseTB = 1 << 4,
  NSByteCountFormatterUsePB = 1 << 5,
  NSByteCountFormatterUseEB = 1 << 6,
  NSByteCountFormatterUseZB = 1 << 7,
  NSByteCountFormatterUseYBOrHigher = 0x0FF << 8,
  NSByteCountFormatterUseAll = 0x0FFFF,
}

