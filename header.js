/*

This is a prototype Javascript API for Sketch.

The intention is to make something which is:

- native Javascript
- an easily understandable subset of the full internals of Sketch
- fully supported by Bohemian between releases (ie we try not to change it, unlike our internal API which we can and do change whenever we need to)
- still allows you to drop down to our internal API when absolutely necessary.

Comments and suggestions for this API are welcome - send them to developer@sketchapp.com.

All code (C) 2016 Bohemian Coding.


** PLEASE NOTE: this API is not final, and should be used for testing & feedback purposes only. **
** The idea eventually is that it's fixed - but until we've got the design right, it WILL change. **



Example script:

var sketch = context.api()

log(sketch.api_version)
log(sketch.version)
log(sketch.build)
log(sketch.full_version)


var document = sketch.frontDocument;
var selection = document.selection;
var page = document.selectedPage;

var group = page.newGroup({frame:sketch.rectangle(0, 0, 100, 100), name:"Test"});
var rect = group.newShape({frame:sketch.rectangle(10, 10, 80, 80)});

log(selection.is_empty());
selection.iterate(function(item) { log(item.name); } );

selection.clear();
log(selection.is_empty());

group.select();
rect.add_to_selection();

sketch.input("Test", "default");
sketch.select("Test", ["One", "Two"], 1);
sketch.message("Hello mum!");
sketch.alert("Title", "message");


*/

var __globals = this;
