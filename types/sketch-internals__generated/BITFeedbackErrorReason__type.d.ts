declare enum BITFeedbackErrorReason {
  BITFeedbackErrorUnknown,
  BITFeedbackAPIServerReturnedInvalidStatus,
  BITFeedbackAPIServerReturnedInvalidData,
  BITFeedbackAPIServerReturnedEmptyResponse,
  BITFeedbackAPIClientAuthorizationMissingSecret,
  BITFeedbackAPIClientCannotCreateConnection,
}

