---
title: Making A Toolchain, Not Just A Tool
---

Sketch is a great tool for humans, but sometimes (especially in larger teams), we want to let the robots get in on the action too.

Making apps, websites, even icons is all about iteration: make it, try it, debug it, refine it, rinse and repeat.

Whilst we can’t automate the creative stuff, there are some steps in each of these iterations that are just drudge work. Exporting assets at a particular set of sizes and formats is an obvious example here, but maybe you are also supposed to extract certain measurements each time, or fire off certain exports in an email, or submit them to source control, or perform some other simple jobs.

We’ve done our best to make things like exporting a pain-free process from within Sketch itself, but even so, these jobs are often ripe for a more complete form of automation.

Wouldn’t it be nice if you could write scripts that are able to parse sketch files, extracting data and exporting images then doing things with the results?

Wouldn’t it be even nicer if these scripts could run unattended, maybe in response to your document changing, perhaps on a server where Sketch isn’t installed?

In some cases, there may be existing chains of tools and scripts in place as part of your (or your company’s) workflow. Wouldn’t it be nice if you could integrate Sketch with these?

This is why we made [sketchtool](http://sketch.com/tool/).

## What It Isn’t

First, it’s probably sensible to say what sketchtool doesn’t do.

For now, at least, sketchtool cannot create new Sketch documents, nor can it modify existing ones.

We may support a broader range of features at a later date, but for now, sketchtool is all about extracting things from existing documents.

## What It Is

Essentially sketchtool lets you do three categories of thing:

- get a list of pages, artboards, slices
- export pages, artboards, slices or arbitrary layers
- get a full description of the entire document

### Listing

Given a sketch document called Test.sketch, you can list the pages in it like this:

```
sketchtool list pages Test.sketch
```

This will output a JSON record describing the name, id and bounds of each page.

Similarly

```
sketchtool list artboards Test.sketch
sketchtool list slices Test.sketch
```

does the same for the artboards and slices (and exported layers) in a document.

### Exporting

Getting information from a document is all very well, but what you probably want is to export images.

To extract everything that has been marked for export in a document, you can do:

```
sketchtool export layers Test.sketch
```

Similarly:

```
sketchtool export pages Test.sketch
sketchtool export artboards Test.sketch
sketchtool export slices Test.sketch
```

You can also modify the output using various options.

The `--output` option lets you specify the output folder for the export.

The `--formats` option lets you specify a list of formats to use for the export (e.g. “svg,png”).

The `--scales` option lets you specify the scales to export at (x1, x2 etc).

The `--items` option lets you list just one or more items to export, by name or id.

Options such as `--save-for-web`, `--overwriting`, `--compact`, `--trimmed`, and `--compression` also let you tailor the output.

### Dumping Documents

One final option that is available currently with sketchtool is the dump command:

```
sketchtool dump Test.sketch
```

This will output a complete JSON description of the document.

This description is very detailed, and thus the output gets large, quickly. It also exposes quite a lot of internal detail about the underlying model, so it’s subject to change in the future, and if you use this command in scripts, you should be prepared for the possibility that they might break one day.

In many cases, if the information that you are trying to extract isn’t obtainable using the list command, your next best bet may be to export using SVG, and parse that, since it’s a stable format.

If that doesn’t work though, you may be able to use the dump command to obtain the information that you need.

### Future

In the future, we may expand sketchtool to do more.

If you have a feature request, a bug report, or just a story to tell about the cool things that you’re doing with it, please do get in touch.

You can download the latest version of sketchtool [here](http://sketch.com/tool/).

(For comments, I’m [@samdeane](https://twitter.com/samdeane) on Twitter)