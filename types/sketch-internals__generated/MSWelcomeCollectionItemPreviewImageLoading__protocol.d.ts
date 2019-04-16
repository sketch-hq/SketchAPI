interface IMSWelcomeCollectionItemPreviewImageLoading {
  fetchPreviewImageWithMaximumPixelSize_completionHandler(maxPixelSize: CGFloat, handler: MSPreviewImageHandler): void;

  providesPreviewImage(): boolean;
  URL(): NSURL;
}

