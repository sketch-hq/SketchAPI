interface IMSGradientBarViewDelegate {
  gradientBarViewPreviewColorSpace(gradientBarView: MSGradientBarView): NSColorSpace;
  gradientBarChanged(gradientView: MSGradientBarView): void;
}

