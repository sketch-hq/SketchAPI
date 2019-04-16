declare enum FBEdgeOverlapRunCrossingType {
  FBEdgeOverlapRunCrossingTypeUnknown = 0,
  FBEdgeOverlapRunCrossingTypeCrossing = 1<<1,
  FBEdgeOverlapRunCrossingTypeContainedByContour1 = 1<<2,
  FBEdgeOverlapRunCrossingTypeContainedByContour2 = 1<<3,
  FBEdgeOverlapRunCrossingTypeDisjoint = 1<<4,
  FBEdgeOverlapRunCrossingTypeContainedMask,
}

