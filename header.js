/*

This is a prototype Javascript API for Sketch.

The intention is to make something which is:

- native Javascript
- an easily understandable subset of the full internals of Sketch
- fully supported by Bohemian between releases (ie we try not to change it, unlike our internal API which we can and do change whenever we need to)
- still allows you to drop down to our internal API when absolutely necessary.

Comments and suggestions for this API are welcome - send them to developers@sketchapp.com.

All code (C) 2016 Bohemian Coding.


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
var rect = group.newShape({frame: new sketch.Rectangle(10, 10, 80, 80)});

var newPage = document.newPage("New Page");
var artboard = newPage.newArtboard({frame: new sketch.Rectangle(0, 0, 100, 100), name:"New Artboard"});

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

*/

var __globals = this;
