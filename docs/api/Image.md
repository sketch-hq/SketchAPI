---
title: Image
order: 306
section: layers
---

```javascript
var Image = require('sketch/dom').Image
```

An image layer. It is an instance of [Layer](#layer) so all the methods defined there are available.

| Properties |  |
| --- | --- |
| id<span class="arg-type">string</span> | The unique ID of the Image. |
| name<span class="arg-type">string</span> | The name of the Image |
| parent<span class="arg-type">[Group](#group)</span> | The group the Image is in. |
| locked<span class="arg-type">boolean</span> | If the Image is locked. |
| hidden<span class="arg-type">boolean</span> | If the Image is hidden. |
| frame<span class="arg-type">[Rectangle](#rectangle)</span> | The frame of the Image. This is given in coordinates that are local to the parent of the layer. |
| selected<span class="arg-type">boolean</span> | If the Image is selected. |
| flow<span class="arg-type">[Flow](#flow)</span> | The prototyping action associated with the Image. |
| exportFormats<span class="arg-type">[ExportFormat](#export-format)[]</span> | The export formats of the Image. |
| transform<span class="arg-type">object</span> | The transformation applied to the Image. |
| transform.rotation<span class="arg-type">number</span> | The rotation of the Image in degrees, clock-wise. |
| transform.flippedHorizontally<span class="arg-type">boolean</span> | If the Image is horizontally flipped. |
| transform.flippedVertically<span class="arg-type">boolean</span> | If the Image is vertically flipped. |
| style<span class="arg-type">[Style](#style)</span> | The style of the Image. |
| sharedStyle<span class="arg-type">[SharedStyle](#shared-style) / `null`</span> | The associated shared style or `null`. |
| sharedStyleId<span class="arg-type">string / `null`</span> | The ID of the [SharedStyle](#shared-style) or `null`, identical to `sharedStyle.id`. |
| image<span class="arg-type">[ImageData](#imagedata)</span> | The actual image of the layer. |

## Create a new Image

```javascript
var imageLayer = new Image({
  image: 'path/to/image.png',
})
```

The image property accepts a wide range of input:

- an [`ImageData`](#imagedata)
- a `Buffer`
- a native `NSImage`
- a native `NSURL`
- a native `MSImageData`
- a string: path to the file to load the image from
- an object with a `path` property: path to the file to load the image from
- an object with a `base64` string: a base64 encoded image

```javascript
var imageLayer = new Image({
  image: 'path/to/image.png',
  frame: new Rectangle(0, 0, 300, 200),
})
```

By default, an `Image` layer will be created with a size of 100 × 100 pixels, unless you provide a `frame` property on its constructor.

## Original Size

```js
imageLayer.resizeToOriginalSize()
```

Adjust the Image to its original size. This is equivalent to pressing the 'Original Size' button in Sketch's Inspector.

### Returns

The current Image (useful if you want to chain the calls).

For performance reasons, Sketch initializes the `Image` object lazily. So if you want to set the dimensions of your Image layer to those of the original file, you'll first need to create the object, and then call the `resizeToOriginalSize` method.

## `ImageData`

```javascript
var imageData = imageLayer.image

imageData.nsimage // return a native NSImage
imageData.nsdata // return a native NSData representation of the image
```

An `ImageData` is a wrapper around a native `NSImage`.

You can access the native `NSImage` with `nsimage` or a native `NSData` representation of the image with `nsdata`.

```javascript
imageLayer.image.size // { width: 100, height: 100 }
```

As a convenience, you can access the original size of an `ImageData` object via its `size` property.
