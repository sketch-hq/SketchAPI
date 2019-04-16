interface MSLayerMovementUninitialized<InitializedType = MSLayerMovement> extends NSObjectUninitialized<MSLayerMovement> {}
interface MSLayerMovement extends NSObject {
}
declare const MSLayerMovement: {
  alloc(): MSLayerMovementUninitialized;
  class(): MSLayerMovement;  moveForward(layers: NSArray<any> | any[]): void;
  moveBackward(layers: NSArray<any> | any[]): void;
  canMoveLayerUpHierarchy(layer: MSLayer): boolean;
  moveUpHierarchy(layers: NSArray<any> | any[]): void;
  canMoveLayerToTopOfHierarchy(layer: MSLayer): boolean;
  moveToTopOfHierarchy(layers: NSArray<any> | any[]): void;
  canMoveLayersForward(layers: NSArray<any> | any[]): boolean;
  canMoveLayersBackward(layers: NSArray<any> | any[]): boolean;
  moveToFront(layers: NSArray<any> | any[]): void;
  moveToBack(layers: NSArray<any> | any[]): void;

}

