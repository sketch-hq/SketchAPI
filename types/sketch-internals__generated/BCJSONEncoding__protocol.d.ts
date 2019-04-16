interface IBCJSONEncoding {
  encodeAsJSON(coder: BCJSONEncoder): void;
  replacementObjectForJSONEncoder(coder: BCJSONEncoder): NSObject;
}

