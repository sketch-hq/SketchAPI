/// <reference path="./src/_globals.d.ts"/>

import { SketchContext as SketchContextImport } from "./src/Context";

declare global {
    type SketchContext = SketchContextImport;
}
