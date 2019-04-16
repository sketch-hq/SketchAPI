declare enum NSActivityOptions {
  NSActivityIdleDisplaySleepDisabled,
  NSActivityIdleSystemSleepDisabled,
  NSActivitySuddenTerminationDisabled,
  NSActivityAutomaticTerminationDisabled,
  NSActivityUserInitiated,
  NSActivityUserInitiatedAllowingIdleSystemSleep,
  NSActivityBackground = 0x000000FF,
  NSActivityLatencyCritical = 0xFF00000000,
}

