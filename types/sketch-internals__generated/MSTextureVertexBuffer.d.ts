interface MSTextureVertexBufferUninitialized<InitializedType = MSTextureVertexBuffer> extends NSObjectUninitialized<MSTextureVertexBuffer> {
  initWithVerticies_vertexCount_indicies_indexCount(verticies: MSTextureVertex, vertexCount: NSUInteger, indicies: UInt32, indexCount: NSUInteger): InitializedType;
}
interface MSTextureVertexBuffer extends NSObject {

  verticies(): MSTextureVertex;
  indicies(): UInt32;
  indexCount(): NSUInteger;
  vertexCount(): NSUInteger;
  indiciesLength(): NSUInteger;
  verticiesLength(): NSUInteger;
}
declare const MSTextureVertexBuffer: {
  alloc(): MSTextureVertexBufferUninitialized;
  class(): MSTextureVertexBuffer;
}

