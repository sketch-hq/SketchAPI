interface NSSoundUninitialized<InitializedType = NSSound> extends NSObjectUninitialized<NSSound> {
  initWithContentsOfURL_byReference(url: NSURL, byRef: boolean): InitializedType;
  initWithContentsOfFile_byReference(path: NSString | string, byRef: boolean): InitializedType;
  initWithData(data: NSData): InitializedType;
  initWithPasteboard(pasteboard: NSPasteboard): InitializedType;
}
interface NSSound extends NSObject, INSCopying, INSSecureCoding, INSPasteboardReading, INSPasteboardWriting {
  setName(string: NSSoundName | null): boolean;
  writeToPasteboard(pasteboard: NSPasteboard): void;
  play(): boolean;
  pause(): boolean;
  resume(): boolean;
  stop(): boolean;
  setChannelMapping(channelMapping: NSArray<any> | any[]): void;
  channelMapping(): NSArray<any>;

  name(): NSSoundName;
  playing(): boolean;
  delegate(): any;
  setDelegate(delegate: any): void;
  duration(): NSTimeInterval;
  volume(): number;
  setVolume(volume: number): void;
  currentTime(): NSTimeInterval;
  setCurrentTime(currentTime: NSTimeInterval): void;
  loops(): boolean;
  setLoops(loops: boolean): void;
  playbackDeviceIdentifier(): NSSoundPlaybackDeviceIdentifier;
  setPlaybackDeviceIdentifier(playbackDeviceIdentifier: NSSoundPlaybackDeviceIdentifier): void;
}
declare const NSSound: {
  alloc(): NSSoundUninitialized;
  class(): NSSound;  soundNamed(name: NSSoundName): NSSound;
  canInitWithPasteboard(pasteboard: NSPasteboard): boolean;
  soundUnfilteredFileTypes(): NSArray<any>;
  soundUnfilteredPasteboardTypes(): NSArray<any>;

  soundUnfilteredTypes(): NSArray<any>;

}

