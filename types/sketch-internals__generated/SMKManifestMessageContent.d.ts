interface SMKManifestMessageContentUninitialized<InitializedType = SMKManifestMessageContent> extends NSObjectUninitialized<SMKManifestMessageContent> {}
interface SMKManifestMessageContent extends NSObject, ISMKMessageCoding {

  manifest(): NSDictionary<any, any>;
  setManifest(manifest: NSDictionary<any, any> | {[key: string]: any}): void;
}
declare const SMKManifestMessageContent: {
  alloc(): SMKManifestMessageContentUninitialized;
  class(): SMKManifestMessageContent;
}

