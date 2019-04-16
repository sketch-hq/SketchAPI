interface IBCJSONDecoderDelegate {
  decoder_shouldInstantiateObjectOfClass(decoder: BCJSONDecoder, aClass: any): boolean;
}

