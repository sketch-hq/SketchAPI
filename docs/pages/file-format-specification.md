---
title: Specification
section: file-format
chapter: Concepts
permalink: /file-format/spec
order: 2
excerpt: Sketch documents are stored as ZIP archives containing JSON encoded data
---

The file format specification defines in human and machine readable format valid Sketch document JSON, and how this changes over time. The specification is written using the JSON Schema open standard, and published in a variety of formats via `npm`.

Use the specification to build robust low level integrations of Sketch such as server and command-line applications. The specification is versioned independantly of Sketch itself and advances every time there's a change to the document structure.

## Formats

### JSON Schema

The core specification is published as JSON Schema from the [sketch-file-format](https://github.com/sketch-hq/sketch-file-format) package.

Use the JSON Schema to generate types, GraphQL schemas and model code or validate Sketch documents you create and manipulate programmatically.

### TypeScript

The TypeScript types are generated automatically from the JSON Schema, and published via the [sketch-file-format-ts](https://github.com/sketch-hq/) package.

Use the types to strongly type data representing Sketch document objects, such as layers and artboards in TypeScript projects.

## Related projects

### Reference files

The [sketch-reference-files](https://github.com/sketch-hq/sketch-reference-files) are a store of automatically generated Sketch file JSON organised by document version and Sketch feature.

The reference file JSON can be accessed from the repository, installed from `npm` or downloaded over HTTP and provide a valuable resource when there's a requirement to automate tests or analysis of real Sketch file fixtures.
