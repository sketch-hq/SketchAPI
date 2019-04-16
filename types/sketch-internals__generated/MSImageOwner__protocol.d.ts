interface IMSImageOwner {
  setReducedImage(image: MSImageData): void;

  image(): MSImageData;
  setImage(image: MSImageData): void;
  targetSizeForReduction(): NSSize;
  canReduceImageSize(): boolean;
}

