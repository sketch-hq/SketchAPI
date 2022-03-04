// The `SketchAPI` aggregate target runs the script that builds the API, but sometimes it's more convenient to refer to a "concrete" library target.
// For example, in case of a workspace spanning across multiple projects, dependencies can only easily be specified among targets belonging to the same project.
// However, with a library target it's possible to specify an "implicit" dependency by linking a target's product with a library in another project.
// The `SketchAPIWrapper` target depends on `SketchAPI` and builds an empty library that can be used for this purpose.
public enum SketchAPIWrapper {}
