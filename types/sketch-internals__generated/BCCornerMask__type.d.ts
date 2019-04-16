declare enum BCCornerMask {
  BCCornerTopLeftMask = 1 << BCCornerTopLeft,
  BCCornerTopRightMask = 1 << BCCornerTopRight,
  BCCornerBottomLeftMask = 1 << BCCornerBottomLeft,
  BCCornerBottomRightMask = 1 << BCCornerBottomRight,
  BCCornerMidTopMask = 1 << BCCornerMidTop,
  BCCornerMidLeftMask = 1 << BCCornerMidLeft,
  BCCornerMidRightMask = 1 << BCCornerMidRight,
  BCCornerMidBottomMask = 1 << BCCornerMidBottom,
  BCCornerMaskAll,
  BCCornerMaskCorners,
  BCCornerMaskMids,
}

