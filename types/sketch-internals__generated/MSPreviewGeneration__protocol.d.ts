interface IMSPreviewGeneration {
  generatePreviewWithImageSize_previewSize_colorSpace_backingScale_completionBlock(imageSize: CGSize, previewSize: CGSize, colorSpace: NSColorSpace | null, backingScale: CGFloat, block: MSPreviewGeneratorBlock | null): void;
}

