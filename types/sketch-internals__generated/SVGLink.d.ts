interface SVGLinkUninitialized<InitializedType = SVGLink> extends _SVGLinkUninitialized<SVGLink> {}
interface SVGLink extends _SVGLink {
}
declare const SVGLink: {
  alloc(): SVGLinkUninitialized;
  class(): SVGLink;
}

