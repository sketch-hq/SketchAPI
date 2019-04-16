declare enum NSDataWritingOptions {
  NSDataWritingAtomic = 1 << 0,
  NSDataWritingWithoutOverwriting = 1 << 1,
  NSDataWritingFileProtectionNone = 0x10000000,
  NSDataWritingFileProtectionComplete = 0x20000000,
  NSDataWritingFileProtectionCompleteUnlessOpen = 0x30000000,
  NSDataWritingFileProtectionCompleteUntilFirstUserAuthentication = 0x40000000,
  NSDataWritingFileProtectionMask = 0xf0000000,
  NSAtomicWrite,
}

