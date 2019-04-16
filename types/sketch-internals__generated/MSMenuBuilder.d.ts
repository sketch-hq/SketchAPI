interface MSMenuBuilderUninitialized<InitializedType = MSMenuBuilder> extends NSObjectUninitialized<MSMenuBuilder> {}
interface MSMenuBuilder extends NSObject {

  target(): any;
  action(): string;
}
declare const MSMenuBuilder: {
  alloc(): MSMenuBuilderUninitialized;
  class(): MSMenuBuilder;  menuBuilderWithTarget(target: any): any;
  menuBuilderWithTarget_action(target: any, action: string): any;

}

