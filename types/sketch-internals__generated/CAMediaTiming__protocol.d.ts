interface ICAMediaTiming {

  beginTime(): CFTimeInterval;
  setBeginTime(beginTime: CFTimeInterval): void;
  duration(): CFTimeInterval;
  setDuration(duration: CFTimeInterval): void;
  speed(): number;
  setSpeed(speed: number): void;
  timeOffset(): CFTimeInterval;
  setTimeOffset(timeOffset: CFTimeInterval): void;
  repeatCount(): number;
  setRepeatCount(repeatCount: number): void;
  repeatDuration(): CFTimeInterval;
  setRepeatDuration(repeatDuration: CFTimeInterval): void;
  autoreverses(): boolean;
  setAutoreverses(autoreverses: boolean): void;
  fillMode(): CAMediaTimingFillMode;
  setFillMode(fillMode: CAMediaTimingFillMode): void;
}

