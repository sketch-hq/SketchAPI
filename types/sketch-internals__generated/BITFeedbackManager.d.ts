interface BITFeedbackManagerUninitialized<InitializedType = BITFeedbackManager> extends BITHockeyBaseManagerUninitialized<BITFeedbackManager> {}
interface BITFeedbackManager extends BITHockeyBaseManager {
  showFeedbackWindow(): void;

  requireUserName(): BITFeedbackUserDataElement;
  setRequireUserName(requireUserName: BITFeedbackUserDataElement): void;
  requireUserEmail(): BITFeedbackUserDataElement;
  setRequireUserEmail(requireUserEmail: BITFeedbackUserDataElement): void;
  showAlertOnIncomingMessages(): boolean;
  setShowAlertOnIncomingMessages(showAlertOnIncomingMessages: boolean): void;
}
declare const BITFeedbackManager: {
  alloc(): BITFeedbackManagerUninitialized;
  class(): BITFeedbackManager;
}

