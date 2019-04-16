interface SMKArtboardRequestUninitialized<InitializedType = SMKArtboardRequest> extends NSObjectUninitialized<SMKArtboardRequest> {
  initWithArtboardID_rect_additive_constrainedToSize_scale_type(artboardID: SCKObjectID, rect: CGRect, additive: boolean, constrainingSize: CGSize, scale: CGFloat, type: SCKFileImageType): InitializedType;
}
interface SMKArtboardRequest extends NSObject {
  squashableWithRequest(request: SMKArtboardRequest): boolean;
  squashedWithRequest(request: SMKArtboardRequest): SMKArtboardRequest;
  urlWithHost_port_token(host: NSString | string, port: NSUInteger, token: NSString | string): NSURL;

  artboardID(): SCKObjectID;
  rect(): CGRect;
  scale(): CGFloat;
  constrainingSize(): CGSize;
  isConstrained(): boolean;
  isAdditive(): boolean;
  type(): SCKFileImageType;
}
declare const SMKArtboardRequest: {
  alloc(): SMKArtboardRequestUninitialized;
  class(): SMKArtboardRequest;  requestForArtboardID_atScale_type(artboardID: SCKObjectID, scale: CGFloat, type: SCKFileImageType): SMKArtboardRequest;
  requestForArtboardID_atScale_constrainedToSize_type(artboardID: SCKObjectID, scale: CGFloat, size: CGSize, type: SCKFileImageType): SMKArtboardRequest;
  requestForArtboardID_atScale_constrainedToSize_inRect_type(artboardID: SCKObjectID, scale: CGFloat, size: CGSize, rect: CGRect, type: SCKFileImageType): SMKArtboardRequest;
  requestForArtboardID_atScale_additiveInRect_type(artboardID: SCKObjectID, scale: CGFloat, rect: CGRect, type: SCKFileImageType): SMKArtboardRequest;

}

