interface ICALayoutManager {
  preferredSizeOfLayer(layer: CALayer): CGSize;
  invalidateLayoutOfLayer(layer: CALayer): void;
  layoutSublayersOfLayer(layer: CALayer): void;
}

