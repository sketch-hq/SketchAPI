declare enum NSStreamEvent {
  NSStreamEventNone = 0,
  NSStreamEventOpenCompleted = 1 << 0,
  NSStreamEventHasBytesAvailable = 1 << 1,
  NSStreamEventHasSpaceAvailable = 1 << 2,
  NSStreamEventErrorOccurred = 1 << 3,
  NSStreamEventEndEncountered = 1 << 4,
}

