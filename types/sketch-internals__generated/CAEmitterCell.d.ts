interface CAEmitterCellUninitialized<InitializedType = CAEmitterCell> extends NSObjectUninitialized<CAEmitterCell> {}
interface CAEmitterCell extends NSObject, INSSecureCoding, ICAMediaTiming {
  shouldArchiveValueForKey(key: NSString | string): boolean;

  name(): NSString;
  setName(name: NSString | string): void;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
  birthRate(): number;
  setBirthRate(birthRate: number): void;
  lifetime(): number;
  setLifetime(lifetime: number): void;
  lifetimeRange(): number;
  setLifetimeRange(lifetimeRange: number): void;
  emissionLatitude(): CGFloat;
  setEmissionLatitude(emissionLatitude: CGFloat): void;
  emissionLongitude(): CGFloat;
  setEmissionLongitude(emissionLongitude: CGFloat): void;
  emissionRange(): CGFloat;
  setEmissionRange(emissionRange: CGFloat): void;
  velocity(): CGFloat;
  setVelocity(velocity: CGFloat): void;
  velocityRange(): CGFloat;
  setVelocityRange(velocityRange: CGFloat): void;
  xAcceleration(): CGFloat;
  setXAcceleration(xAcceleration: CGFloat): void;
  yAcceleration(): CGFloat;
  setYAcceleration(yAcceleration: CGFloat): void;
  zAcceleration(): CGFloat;
  setZAcceleration(zAcceleration: CGFloat): void;
  scale(): CGFloat;
  setScale(scale: CGFloat): void;
  scaleRange(): CGFloat;
  setScaleRange(scaleRange: CGFloat): void;
  scaleSpeed(): CGFloat;
  setScaleSpeed(scaleSpeed: CGFloat): void;
  spin(): CGFloat;
  setSpin(spin: CGFloat): void;
  spinRange(): CGFloat;
  setSpinRange(spinRange: CGFloat): void;
  color(): CGColorRef;
  setColor(color: CGColorRef): void;
  redRange(): number;
  setRedRange(redRange: number): void;
  greenRange(): number;
  setGreenRange(greenRange: number): void;
  blueRange(): number;
  setBlueRange(blueRange: number): void;
  alphaRange(): number;
  setAlphaRange(alphaRange: number): void;
  redSpeed(): number;
  setRedSpeed(redSpeed: number): void;
  greenSpeed(): number;
  setGreenSpeed(greenSpeed: number): void;
  blueSpeed(): number;
  setBlueSpeed(blueSpeed: number): void;
  alphaSpeed(): number;
  setAlphaSpeed(alphaSpeed: number): void;
  contents(): any;
  setContents(contents: any): void;
  contentsRect(): CGRect;
  setContentsRect(contentsRect: CGRect): void;
  contentsScale(): CGFloat;
  setContentsScale(contentsScale: CGFloat): void;
  minificationFilter(): NSString;
  setMinificationFilter(minificationFilter: NSString | string): void;
  magnificationFilter(): NSString;
  setMagnificationFilter(magnificationFilter: NSString | string): void;
  minificationFilterBias(): number;
  setMinificationFilterBias(minificationFilterBias: number): void;
  emitterCells(): NSArray<any>;
  setEmitterCells(emitterCells: NSArray<any> | any[]): void;
  style(): NSDictionary<any, any>;
  setStyle(style: NSDictionary<any, any> | {[key: string]: any}): void;
}
declare const CAEmitterCell: {
  alloc(): CAEmitterCellUninitialized;
  class(): CAEmitterCell;  emitterCell(): CAEmitterCell;
  defaultValueForKey(key: NSString | string): any;

}

