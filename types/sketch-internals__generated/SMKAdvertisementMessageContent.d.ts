interface SMKAdvertisementMessageContentUninitialized<InitializedType = SMKAdvertisementMessageContent> extends NSObjectUninitialized<SMKAdvertisementMessageContent> {}
interface SMKAdvertisementMessageContent extends NSObject, ISMKMessageCoding {

  advertisement(): SMKAdvertisement;
  setAdvertisement(advertisement: SMKAdvertisement): void;
  challenge(): NSString;
  setChallenge(challenge: NSString | string): void;
}
declare const SMKAdvertisementMessageContent: {
  alloc(): SMKAdvertisementMessageContentUninitialized;
  class(): SMKAdvertisementMessageContent;
}

