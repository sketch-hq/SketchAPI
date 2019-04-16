interface MSArcVertexBufferUninitialized<InitializedType = MSArcVertexBuffer> extends NSObjectUninitialized<MSArcVertexBuffer> {
  initWithVerticies_vertexCount_indicies_indexCount(verticies: MSArcVertex, vertexCount: NSUInteger, indicies: UInt32, indexCount: NSUInteger): InitializedType;
}
interface MSArcVertexBuffer extends NSObject {

  verticies(): MSArcVertex;
  indicies(): UInt32;
  indexCount(): NSUInteger;
  vertexCount(): NSUInteger;
  indiciesLength(): NSUInteger;
  verticiesLength(): NSUInteger;
}
declare const MSArcVertexBuffer: {
  alloc(): MSArcVertexBufferUninitialized;
  class(): MSArcVertexBuffer;  arcVertexBufferWithBuffers(buffers: NSSet<any>): MSArcVertexBuffer;

}

