interface IMSHoverableItem {
  drawHoverWithZoom_color_cache(zoom: CGFloat, color: NSColor, cache: BCCache): void;
  canBeHoveredOnPage(page: MSPage): boolean;
  refreshOverlay(): void;

  hoveredLayer(): MSLayer;
}

