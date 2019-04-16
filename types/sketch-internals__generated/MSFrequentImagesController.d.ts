interface MSFrequentImagesControllerUninitialized<InitializedType = MSFrequentImagesController> extends MSFrequentObjectsControllerUninitialized<MSFrequentImagesController> {}

interface MSFrequentImagesController extends MSFrequentObjectsController {
}

declare const MSFrequentImagesController: {
  alloc(): MSFrequentImagesControllerUninitialized;
  class(): MSFrequentImagesController;
  menuItemAttributedTitleForTitle_description(title: NSString | string, description: NSString | string): NSAttributedString;
}

