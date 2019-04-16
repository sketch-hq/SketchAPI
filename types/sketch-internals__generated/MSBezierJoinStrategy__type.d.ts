declare enum MSBezierJoinStrategy {
  MSBezierJoinStrategyNone = 1<<0,
  MSBezierJoinStrategyConnectEndpoints = 1<<1,
  MSBezierJoinStrategyIntersect = 1<<2,
  MSBezierJoinStrategyExtend = 1<<3,
  MSBezierJoinStrategyMirror = 1<<4,
  MSBezierJoinStrategyExtendTangent = 1<<5,
  MSBezierJoinStrategyArc = 1<<6,
  MSBezierJoinStrategyAny,
  MSBezierJoinStrategyDefault,
}

