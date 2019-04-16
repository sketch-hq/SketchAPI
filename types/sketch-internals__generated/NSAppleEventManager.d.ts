interface NSAppleEventManagerUninitialized<InitializedType = NSAppleEventManager> extends NSObjectUninitialized<NSAppleEventManager> {}
interface NSAppleEventManager extends NSObject {
  setEventHandler_andSelector_forEventClass_andEventID(handler: any, handleEventSelector: string, eventClass: AEEventClass, eventID: AEEventID): void;
  removeEventHandlerForEventClass_andEventID(eventClass: AEEventClass, eventID: AEEventID): void;
  dispatchRawAppleEvent_withRawReply_handlerRefCon(theAppleEvent: AppleEvent, theReply: AppleEvent, handlerRefCon: SRefCon): OSErr;
  suspendCurrentAppleEvent(): NSAppleEventManagerSuspensionID;
  appleEventForSuspensionID(suspensionID: NSAppleEventManagerSuspensionID): NSAppleEventDescriptor;
  replyAppleEventForSuspensionID(suspensionID: NSAppleEventManagerSuspensionID): NSAppleEventDescriptor;
  setCurrentAppleEventAndReplyEventWithSuspensionID(suspensionID: NSAppleEventManagerSuspensionID): void;
  resumeWithSuspensionID(suspensionID: NSAppleEventManagerSuspensionID): void;

  currentAppleEvent(): NSAppleEventDescriptor;
  currentReplyAppleEvent(): NSAppleEventDescriptor;
}
declare const NSAppleEventManager: {
  alloc(): NSAppleEventManagerUninitialized;
  class(): NSAppleEventManager;  sharedAppleEventManager(): NSAppleEventManager;

}

