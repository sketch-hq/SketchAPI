declare enum MSHandleState {
  MSHandleStateNormal = 0,
  MSHandleStateHighlighted = 1 << 0,
  MSHandleStateHovering = 1 << 1,
  MSHandleStateSelected = 1 << 2,
  MSHandleStateRelatedToSelection = 1 << 4,
}

