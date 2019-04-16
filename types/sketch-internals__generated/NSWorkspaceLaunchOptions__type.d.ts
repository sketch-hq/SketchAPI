declare enum NSWorkspaceLaunchOptions {
  NSWorkspaceLaunchAndPrint = 0x00000002,
  NSWorkspaceLaunchWithErrorPresentation = 0x00000040,
  NSWorkspaceLaunchInhibitingBackgroundOnly = 0x00000080,
  NSWorkspaceLaunchWithoutAddingToRecents = 0x00000100,
  NSWorkspaceLaunchWithoutActivation = 0x00000200,
  NSWorkspaceLaunchAsync = 0x00010000,
  NSWorkspaceLaunchNewInstance = 0x00080000,
  NSWorkspaceLaunchAndHide = 0x00100000,
  NSWorkspaceLaunchAndHideOthers = 0x00200000,
  NSWorkspaceLaunchDefault,
  NSWorkspaceLaunchAllowingClassicStartup = 0x00020000,
  NSWorkspaceLaunchPreferringClassic = 0x00040000,
}

