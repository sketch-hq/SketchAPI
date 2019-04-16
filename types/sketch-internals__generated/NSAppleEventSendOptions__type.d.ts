declare enum NSAppleEventSendOptions {
  NSAppleEventSendNoReply = 0x00000001,
  NSAppleEventSendQueueReply = 0x00000002,
  NSAppleEventSendWaitForReply = 0x00000003,
  NSAppleEventSendNeverInteract = 0x00000010,
  NSAppleEventSendCanInteract = 0x00000020,
  NSAppleEventSendAlwaysInteract = 0x00000030,
  NSAppleEventSendCanSwitchLayer = 0x00000040,
  NSAppleEventSendDontRecord = 0x00001000,
  NSAppleEventSendDontExecute = 0x00002000,
  NSAppleEventSendDontAnnotate = 0x00010000,
  NSAppleEventSendDefaultOptions,
}

