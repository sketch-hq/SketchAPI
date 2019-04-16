declare enum NSEventPhase {
  NSEventPhaseNone = 0,
  NSEventPhaseBegan = 0x1 << 0,
  NSEventPhaseStationary = 0x1 << 1,
  NSEventPhaseChanged = 0x1 << 2,
  NSEventPhaseEnded = 0x1 << 3,
  NSEventPhaseCancelled = 0x1 << 4,
  NSEventPhaseMayBegin = 0x1 << 5,
}

