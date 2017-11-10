import { Application } from "./Application";

export interface SketchContext {
    api(): Application;
    command: typeof MOBoxedObject;
    document: typeof MOBoxedObject;
    plugin: typeof MOBoxedObject;
    scriptPath: typeof MOBoxedObject;
    scriptURL: typeof MOBoxedObject;
    selection: Array<typeof MOBoxedObject>;
}
