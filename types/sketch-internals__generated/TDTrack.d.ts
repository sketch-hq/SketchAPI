interface TDTrackUninitialized<InitializedType = TDTrack> extends TDSequenceUninitialized<TDTrack> {}

interface TDTrack extends TDSequence {
}

declare const TDTrack: {
  alloc(): TDTrackUninitialized;
  class(): TDTrack;
  track(): any;
  sequence(): any;
}

