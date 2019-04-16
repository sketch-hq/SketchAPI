interface SMKUSBHTTPResponseUninitialized<InitializedType = SMKUSBHTTPResponse> extends SMKURLResponseUninitialized<SMKUSBHTTPResponse> {}

interface SMKUSBHTTPResponse extends SMKURLResponse {
}

declare const SMKUSBHTTPResponse: {
  alloc(): SMKUSBHTTPResponseUninitialized;
  class(): SMKUSBHTTPResponse;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

