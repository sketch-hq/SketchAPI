// ********************************
// # Page.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

import { Group } from './Group'
import { Selection } from './Selection'

/**
Represents a Page in a Sketch document.
*/

export class Page extends Group {
  /**
  Make a new page object.

  @param {MSPage} page The underlying model object from Sketch.
  @param document The document that the page belongs to.
  */

  constructor(page, document) {
    super(page)
    this._document = document
  }

  /**
  The layers that the user has selected.

  @return {Selection} A selection object representing the layers that the user has selected.
  */

  get selectedLayers() {
    return new Selection(this)
  }

  /**
  Is this a page?

  All Layer objects respond to this method, but only pages return true.

  @return {bool} true for instances of Group, false for any other layer type.
  */

  get isPage() {
    return true
  }

  /**
  Returns a newly created artboard, which has been added to this page,
  and sets it up using the supplied properties.

  @param properties {dictionary} Properties to apply to the artboard.
  @return {Artboard} the new artboard.
  */

  newArtboard(properties = {}) {
    const frame = this._frameForLayerWithProperties(properties)
    const newLayer = MSArtboardGroup.alloc().initWithFrame_(frame.asCGRect())
    return this._addWrappedLayerWithProperties(newLayer, properties, 'Artboard')
  }

  /**
  Export this page, using the options supplied.

  @discussion

  You can specify a lot of different options for the exporting.

  ### General Options

  - use-id-for-name : normally the exported files are given the same names as the layers they represent, but if this options is true, then the layer ids are used instead; defaults to false.
  - output : this is the path of the folder where all exported files are placed; defaults to "~/Documents/Sketch Exports"
  - overwriting : if true, the exporter will overwrite any existing files with new ones; defaults to false.
  - trimmed: if true, any transparent space around the exported image will be trimmed; defaults to false.
  - scales: this should be a list of numbers; it will determine the sizes at which the layers are exported; defaults to "1"
  - formats: this should be a list of one or more of "png", "jpg", "svg", and "pdf"; defaults to "png" (see discussion below)

  ### SVG options
  - compact : if exporting as SVG, this option makes the output more compact; defaults to false.
  - include-namespaces : if exporting as SVG, this option includes extra attributes; defaults to false.

  ### PNG options
  - save-for-web : if exporting a PNG, this option removes metadata such as the colour profile from the exported file; defaults to false.

  ### JPG options
  - compression : if exporting a JPG, this option determines the level of compression, with 0 being the minimum, 1.0 the maximum; defaults to 1.0
  - progressive : if exporting a JPG, this option makes it progressive; defaults to false.
  - group-contents-only : false,


  @param {dictionary} options Options indicating which sizes and formats to use, etc.
  */

  export(options) {
    const merged = this.exportOptionsMergedWithDefaults(options)
    const exporter = MSSelfContainedHighLevelExporter.alloc().initWithOptions(
      merged
    )
    exporter.exportPage(this.sketchObject)
  }

  /**
  Export this layer (and the ones below it), using the options supplied.

  @param {dictionary} options Options indicating which layers to export, which sizes and formats to use, etc.
  */

  exportArtboards(options) {
    const merged = this.exportOptionsMergedWithDefaults(options)
    const exporter = MSSelfContainedHighLevelExporter.alloc().initWithOptions(
      merged
    )
    exporter.exportLayers(this.sketchObject.artboards())
  }

  /**
  Return a list of tests to run for this class.

  @return {dictionary} A dictionary containing the tests to run. Each key is the name of a test, each value is a function which takes a Tester instance.
  */

  static tests() {
    return {
      tests: {
        testSelectedLayers(tester) {
          const document = tester.newTestDocument()
          const selection = document.selectedLayers
          tester.assert(selection.isEmpty, 'should have an empty selection')

          const page = document.selectedPage
          const group = page.newGroup({ name: 'Test' })
          group.select()

          tester.assert(
            !selection.isEmpty,
            'should no longer have an empty selection'
          )
        },

        testLayerWithID(tester) {
          const document = tester.newTestDocument()
          const page = document.selectedPage
          const group = page.newGroup({ name: 'Test' })
          const { id } = group
          const found = document.layerWithID(id)
          tester.assertEqual(group.sketchObject, found.sketchObject)
        },

        testIsPage(tester) {
          const document = tester.newTestDocument()
          const page = document.selectedPage
          const image = page.newImage()
          tester.assertTrue(page.isPage)
          tester.assertFalse(image.isPage)
        },
      },
    }
  }
}
