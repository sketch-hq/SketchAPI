declare enum MSPropertyTraits {
  MSPropertyTraitNone = 0,
  MSPropertyTraitInfluencesContentRender = 1<<1,
  MSPropertyTraitInfluencesOverlayRender = 1<<2,
  MSPropertyTraitChangesHistory = 1<<3,
  MSPropertyTraitAmendsHistory = 1<<4,
  MSPropertyTraitInfluencesLayerStructure = 1<<5,
  MSPropertyTraitInfluencesMirror = 1<<6,
  MSPropertyTraitRequiresFullContentRefresh = 1<<7,
  MSPropertyTraitInfluencesLayerListPreview = 1<<8,
  MSPropertyTraitSharedObjectUpdated = 1<<9,
  MSPropertyTraitAll,
}

