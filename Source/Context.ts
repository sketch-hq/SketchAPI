import { Application } from "./Application";

export interface SketchContext {
    api(): Application;
    command: {};
    document: {};
    plugin: {};
    scriptPath: {};
    scriptURL: {};
    selection: any[];
}
