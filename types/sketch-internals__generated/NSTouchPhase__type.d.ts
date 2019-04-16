declare enum NSTouchPhase {
  NSTouchPhaseBegan = 1 << 0,
  NSTouchPhaseMoved = 1 << 1,
  NSTouchPhaseStationary = 1 << 2,
  NSTouchPhaseEnded = 1 << 3,
  NSTouchPhaseCancelled = 1 << 4,
  NSTouchPhaseTouching,
  NSTouchPhaseAny,
}

