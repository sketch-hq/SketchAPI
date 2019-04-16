interface ListUninitialized<InitializedType = List> extends ObjectUninitialized<List> {
  initCount_DEPRECATED_ATTRIBUTE(numSlots: number): InitializedType;
}
interface List extends Object {
  copyFromZone_DEPRECATED_ATTRIBUTE(z: void): any;
  setAvailableCapacity_DEPRECATED_ATTRIBUTE(numSlots: number): any;
  objectAt_DEPRECATED_ATTRIBUTE(index: number): any;
  removeObjectAt_DEPRECATED_ATTRIBUTE(index: number): any;
  appendList_DEPRECATED_ATTRIBUTE(otherList: List): any;
  makeObjectsPerform_DEPRECATED_ATTRIBUTE(aSelector: string): any;
}
declare const List: {
  alloc(): ListUninitialized;
  class(): List;  newCount_DEPRECATED_ATTRIBUTE(numSlots: number): any;

}

