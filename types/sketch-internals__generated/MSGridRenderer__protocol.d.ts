interface IMSGridRenderer extends IMSRenderer {
  renderGrid_in_origin_context(grid: MSImmutableBaseGrid, rect: CGRect, origin: CGPoint, context: MSRenderingContext): void;
}

