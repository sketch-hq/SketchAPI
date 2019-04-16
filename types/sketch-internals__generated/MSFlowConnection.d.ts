interface MSFlowConnectionUninitialized<InitializedType = MSFlowConnection> extends _MSFlowConnectionUninitialized<MSFlowConnection> {}

interface MSFlowConnection extends _MSFlowConnection {

  isBackAction(): boolean;
  setIsBackAction(isBackAction: boolean): void;
  isValidFlowConnection(): boolean;
  sendingLayer(): MSLayer;
  destinationArtboard(): MSArtboardGroup;
}

declare const MSFlowConnection: {
  alloc(): MSFlowConnectionUninitialized;
  class(): MSFlowConnection;
  flowConnectionTo_ofType(to: MSArtboardGroup, type: MSFlowAnimationType): MSFlowConnection;
  flowConnectionBack(): MSFlowConnection;
  defaultAnimationType(): MSFlowAnimationType;
}

