interface IMSGPUTexture {
  replaceRegion_bytesPerRow_pixels(region: BCIntRect, bytesPerRow: NSUInteger, pixels: void): void;
  width(): NSUInteger;
  height(): NSUInteger;
}

