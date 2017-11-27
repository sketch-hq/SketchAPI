/*

This is a prototype Javascript API for Sketch.

The intention is to make something which is:

- native Javascript
- an easily understandable subset of the full internals of Sketch
- fully supported by Bohemian between releases (ie we try not to change it, unlike our internal API which we can and do change whenever we need to)
- still allows you to drop down to our internal API when absolutely necessary.

Comments and suggestions for this API are welcome - send them to developers@sketchapp.com.


** PLEASE NOTE: this API is not final, and should be used for testing & feedback purposes only. **
** The idea eventually is that it's fixed - but until we've got the design right, it WILL change. **



Example script:

var sketch = context.api()

log(sketch.api_version)
log(sketch.version)
log(sketch.build)
log(sketch.full_version)


var document = sketch.selectedDocument;
var selection = document.selectedLayers;
var page = document.selectedPage;

var group = page.newGroup({frame: new sketch.Rectangle(0, 0, 100, 100), name:"Test"});
var rect = group.newShape({frame: new Sketch.rectangle(10, 10, 80, 80)});

log(selection.isEmpty);
selection.iterate(function(item) { log(item.name); } );

selection.clear();
log(selection.isEmpty);

group.select();
rect.addToSelection();

sketch.getStringFromUser("Test", "default");
sketch.getSelectionFromUser("Test", ["One", "Two"], 1);
sketch.message("Hello mum!");
sketch.alert("Title", "message");

---

The MIT License (MIT)

Copyright (c) 2016 Bohemian Coding.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
