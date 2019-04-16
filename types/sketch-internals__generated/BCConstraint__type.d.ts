declare enum BCConstraint {
  BCConstraintNone = 0,
  BCConstraintMaxXSizeable = 1 << 0,
  BCConstraintWidthSizeable = 1 << 1,
  BCConstraintMinXSizeable = 1 << 2,
  BCConstraintMaxYSizeable = 1 << 3,
  BCConstraintHeightSizeable = 1 << 4,
  BCConstraintMinYSizeable = 1 << 5,
  BCConstraintAllFixed = 1 << 6,
  BCConstraintAllSizeable,
}

