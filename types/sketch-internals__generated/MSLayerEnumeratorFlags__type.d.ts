declare enum MSLayerEnumeratorFlags {
  MSLEDefault = 0,
  MSLEIncludeSelf = 1<<0,
  MSLEBackwards = 1<<1,
  MSLERecursive = 1<<2,
  MSLESkipHidden = 1<<3,
  MSLEMutates = 1<<4,
  MSLETraitsMatchOr = 1<<5,
  MSLEAllOptions,
}

