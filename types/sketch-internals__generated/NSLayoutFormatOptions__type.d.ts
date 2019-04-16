declare enum NSLayoutFormatOptions {
  NSLayoutFormatAlignAllLeft,
  NSLayoutFormatAlignAllRight,
  NSLayoutFormatAlignAllTop,
  NSLayoutFormatAlignAllBottom,
  NSLayoutFormatAlignAllLeading,
  NSLayoutFormatAlignAllTrailing,
  NSLayoutFormatAlignAllCenterX,
  NSLayoutFormatAlignAllCenterY,
  NSLayoutFormatAlignAllBaseline,
  NSLayoutFormatAlignAllLastBaseline,
  NSLayoutFormatAlignAllFirstBaseline,
  NSLayoutFormatAlignmentMask = 0xFFFF,
  NSLayoutFormatDirectionLeadingToTrailing = 0 << 16,
  NSLayoutFormatDirectionLeftToRight = 1 << 16,
  NSLayoutFormatDirectionRightToLeft = 2 << 16,
  NSLayoutFormatDirectionMask = 0x3 << 16,
}

